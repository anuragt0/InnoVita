const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

const connectToMongo = require("./src/database/config");
connectToMongo();



//routes
app.use("/api/user", require("./src/routes/user"));
app.use("/api/admin", require("./src/routes/admin"));


app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});

