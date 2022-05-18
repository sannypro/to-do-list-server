
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
