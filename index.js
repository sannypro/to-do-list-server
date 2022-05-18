
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

// b1mLrJ6GrClB2Lwf

app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://to-do-list:b1mLrJ6GrClB2Lwf@cluster0.ifs5i.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    await client.connect();
    const notesCollection = client.db('To-do-list').collection('notes')
    try {
        app.post("/note", async (req, res) => {
            const notes = req.body;
            const result = await notesCollection.insertOne(notes);
            res.send(result)

        })
        app.get("/note", async (req, res) => {
            const email = req.query.email
            const query = { email: email }
            console.log(query);
            const result = await notesCollection.find(query).toArray();
            res.send(result)

        })

    }

    finally {

    }
}
run().catch(console.dir);

app.listen(port)