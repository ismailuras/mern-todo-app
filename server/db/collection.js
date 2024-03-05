import { MongoClient, ServerApiVersion } from "mongodb";

const password = encodeURIComponent(process.env.PASSWORD);
const uri =
  `mongodb+srv://ismailuras09:${password}@cluster0.wef4uha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` ||
  "";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
} catch (error) {
  console.log(error);
}

let db = client.db("todos");

export default db;
