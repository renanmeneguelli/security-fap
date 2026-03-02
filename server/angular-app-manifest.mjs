
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
    'index.csr.html': {size: 24656, hash: '1ee576b9ccc0050486ffb17b4d56dc8bd353773ff084c5dd09622be60cc39634', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17172, hash: 'a52abce9a68fd9f670ea53b42a5b4406be76e9c3535826a200b67ccc4db54083', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calculadora/index.html': {size: 96699, hash: 'f456a41b24c28e4adf180b2718764d8535a3c49625f789e71448c5438a95a1e1', text: () => import('./assets-chunks/calculadora_index_html.mjs').then(m => m.default)},
    'styles-OPUTW5UJ.css': {size: 8043, hash: 'i68XcmjPijU', text: () => import('./assets-chunks/styles-OPUTW5UJ_css.mjs').then(m => m.default)}
  },
};
