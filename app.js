import { location } from './utils/index.js';
import native from './utils/native-components.js';
import CandidatePage from './pages/candidate.js';

import { applyTheme } from './controllers/theme-styles/theme-style.js';

const externalCV = location.current.searchParams.get('cv');
const username = location.current.searchParams.get('u');

Promise.all([
  import(externalCV || '/cv/cv.js').then(r => r.default),
  username
    ? fetch(`https://api.github.com/users/${username}/gists`)
      .then(r => r.json())
      .then(gists => fetch(
        gists
          .filter(a => a.files['resume.json'])
          .sort((a, b) => b.updated_at > a.updated_at)[0]
          .files['resume.json'].raw_url
      ).then(r => r.json())
        .catch(() => null))
      .catch(() => null)
    : null,
  fetch('./manifest.json').then(r => r.json()),
  fetch('./package.json').then(r => r.json()),
])
  .then(([cvJs, cvJson, manifest, pkg]) => {
    const cv = cvJson || cvJs;
    native.setTitle(`${cv.basics.name} (${cv.basics.label}) ${manifest.name}`);

    Promise.all([
      // native.addStyleSheet('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700|Work+Sans:300,600&display=swap'),
      native.addStyleSheet('./css/candidate.css'),
    ]).then(() => {
      native.render(CandidatePage({ cv, manifest }));
      applyTheme({ color: cv.color });
    });

    if (
      manifest.version === pkg.version && // to skip the service worker on development
      'serviceWorker' in navigator
    ) {
      navigator.serviceWorker.register('./service-worker.js');
    }
  })
  .catch((err) => {
    native.render(`
      <div style="height:50px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
          ${err}
      </div>
    `);
  });

window.onload = function () { document.getElementsByTagName('body')[0].className += 'loaded'; }
