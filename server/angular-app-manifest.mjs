
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/calculadora-fap/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/calculadora-fap/calculadora",
    "route": "/calculadora-fap"
  },
  {
    "renderMode": 2,
    "route": "/calculadora-fap/calculadora"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24659, hash: '86ec1ff80af568bee3470e086142442048ee437462fea33e01200a7bd71f8de3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17175, hash: '1582520e3e0f8f39f83cb3cd9414d1dc568cb56349816fd51e2a5f5407c20d9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calculadora/index.html': {size: 96702, hash: 'ac06ca962ab9c839a10414891b8b449fb5eea5ef24027320767fb90a9f9fb4c5', text: () => import('./assets-chunks/calculadora_index_html.mjs').then(m => m.default)},
    'styles-OPUTW5UJ.css': {size: 8043, hash: 'i68XcmjPijU', text: () => import('./assets-chunks/styles-OPUTW5UJ_css.mjs').then(m => m.default)}
  },
};
