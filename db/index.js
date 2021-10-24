const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ProjectLeadsTeamUCI:Y61b7bQc38bvgFr3@cryptomaster.a1bki.mongodb.net/CoinDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = async function syncDB() { await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/CoinDB', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },) }