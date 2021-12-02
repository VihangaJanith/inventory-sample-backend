const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();




router.post('/add',(req,res)=>{

let newPost = new Posts(req.body);

newPost.save((err,post)=>{
    if(err){
        return res.status(400).json({
            error: err
        });
    }else{
       return res.status(200).json({   
           success: "post created"
       });
    }
});


});


router.get('/',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

router.put('/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if (err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfull"
            });
        }
    );
});

router.delete('/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
          message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete succesful",deletedPost
        });
    });
});


router.get("/post/:id",(req,res) =>{

    let postID = req.params.id;

    Posts.findById(postID,(err,post) => {
        if(err){
            return res.status(400).json({success:false,err});

        }
        return res.status(200).json({
            success:true,
            post
        });

    });

});





module.exports = router;
