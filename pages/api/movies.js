import clientPromise from '../../lib/mongodb.js'

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("moviematch");
  switch (req.method) {
    case "GET":
      const allMovies = await db.collection("movie").find({}).toArray();
      res.json({ status: 200, data: allMovies });
      break;
  }
}
