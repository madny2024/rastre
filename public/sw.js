self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>self.clients.claim());
setInterval(()=>self.registration.showNotification("",{silent:true}),25000);