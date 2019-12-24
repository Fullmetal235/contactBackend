const express = require("express");
const contactRouter = require("./Contacts/contactRouter.js");
//const locationRouter = require('./data/helpers/projectRouter.js')

const server = express();
server.use(express.json());
server.use("/contacts", contactRouter);
//server.use('/locations', locationRouter)

server.use("/", (req, res) => {
  res.send("GRIIIIFFFITTH!!!!!!!!");
});
module.exports = server;
