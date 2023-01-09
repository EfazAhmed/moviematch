import clientPromise from '../../lib/mongodb.js'

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("moviematch");
    switch (req.method) {
        case "GET":
            const q = req?.query?.["q"];
            // res.json({ status: query });
            const re = { $regex: `^${q}`, $options: 'i' };
            const movies = await db.collection("movie").find({ "title": re }).limit(15).toArray();
            res.json({ status: 200, data: movies });
            break;
    }
}
