import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_C7KkCMV5.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/macbookair/Desktop/Universite%CC%81%202024%20MMI%201/SAE%20S2/sae-203-2025-Veloza-juan-camilo/","cacheDir":"file:///Users/macbookair/Desktop/Universite%CC%81%202024%20MMI%201/SAE%20S2/sae-203-2025-Veloza-juan-camilo/node_modules/.astro/","outDir":"file:///Users/macbookair/Desktop/Universite%CC%81%202024%20MMI%201/SAE%20S2/sae-203-2025-Veloza-juan-camilo/dist/","srcDir":"file:///Users/macbookair/Desktop/Universite%CC%81%202024%20MMI%201/SAE%20S2/sae-203-2025-Veloza-juan-camilo/src/","publicDir":"file:///Users/macbookair/Desktop/Universite%CC%81%202024%20MMI%201/SAE%20S2/sae-203-2025-Veloza-juan-camilo/public/","buildClientDir":"file:///Users/macbookair/Desktop/Universite%CC%81%202024%20MMI%201/SAE%20S2/sae-203-2025-Veloza-juan-camilo/dist/","buildServerDir":"file:///Users/macbookair/Desktop/Universite%CC%81%202024%20MMI%201/SAE%20S2/sae-203-2025-Veloza-juan-camilo/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/activites/[id]","isIndex":false,"type":"page","pattern":"^\\/activites\\/([^/]+?)\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/activites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/activites","isIndex":true,"type":"page","pattern":"^\\/activites\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activites/index.astro","pathname":"/activites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"},{"type":"inline","content":".scrollbar-hide[data-astro-cid-bgoom2kq]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-bgoom2kq]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/festival","isIndex":false,"type":"page","pattern":"^\\/festival\\/?$","segments":[[{"content":"festival","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/festival.astro","pathname":"/festival","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/invites/[id]","isIndex":false,"type":"page","pattern":"^\\/invites\\/([^/]+?)\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/invites","isIndex":true,"type":"page","pattern":"^\\/invites\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invites/index.astro","pathname":"/invites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/participer","isIndex":false,"type":"page","pattern":"^\\/participer\\/?$","segments":[[{"content":"participer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/participer.astro","pathname":"/participer","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/politiqueconfi","isIndex":false,"type":"page","pattern":"^\\/politiqueconfi\\/?$","segments":[[{"content":"politiqueconfi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politiqueconfi.astro","pathname":"/politiqueconfi","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/programme","isIndex":false,"type":"page","pattern":"^\\/programme\\/?$","segments":[[{"content":"programme","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme.astro","pathname":"/programme","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"},{"type":"inline","content":"@media (min-width: 1024px){.lg\\:grid-cols-13[data-astro-cid-tnrayxkv]{grid-template-columns:repeat(13,minmax(0,1fr))}}\n"}],"routeData":{"route":"/reservation/[id]","isIndex":false,"type":"page","pattern":"^\\/reservation\\/([^/]+?)\\/?$","segments":[[{"content":"reservation","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/reservation/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/reservation","isIndex":true,"type":"page","pattern":"^\\/reservation\\/?$","segments":[[{"content":"reservation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/reservation/index.astro","pathname":"/reservation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.DqvoTPOr.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/activites/[id].astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/activites/index.astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/festival.astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/invites/[id].astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/invites/index.astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/participer.astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/politiqueconfi.astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/programme.astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/reservation/[id].astro",{"propagation":"none","containsHead":true}],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/reservation/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/activites/[id]@_@astro":"pages/activites/_id_.astro.mjs","\u0000@astro-page:src/pages/activites/index@_@astro":"pages/activites.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/festival@_@astro":"pages/festival.astro.mjs","\u0000@astro-page:src/pages/invites/[id]@_@astro":"pages/invites/_id_.astro.mjs","\u0000@astro-page:src/pages/invites/index@_@astro":"pages/invites.astro.mjs","\u0000@astro-page:src/pages/participer@_@astro":"pages/participer.astro.mjs","\u0000@astro-page:src/pages/politiqueconfi@_@astro":"pages/politiqueconfi.astro.mjs","\u0000@astro-page:src/pages/programme@_@astro":"pages/programme.astro.mjs","\u0000@astro-page:src/pages/reservation/[id]@_@astro":"pages/reservation/_id_.astro.mjs","\u0000@astro-page:src/pages/reservation/index@_@astro":"pages/reservation.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BislJ-Ba.mjs","/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DbcHCIJ9.mjs","/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Carrousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carrousel.astro_astro_type_script_index_0_lang.7tscsS4x.js","/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.i9tR_wOe.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Carrousel.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\".carousel-track\"),t=document.querySelector(\".carousel-prev\"),c=document.querySelector(\".carousel-next\"),o=document.querySelectorAll(\".carousel-track > div\");if(!e||!t||!c||!o.length)return;const n=o[0].offsetWidth+16;t.addEventListener(\"click\",()=>{e.scrollLeft-=n*2}),c.addEventListener(\"click\",()=>{e.scrollLeft+=n*2})});"],["/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"#menu-btn\"),r=document.querySelector(\"#menu\"),i=document.body;t&&r&&t.addEventListener(\"click\",()=>{const e=t.ariaExpanded===\"true\",s=!e;t.ariaExpanded=String(s),r.ariaHidden=String(e),header.setAttribute(\"aria-expanded\",String(s)),i.classList.toggle(\"noscroll\",s)});const n=document.querySelector(\"#header\");let l=window.scrollY,o=!1;const a=205;function c(){const e=window.scrollY;e>a?n.classList.add(\"bg-white\"):n.classList.remove(\"bg-white\"),e>l&&e>a?n.classList.add(\"-translate-y-full\"):(e<l||e<=a)&&n.classList.remove(\"-translate-y-full\"),l=e,o=!1}window.addEventListener(\"scroll\",()=>{o||(window.requestAnimationFrame(c),o=!0)});"]],"assets":["/_astro/Star.CXRKwDQf.svg","/_astro/cinenight.Gcki54ze.webp","/_astro/ticket.DHP93vQ-.webp","/_astro/cineexperimental1.CABxPBMf.webp","/_astro/cineindependiente1.BgOBxNyt.webp","/_astro/doubsornans1.09sCaXN_.webp","/_astro/affichedesktop.DVNOcYal.webp","/_astro/logofestival.ly5hgQ45.webp","/_astro/fille.Cqrc5_tZ.webp","/_astro/image-1.C0vg0j7M.webp","/_astro/image.-9FKv-5G.webp","/_astro/image-2.vqoo6J0s.webp","/_astro/affiche.BDh8YC_s.webp","/_astro/cinemaPleinAir.Bx__uKMm.webp","/_astro/reservation.X5hJ90ow.svg","/_astro/IG.DkhO5dvp.svg","/_astro/Facebook.C9eSJTqz.svg","/_astro/youtube.DpQLMVDs.svg","/_astro/Logow.B6owEETS.svg","/_astro/Tiktok.DR7p5Sjw.svg","/_astro/Logo.B0Kr-PZp.svg","/_astro/X.BFw0TFs0.svg","/_astro/_id_.DqvoTPOr.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9M0LjD1TauKEPw/46fqg3Xt5q1xjeI417K0lmqWO8FE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
