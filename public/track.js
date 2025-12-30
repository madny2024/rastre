const ID = new URLSearchParams(location.search).get('id') || localStorage.getItem('uid') || crypto.randomUUID();
localStorage.setItem('uid',ID);
async function send({lat,lng,acc}){
  await fetch('/api/pos',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:ID,lat,lng,acc,t:Date.now()})});
}
navigator.serviceWorker.register('sw.js');
navigator.geolocation.watchPosition(p=>{
  const {latitude:lat,longitude:lng,accuracy:acc}=p.coords;
  send({lat,lng,acc});
  document.getElementById('s').textContent=`${lat.toFixed(6)}, ${lng.toFixed(6)}`;
},null,{enableHighAccuracy:true,timeout:4000,maximumAge:0});