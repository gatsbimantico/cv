import { location } from './utils/index.js';
import native from './utils/native-components.js';
import CandidatePage from './pages/candidate.js';

const externalCV = location.current.searchParams.get('cv');
console.log(location.current.pathname);

Promise.all([
    import(externalCV || '/cv/cv.js').then(r => r.default),
    fetch('./manifest.json').then(r => r.json()),
    fetch('./package.json').then(r => r.json()),
])
    .then(([cv, man, pkg]) => {
        console.log([cv, man, pkg]);

        native.setTitle(`${cv.name} (${cv.role}) ${man.name}`);

        Promise.all([
            // native.addStyleSheet('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700|Work+Sans:300,600&display=swap'),
            native.addStyleSheet('./css/candidate.css'),
        ]).then(() => {
            // document.body.innerHTML = new CandidatePage(cv);
            new CandidatePage(cv);
        });


        if (
            man.version === pkg.version && // to skip the service worker on development
            'serviceWorker' in navigator
        ) {
            navigator.serviceWorker.register('./service-worker.js');
        }
    })
    .catch((err) => {
        document.body.innerHTML = `
        <div style="height:50px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
            ${err}
        </div>
        `;
    });

window.onload = function () { document.getElementsByTagName('body')[0].className += 'loaded'; }