// console.log('hello world');


const express = require('express');
const mongoose = require('mongoose');
const Note  = require('./models/Note');
const app = express();

const bodyParser  = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://anandpro:12341234@cluster0.vjqrv3b.mongodb.net/App_Data")
.then(()=> console.log("mongodb is connected"))
.catch((error)=>console.log(error))
//APP Route 

app.get('/',function (req, res){
    res.send('This is the Home Page');
});

 
app.get('/notes/list', async function (req, res){
    var notes = await Note.find();
    res.json(notes);
  
});

app.post('/note/add', async function (req, res){


    // res.json(req.body);
   
//     const newNote = new Note( {
//         id: "A",
//         userid: "AQ",
//         title : "My Faa Note",
//         content:"This aathe content",
//     });
//      await newNote.save( );
//   const response = { message: "New Note is Created! "  };
   
await Note.deleteOne({id: req.body.id});

    const newNote = new Note( {

        

        id: req.body.id,
        userid: req.body.userid,
        title : req.body.title,
        content:req.body.content,
    });
     await newNote.save( );
  const response = { message: "New Note is Created! " +`id: ${req.body.id}`  };
   
   res.json(response);
   
});


app.post("/note/delete", async function(req ,res){
    await Note.deleteOne({id: req.body.id});

    const response = { message: "New Note Created! "+ `id: ${req.body.id}`};
    req.json(response);

});


 

// Starting the server on a Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log("Server started at PORT: " + PORT);
}); 