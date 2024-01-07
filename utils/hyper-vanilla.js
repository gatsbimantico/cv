/* global globalThis, document  */
/* eslint func-names: [2, "always"] */
/**
 * State API
 * The browser has a mechanism for persistent storage, but it doesn't provide one for inMemory storage
 * Is also doesn't natively provide observability
 */
globalThis.State = function State() {
  const observers = new Map();
  const inMemoryStorage = new Map();

  return new Proxy(
    {
      observe(property, callback) {
        if (!observers.has(property)) observers.set(property, new Set());

        const observerSet = observers.get(property);
        observerSet.add(callback);

        return () => {
          observerSet.delete(callback);
          if (observerSet.size === 0) observers.delete(property);
        };
      },
      getStateSnapshot() {
        const snapshot = {};
        inMemoryStorage.forEach((value, key) => {
          snapshot[key] = value;
        });
        return snapshot;
      }
    },
    {
      get(target, property) {
        return target[property] ? target[property] : inMemoryStorage.get(property);
      },
      set(target, property, newValue) {
        const oldValue = inMemoryStorage.get(property);
        inMemoryStorage.set(property, structuredClone(newValue));

        if ((!oldValue || oldValue !== newValue) && observers.get(property)?.size > 0) {
          for (const observer of observers.get(property)) observer(structuredClone(newValue));
        }

        return true;
      },
    },
  );
};
globalThis.State.global = new globalThis.State();
// example usage
// const state = new globalThis.State();
// // or const state = globalThis.State.global;
// state.hello='hi'
// state.hello
// const unobserve = state.observe('hello', newValue => console.log('observer1', newValue));
// state.hello='hello'
// state.observe('hello', newValue => console.log('observer2', newValue));
// state.hello='world'
// state.hello='world'
// unobserve();
// state.hello='of chat'

/**
 * Communicator API
 * This API addresses differences in communication strategy that are native to the browser
 */
globalThis.Communicator = function Communicator(target) {
  const SPECIAL_KEY = {
    TO_GET: 'messages',
    TO_SET: 'observed',
  };
  const STATE_RECOVERY_PROP = '_communicator_state_';

  if (!target[STATE_RECOVERY_PROP]) {
    target[STATE_RECOVERY_PROP] = new globalThis.State();

    // The many ways to listen in target
    if ('innerHTML' in target) {
      // DOM Element, here we use listeners and detail. Listener will die when target is destroyed
      target.addEventListener('message', (event) => {
        target[STATE_RECOVERY_PROP][SPECIAL_KEY.TO_GET] = event.data || event.detail;
      });
    } else if ('onmessage' in target) {
      // Single listener with many observers via State
      target.onmessage = (event) => {
        target[STATE_RECOVERY_PROP][SPECIAL_KEY.TO_GET] = event.data || event.detail;
      };
    }

    target[STATE_RECOVERY_PROP].observe(SPECIAL_KEY.TO_SET, (message) => {
      // The many ways to send messages
      if ('innerHTML' in target) {
        target.dispatchEvent(new CustomEvent('message', { bubbles: false, detail: message }));
      } else if ('postMessage' in target) {
        target.postMessage(message);
      } else if ('send' in target) {
        target.send(message);
      }
    });
  }

  return target[STATE_RECOVERY_PROP];
};

// Example usage
const state = new globalThis.State();

state.running = true;
state.boxSize = 10;
state.ysize = Math.round(globalThis.innerHeight / state.boxSize);
state.xsize = Math.round(globalThis.innerWidth / state.boxSize);

console.log(state.xsize * state.ysize, 'DOM elements');

const key = (x, y) => `${x},${y}`;

const Cell = ({ x, y }) => {
  const cellKey = key(x, y);
  const element = document.createElement('div');
  element.classList.add('cell');

  // element.onmouseenter = () => {
  //     state[key(x - 2, y - 2)] = 1;
  //     state[key(x - 1, y - 2)] = 1;
  //     state[key(x - 0, y - 2)] = 1;
  //     state[key(x + 1, y - 2)] = 1;
  //     state[key(x + 2, y - 2)] = 1;
  //     state[key(x + 2, y - 1)] = 1;
  //     state[key(x + 2, y - 0)] = 1;
  //     state[key(x + 2, y + 1)] = 1;
  //     state[key(x + 2, y + 2)] = 1;
  //     state[key(x + 1, y + 2)] = 1;
  //     state[key(x + 0, y + 2)] = 1;
  //     state[key(x - 1, y + 2)] = 1;
  //     state[key(x - 2, y + 2)] = 1;
  //     state[key(x - 2, y + 1)] = 1;
  //     state[key(x - 2, y + 0)] = 1;
  //     state[key(x - 2, y - 1)] = 1;
  //     state[cellKey] = 1;
  // };

  // internal status
  // let neighbours = 0;
  // const updateNeighbours = (value) => {
  //   setTimeout(() => {
  //   neighbours += value ? 1 : -1;

  //   let newValue = state[cellKey];
  //   if (newValue && neighbours < 2) {
  //     // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  //     newValue = false;
  //   } else if (newValue && (neighbours === 2 || neighbours === 3)) {
  //     // Any live cell with two or three live neighbours lives on to the next generation.
  //     newValue = true;
  //   } else if (newValue && neighbours > 3) {
  //     // Any live cell with more than three live neighbours dies, as if by overpopulation.
  //     newValue = false;
  //   } else if (!newValue && neighbours === 3) {
  //     // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  //     newValue = true;
  //   }

  //   if (state[cellKey] !== newValue) {
  //       state[cellKey] = newValue;
  //     }
  //     },1000)
  // };

  // if (x > 0) {
  //   state.observe(key(x - 1, y), updateNeighbours);
  // }

  // if (x < state.xsize) {
  //   state.observe(key(x + 1, y), updateNeighbours);
  // }

  // if (y > 0) {
  //   state.observe(key(x, y - 1), updateNeighbours);
  // }

  // if (y < state.ysize) {
  //   state.observe(key(x, y + 1), updateNeighbours);
  // }

  // if (x > 0 && y > 0) {
  //   state.observe(key(x - 1, y - 1), updateNeighbours);
  // }

  // if (x < state.xsize && y < state.ysize) {
  //   state.observe(key(x + 1, y + 1), updateNeighbours);
  // }

  // if (y > 0 && x < state.xsize) {
  //   state.observe(key(x + 1, y - 1), updateNeighbours);
  // }

  // if (x > 0 && y < state.ysize) {
  //   state.observe(key(x - 1, y + 1), updateNeighbours);
  // }

  // Respond visually to own changes
  const update = (value) => {
    requestAnimationFrame(() => {
      if (value) {
        element.classList.add('alive');
      } else {
        element.classList.remove('alive');
      }
    });
  };
  state.observe(cellKey, update);

  // Initial state
  state[cellKey] = Math.random() > 0.95 ? 1 : 0;

  return element;
};

