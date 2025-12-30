import {MongoClient} from 'mongodb';
let client=null;
async function getCol(){
  if(!client) client=new MongoClient(process.env.MONGO_URL);
  if(!client.topology) await client.connect();
  return client.db('track').collection('coords');
}
export default async function handler(req,res){
  if(req.method==='POST'){
    await (await getCol()).insertOne(req.body);
    return res.status(204).end();
  }
  if(req.method==='GET'){
    const pts=await (await getCol()).find({id:req.query.id}).sort({t:1}).toArray();
    return res.json(pts);
  }
  res.status(405).end();
}