const express = require('express')
let router = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model('Student')


router.get('/', (req,res)=>{
     res.render('student/addOrEdit', {
          ciewTitle: 'Insert Student'
     })
})

router.post('/', (req, res)=>{
 if(req.body._id == ""){
     insertRecord(req,res)
 }else{
     updateRecord(req, res)
 }
})

function insertRecord(req, res){
     let student = new Student()
     student.fullName = req.body.fullName
     student.email = req.body.email
     student.mobile = req.body.mobile
     student.city = req.body.city
     student.save((err, doc)=>{
          if(!err){
               res.redirect('student/list')
          }else{
               console.log('Error during inserting: '+err)
          }
     })

}

function updateRecord(req, res){
     Student.findOneAndUpdate(
          { _id: req.body._id},
          req.body,
          {new: true},
          (err, doc)=>{
               if(!err){
                    reset.redirect('student/list')
               }
          }
     
     )
}