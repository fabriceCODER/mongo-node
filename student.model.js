const mongoose =require('mongoose')

let studentSchema = new mongoose.Schema({
     fullname:{
          type:String,
          required: 'This field is required'
     },
     email: {
          type:String,
     required:'This field is required'
     },
     phone:{
          type:Number,
          required: 'This field is required'
     },
     city: {
          type:String,
          required:'This field is required'    
     }

})

mongoose.model("Student", studentSchema)