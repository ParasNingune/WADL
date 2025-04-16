import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

const url = 
'mongodb+srv://paras:paras@cluster0.5yav5op.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());

app.post("/submit", async (req, res) => {
    console.log(req.body);
    
    const { name, email, message } = req.body;

    try {
        const client = new MongoClient(url);
        await client.connect();
        
        const db = client.db();
        const collection = db.collection('test');

        const result = await collection.insertOne({
            name: name,
            email: email,
            message: message
        });

        await client.close();

        if (result) {
            console.log("Document inserted successfully");
            res.send("Successful");
        } else {
            console.log("Failed to insert document");
            res.send("Failed");
        }
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
