const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

app.get("/", (req, res) => {
  res.send("Home");
});

const client = new MongoClient(
  "mongodb+srv://kapil:kapil123@cluster0.3w3yt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
  }
); // { useUnifiedTopology: true } removes connection warnings;

const callIt = async () => {
  try {
    await client.connect();
    console.log("Connected successfully");

    const db = client.db("TASK");
    const col = db.collection("TASK");

    let DATA = [
      {
        university: "USAL",
        name: "Computer Science",
        level: "Excellent",
        contact: { phone: "999999999", email: "test@gmail.com" },
      },
      {
        university: "USAL",
        name: "Electronics",
        level: "Intermediate",
        contact: { phone: "999999988", email: "test1@gmail.com" },
      },
      {
        university: "USAL",
        name: "Communication",
        level: "Excellent",
      },
    ];

    // await col.insertMany(DATA);   Insertion of data;

    // Task 2

    await col.updateMany(
      {
        university: "USAL",
        level: "Intermediate",

        "contact.phone": "999999988",
      },
      { $set: { name: "IT" } }
    );

    //task3

    // col.updateMany(
    //   {},

    //   { $currentDate: { createdA2: true } }
    // );

    //task4

    // col.updateMany(
    //   {},

    //   { $set: { amount: 500 } }
    // );

    //task5

    // col.updateMany(
    //   { level: "Excellent" },

    //   { $inc: { amount: 100 } }
    // );

    //task6

    // col.updateMany(
    //   { amount: { $lt: 600 } },

    //   { $set: { amount: 700 } }
    // );

    console.log("Collection DATA is : ", await col.find().toArray());
  } catch (err) {
    console.log(err.stack);
  } finally {
    client.close();
  }
};

callIt();

app.listen(8000, () => {
  console.log("Running on server : ", 8000);
});
