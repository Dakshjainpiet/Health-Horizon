const mongoose = require('mongoose');

const appSchema = mongoose.Schema({
    name:{
        type:String,
        required: true 
    },
    phone:{
        type:Number,
        required: true 
    },
    email:{
        type:String,
        required: true 
    },
    date:{
        type:Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/  // optional: validates 24-hour format like "14:30"
      },
    city:{
        type: String,
    },
    state: String,
    postcode:{
        type:Number
    }

});
const Appointment = mongoose.model("Appointment",appSchema);

module.exports = Appointment;