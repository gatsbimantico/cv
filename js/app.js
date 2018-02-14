import {Candidate} from './candidate.js';

var cvPath = (
    window.location.hash ? window.location.hash.slice(1) : './cv'
  ) + '.js';

import(cvPath)
  .then(module => module.cv)
  .then(cv => new Candidate(cv))
;
