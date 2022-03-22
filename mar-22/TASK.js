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

    const db = client.db("Mar-22");
    const col = db.collection("TASKS");

    // TASK1

    // let DATA = {
    //   address: {
    //     building: "1007",
    //     coord: [-73.856077, 40.848447],
    //     street: "Morris Park Ave",
    //     zipcode: "10462",
    //   },
    //   borough: "Bronx",
    //   cuisine: "Bakery",
    //   grades: [
    //     { date: { $date: 1393804800000 }, grade: "A", score: 2 },
    //     { date: { $date: 1378857600000 }, grade: "A", score: 6 },
    //     { date: { $date: 1358985600000 }, grade: "A", score: 10 },
    //     { date: { $date: 1322006400000 }, grade: "A", score: 9 },
    //     { date: { $date: 1299715200000 }, grade: "B", score: 14 },
    //   ],
    //   name: "Morris Park Bake Shop",
    //   restaurant_id: "30075445",
    // };
    // await col.insertOne(DATA);
    // console.log(await col.find().toArray());

    // TASK2

    // console.log(
    //   "TASK2 is : ",
    //   await col
    //     .find({
    //       $and: [
    //         {
    //           restaurant_id: { $exists: true },
    //           name: { $exists: true },
    //           cuisine: { $exists: true },
    //           borough: { $exists: true },
    //         },
    //       ],
    //     })
    //     .toArray()
    // );

    // TASK3

    // console.log(
    //   "TASK3 is : ",
    //   await col
    //     .find(
    //       {
    //         $and: [
    //           {
    //             restaurant_id: { $exists: true },
    //             name: { $exists: true },
    //             cuisine: { $exists: true },
    //             borough: { $exists: true },
    //           },
    //         ],
    //       },
    //       { projection: { _id: false } }
    //     )
    //     .toArray()
    // );

    // TASK4

    // console.log(
    //   "TASK4 is : ",
    //   await col
    //     .find(
    //       {},
    //       {
    //         projection: {
    //           restaurant_id: 1,
    //           name: 1,
    //           cuisine: 1,
    //           borough: 1,
    //           "address.zipcode": 1,
    //           _id: false,
    //         },
    //       }
    //     )
    //     .toArray()
    // );

    // TASK5

    // console.log("TASK5 is : ", await col.find({ borough: "Bronx" }).toArray());

    // TASK6

    // console.log(
    //   "TASK6 : ",
    //   await col
    //     .find({ borough: "Bronx" }, { projection: { _id: false } })
    //     .limit(5)
    //     .toArray()
    // );

    // TASK7

    // console.log(
    //   "TASK7 : ",
    //   await col
    //     .find({ name: "apple" })
    //     .toArray()
    // );

    // TASK8

    // console.log(
    //   "TASK8 : ",
    //   await col
    //     .find({
    //       $and: [
    //         {
    //           "grades.score": { $elemMatch: { $gt: 70 } },
    //         },
    //         {
    //            "address.coord.0": {
    //     $lt: -65.754168,
    // },
    //         },
    //         { name: { $ne: "apple" } },
    //       ],
    //     })
    //     .toArray()
    // );

    // TASK9

    // console.log(
    //   "TASK9 : ",
    //   await col
    //     .find({
    //       $and: [
    //         {
    //           "grades.score": { $elemMatch: { $gt: 70 } },
    //         },
    //         {
    //           "address.coord.1": {
    //             $lt: -65.754168,
    //           },
    //         },
    //         { name: { $ne: "apple" } },
    //       ],
    //     })
    //     .toArray()
    // );

    // TASK10

    // console.log(
    //   "TASK10 is : ",
    //   await col
    //     .find(
    //       {
    //         borough: {
    //           $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"],
    //         },
    //       },
    //       { projection: { restaurant_id: 1, borough: 1, name: 1, cuisine: 1 } }
    //     )
    //     .toArray()
    // );

    // TASK11

    // console.log(
    //   "TASK11 is : ",
    //   await col
    //     .find(
    //       {
    //         borough: {
    //           $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"],
    //         },
    //       },
    //       { projection: { restaurant_id: 1, borough: 1, name: 1, cuisine: 1 } }
    //     )
    //     .toArray()
    // );

    // TASK12

    console.log(
      "TASK12 is : ",
      await col
        .find(
          {
            "address.street": { $exists: true },
          },
          {
            projection: {
              restaurant_id: 1,
              borough: 1,
              name: 1,
              cuisine: 1,
              _id: false,
            },
          }
        )
        .toArray()
    );
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
