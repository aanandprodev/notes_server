//Steps
// 1 Define Schema = Details > id, user id, title, contant, date <= all about schema
// 2 Create Models -> Models name Schema Note



const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    id : {
        type:  String,
        unique : true,
        required : true,
    },
  
    userid: {
        type : String, 
        required : true,
    },
    title: {
        type : String, 
        required : true,
    },
    content:{
        type: String,
    },
    dateadded: {
        type : Date,
        default : Date.now,
    },
});



module.exports = mongoose.model('note',noteSchema);