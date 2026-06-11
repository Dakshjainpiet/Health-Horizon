const express = require("express");
const Path = require("path");
const Appointment = require("./model/appointment.js");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");
app.set("views" , Path.join(__dirname,"views"));
app.use(express.static(Path.join(__dirname,"public")));


main().then((res)=>{
    console.log("connect successfully");
})
.catch((err)=>{
console.log(err);
})
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/HealthHorizon');
}


app.post("/appointments",(req,res)=>{
    // res.send("done");
    let app = new Appointment(req.body);
    app.save()
    .then((result) => {
        console.log("Appointment saved:", result);
        res.sendFile(Path.join(__dirname, 'views', 'payment.html')); 
      })
      .catch((err) => {
        console.log("Error saving appointment:", err);
      });
})  

app.listen(port , ()=>{
    console.log("app is listening on port : 8080");
})


app.get("/",(req,res)=>{
    res.send("done");
})