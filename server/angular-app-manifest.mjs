
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/security-fap/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/security-fap/calculadora",
    "route": "/security-fap"
  },
  {
    "renderMode": 2,
    "route": "/security-fap/calculadora"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24656, hash: '335371bab5f9a71b52a1d1565c10eecbb95a09a80640f578fae78fe5651199d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17172, hash: '0e4ab441702fe048accdb64689eba41f485330d311c82f8608a11cd3527eb80c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calculadora/index.html': {size: 96699, hash: '57979607f780fb37de5216a988188d7f40cc118216730aefd05dfa89e70f47c0', text: () => import('./assets-chunks/calculadora_index_html.mjs').then(m => m.default)},
    'styles-OPUTW5UJ.css': {size: 8043, hash: 'i68XcmjPijU', text: () => import('./assets-chunks/styles-OPUTW5UJ_css.mjs').then(m => m.default)}
  },
};
