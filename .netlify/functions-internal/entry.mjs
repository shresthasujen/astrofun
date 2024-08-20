import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.f42ff538.mjs';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';

const _page0  = () => import('./chunks/index@_@astro.7592239c.mjs');const pageMap = new Map([["src/pages/index.astro", _page0]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.e70cafd2.js"}],"styles":[{"type":"external","src":"/_astro/index.e18352c0.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["E:/suzayn/new-fashion/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index.astro.8f628f6e.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.7592239c.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.e70cafd2.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/shop-black.c7158002.png","/_astro/women.7cc906f7.png","/_astro/men.34186809.png","/_astro/menlatest.99fc0f81.jpg","/_astro/womenlatest.c896c9ac.jpg","/_astro/jewel.85652697.jpg","/_astro/jewllery.45af09c6.jpg","/_astro/shoes.134eb1cf.jpg","/_astro/watch.3578c613.jpg","/_astro/beautyproduct.626237fe.jpg","/_astro/menfashion.5cb24f5e.jpg","/_astro/couplecard.c17cd47b.jpg","/_astro/glass.0705c469.jpg","/_astro/menacces.8f4c51e8.jpg","/_astro/bags.25fb9bba.jpg","/_astro/women.37ddc4ab.jpg","/_astro/glasscard.c777d8c6.jpg","/_astro/cloths.747c30ba.jpg","/_astro/shoescard.9db7ef26.jpg","/_astro/girlslatest.fe449a64.jpg","/_astro/bagcard.292ca880.jpg","/_astro/brownwear.d8caf401.jpg","/_astro/leathershoe.feaa620d.jpg","/_astro/blackjeansmen.f25172f3.jpg","/_astro/couple2.efa34ed8.jpg","/_astro/cargopant.c2291cac.jpg","/_astro/Elsa.c272ae54.jpg","/_astro/overcoat.2e6f3646.jpg","/_astro/mike.9091f86f.jpg","/_astro/ema.292aeeca.jpg","/_astro/christopher.b9dcb99b.jpg","/_astro/classytop.23f4effa.jpg","/_astro/bluedenimmen.7eb9d85a.jpg","/_astro/girlwithhanger.0b1e8e82.jpg","/_astro/girlwithhat.05f433e9.jpg","/_astro/prettymale.f0a22f1c.jpg","/_astro/sunnyfashion.78f0c493.jpg","/_astro/twowomen.5e8e6d2c.jpg","/_astro/Zara.63108840.png","/_astro/prada.92025fbd.jpg","/_astro/charminglady.8f857e85.jpg","/_astro/beautifulwomen.3746e44b.jpg","/_astro/womenlongshirt.9d9e2097.jpg","/_astro/stylishgirl.83943b1d.jpg","/_astro/Lvlogo.6e6b91d8.png","/_astro/bootstrap.bundle.min.aa53d582.js","/_astro/highshirts.7d0dd6ab.jpg","/_astro/whitehoody.31231805.jpg","/_astro/brownsweat.aad290a7.jpg","/_astro/leatherjacket.186d1342.jpg","/_astro/overcoatwomen.00ea7480.jpg","/_astro/womenshat.e12dee3a.jpg","/_astro/womenoutfit.e99d601c.jpg","/_astro/blazerwomen.6f08c600.jpg","/_astro/rachele.588ad71d.png","/_astro/index.e18352c0.css","/favicon.svg","/js/index.js","/js/slider.js","/_astro/hoisted.e70cafd2.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