const Row = ({ y }) => {
  const element = document.createElement('div');
  element.setAttribute('style', `display:flex;height:${state.boxSize}px;`);

  Array.from({ length: state.xsize }).forEach((a, x) => {
    // setTimeout(() => {
      const cell = Cell({ x, y });
      element.appendChild(cell);
    // });
  });

  return element;
};

const workerScript = `
onmessage = (event) => {
  const state = event.data;

  const key = (x, y) => x + ',' + y;
  const newState = {};

  // mouse
  state[key(state.mousePosX || 0, state.mousePosY || 0)] = 1;

  for (const y of Array.from({ length: state.ysize }).keys()) {
    for (const x of Array.from({ length: state.xsize }).keys()) {
      const neighbours = [
        state[key(x - 1, y - 1)],
        state[key(x, y - 1)],
        state[key(x + 1, y - 1)],
        state[key(x - 1, y)],
        state[key(x + 1, y)],
        state[key(x - 1, y + 1)],
        state[key(x, y + 1)],
        state[key(x + 1, y + 1)],
      ].filter(Boolean).length;
      const targetKey = key(x, y);
      let newValue = state[targetKey];
      newState[targetKey] = newValue;
      if (newValue && neighbours < 2) {
        // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        newValue = 0;
      } else if (newValue && (neighbours === 2 || neighbours === 3)) {
        // Any live cell with two or three live neighbours lives on to the next generation.
        newValue = neighbours;
      } else if (newValue && neighbours > 3) {
        // Any live cell with more than three live neighbours dies, as if by overpopulation.
        newValue = 0;
      } else if (!newValue && neighbours === 3) {
        // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        newValue = neighbours;
      }

      newState[key(x, y)] = newValue;
    }
  }

  // mouse
  newState[key(state.mousePosX || 0, state.mousePosY || 0)] = 1;

  postMessage(newState);
};
`;

const workerBlob = new Blob([workerScript], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(workerBlob));

const runTheGame = async () => {
  if (!state.running) return;

  state.running = false;

  const snapshot = state.getStateSnapshot();
  const newState = await new Promise(res => {
    worker.onmessage = (event) => {
      res(event.data);
    };

    worker.postMessage(snapshot);
  });

  Object.entries(newState).forEach(([targetKey, newValue]) => {
    if (snapshot[targetKey] !== newValue) {
      state[targetKey] = newValue;
    }
  });

  state.running = true;

  state.tick = !state.tick;
};

const GameOfLife = () => {
  const element = document.createElement('div');
  element.setAttribute('style', 'position:absolute;z-index:-1;top:0;left:0;overflow:hidden;width:100vw;height:100vh;');
  const onTick = () => {
    // const delay = state.lastRun ? state.lastRun - Date.now() + 1_000 / state.frameRate : 1;
    // if (!state.timeout) {
    //   state.timeout = setTimeout(() => {
    //     state.timeout = 0;
        runTheGame();
    //   }, 1000);
    // }
  };

  window.addEventListener('mousemove', (event) => {
    state.mousePosX = Math.floor((event.clientX - element.offsetLeft) / state.boxSize);
    state.mousePosY = Math.floor((event.clientY - element.offsetTop) / state.boxSize);
    state[key(state.mousePosX, state.mousePosY)] = 1;
  });

  Array.from({ length: state.ysize }).forEach((a, y) => {
    // setTimeout(() => {
      const row = Row({ y });
      element.appendChild(row);
    // });
  });

  state.observe('tick', onTick);
  onTick();
  return element;
};

const GameControls = () => {
  const controls = document.createElement('section');
  // const running = {
  //   input: document.createElement('input'),
  //   label: document.createElement('label'),
  //   text: document.createElement('span'),
  // };
  // running.label.replaceChildren(running.input, running.text);

  // running.text.textContent = 'Is running?';
  // running.input.setAttribute('type', 'checkbox');
  // running.input.checked = Boolean(state.running);

  // running.input.onchange = () => {
  //   state.running = running.input.checked;
  //   runTheGame();
  // };

  // controls.replaceChildren(running.label);

  return controls;
};

const styleSheet = document.createElement('style');
styleSheet.textContent = `
.cell { width:${state.boxSize}px;height:${state.boxSize}px;background: transparent; }
.cell.alive { background:#CCC; }
`;

document.body.replaceChildren(GameOfLife(), GameControls(), styleSheet);
