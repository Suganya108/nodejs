const fs = require("fs");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let createRoom = [];
let bookRoom = [];

app.post("/createRoom", (req, res) => {
  //posting the room details
  console.log(req.body);
  createRoom.push(req.body);
  res.json({
    message: "A new room is created successfully",
  });
});

app.get("/bookedRooms", (req, res) => {
  //getting the room details which are stored
  let room = bookRoom.map((data) => {
    return {
      RoomID: data.RoomID,
      Status: "Booked",
      CustomerName: data.CustomerName,
      Date: data.Date,
      StartTime: data.StartTime,
      EndTime: data.EndTime,
    };
  });
  res.json(room);
});

app.post("/bookRooms", (req, res) => {
  //posting the booking room details
  bookRoom.push(req.body);
  res.json({
    message: "A room is booked successfully",
  });
  console.log(req.body);
});

app.get("/bookedCustomers", (req, res) => {
  //getting the booked rooms details which are stored
  let customer = bookRoom.map((data) => {
    return { CustomerName: data.CustomerName, RoomID: data.RoomID };
  });
  res.json(customer);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening to port ${port}`);
});
