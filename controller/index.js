module.exports = (app,db) => {
    var router = {};
    var config = require('../config.js')
    const bcrypt = require('bcrypt');
    router.sayhello = (req, res) => {
        console.log('ffffffff')
        db.users.find((err,users)=>{
            console.log(err,users)
        })
       res.render('pages/index')
    }
    router.register = (req,res)=>{
        res.render('pages/signup')
    }
    router.signup = (req,res) => {
        console.log(req.body)
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if(hash){
                var obj = {
                    username : req.body.username,
                    password: hash,
                    email:req.body.password,
    
                }
                var user = new db.users(obj)
            user.save((err)=>{
                if(err)
                {
                    res.send({status:0})
                }
                else{
                    res.send({status:1})
                }
            })
            }
            else{
                res.send({status:0})
            }
          
        })
        

    }
    router.login = (req,res) => {
        console.log(req.body)
        db.users.find({'$or':[{'email':req.body.username},{'username':req.body.username}]},(err,result)=>{
            if(result.length > 0)
            {

                console.log(err,result)
                bcrypt.compare(req.body.password,result[0].password,(err,okay)=>{
                    if(okay)
                    {
                        res.send({success:1,result:result})

                    }
                    else{
                        res.send({
                            success:0
                        })
                    }
                    
                })
            
            }
            else{
                res.send({success:0})
            }
            
        })
    }
    return router;
}   