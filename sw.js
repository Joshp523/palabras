// Keeps Verbos working offline. Bump V when you upload a new version so phones fetch it.
const V='esp-v1',A=['./','index.html','data.js','lex.js','llama.svg','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
// only clear this app's own old caches: other apps on the same site share cache storage
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('esp-')&&x!==V).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).hostname.endsWith('supabase.co'))return;e.respondWith(caches.match(e.request).then(r=>{const f=fetch(e.request).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp));return res}).catch(()=>r);return r||f}))});
