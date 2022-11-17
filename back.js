const express=require("express")
const alert=require("alert")
const app=express()
const bodyparser=require("body-parser")
const mongoose=require('mongoose')
const path=require("path")
const { stringify } = require("querystring")
const { Int32 } = require("mongodb")
const internal = require("stream")
const port=process.env.PORT || 5000
const url="mongodb+srv://rahuln577:mantralaya123@cluster0.esckorx.mongodb.net/?retryWrites=true&w=majority"
app.use(bodyparser.urlencoded({extended:true}))
mongoose.connect(url,{useNewUrlParser:true})
mongoose.connection.once('open',_=>{
    console.log("Connected at: ",url)
})
mongoose.connection.on('error',err=>{
    console.error("The error is : ",err)
})
app.use('/static',express.static('static'))
app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))
const Schema= mongoose.Schema
const likeschema= new Schema({
    name:String,
    likes:Number
})
const likedbs=mongoose.model("likedbs",likeschema)
const schema=new Schema({
    name:String,
    con:String,
    date:String
})
const l1=[1,2,3,4,5]
const Posts9= mongoose.model('Posts9',schema)
const Posts1= mongoose.model('Posts1',schema)
const Posts2= mongoose.model('Posts2',schema)
const Posts3= mongoose.model('Posts3',schema)
const Posts4= mongoose.model('Posts4',schema)
const Posts5= mongoose.model('Posts5',schema)
const Posts6= mongoose.model('Posts6',schema)
const Posts7= mongoose.model('Posts7',schema)
const Posts8= mongoose.model('Posts8',schema)
const em=new Schema({email:String})
const email=mongoose.model("email",em)
const inf=new Schema({name:String,email:String,phone:String,message:String})
const cinfo=mongoose.model("cinfo",inf)
app.post("/email",(req,res)=>{
    let v=req.body
    let ss=new email({email:v.em})
    ss.save(()=>{})
    res.redirect('home#footer')
})
app.post("/contactus",(req,res)=>{
    let v=req.body
    let ss=new cinfo({name:v.name,email:v.email,phone:v.phone,message:v.message})
    ss.save(()=>{})
    res.redirect('contact')
})
app.post("/card1",(req,res)=>{
    let v=req.body
    let ss=new Posts1({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts1.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card1')
    })

})
app.post("/card2",(req,res)=>{
    let v=req.body
    let ss=new Posts2({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts2.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card2')
    })

})
app.post("/card3",(req,res)=>{
    let v=req.body
    let ss=new Posts3({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts3.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card3')
    })

})
app.post("/card4",(req,res)=>{
    let v=req.body
    let ss=new Posts4({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts4.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card4')
    })

})
app.post("/card5",(req,res)=>{
    let v=req.body
    let ss=new Posts5({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts5.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card5')
    })

})
app.post("/card6",(req,res)=>{
    let v=req.body
    let ss=new Posts6({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts6.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card6')
    })

})
app.post("/card7",(req,res)=>{
    let v=req.body
    let ss=new Posts7({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts7.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card7')
    })

})
app.post("/card8",(req,res)=>{
    let v=req.body
    let ss=new Posts8({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts8.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card8')
    })

})
app.post("/card9",(req,res)=>{
    let v=req.body
    let ss=new Posts9({name:v.name,
    con:v.comm,date:Date.now}) 
    ss.save(()=>{})
    Posts9.find({}, function(err, docs) {
        if(err) console.log(err)
        else res.redirect('card9')
    })

})

app.put("/like1",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card1'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
        res.redirect('/card1')
    })
    
})
app.put("/like2",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card2'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("/card2")
})
app.put("/like3",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card3'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("/card3")
})
app.put("/like4",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card4'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("/card4")
})
app.put("/like5",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card5'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("/card5")
})
app.put("/like6",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card6'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("/card6")
})
app.put("/like7",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card7'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("/card7")
})
app.put("/like8",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card8'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("/card8")
})
app.put("/like9",(req,res)=>{
    likedbs.findOneAndUpdate({name:'card9'},{$inc: {likes:+1}},(err)=>{
        if(err) console.log(err)
    })
    res.redirect("/card9")
})
app.get("/",(req,res)=>{
    res.status(200).render("index")
})
app.get("/card1",(req,res)=>{
    let v
    
 
    Posts1.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card1"},(err,docs1)=>{
            res.status(200).render("card1.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/about",(req,res)=>{
    res.status(200).render("about")
})
app.get("/contact",(req,res)=>{
    res.status(200).render("contact")
})
app.get("/email",(req,res)=>{
    res.status(200).render("home#footer")
})
app.get("/card2",(req,res)=>{
    let v
    
 
    Posts2.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card2"},(err,docs1)=>{
            res.status(200).render("card2.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card3",(req,res)=>{
    let v
    
 
    Posts3.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card3"},(err,docs1)=>{
            res.status(200).render("card3.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card4",(req,res)=>{
    let v
    
 
    Posts4.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card4"},(err,docs1)=>{
            res.status(200).render("card4.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card5",(req,res)=>{
    let v
    
 
    Posts5.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card5"},(err,docs1)=>{
            res.status(200).render("card5.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card6",(req,res)=>{
    let v
    
 
    Posts6.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card6"},(err,docs1)=>{
            res.status(200).render("card6.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card7",(req,res)=>{
    let v
    
 
    Posts7.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card7"},(err,docs1)=>{
            res.status(200).render("card7.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card8",(req,res)=>{

    
 
    Posts8.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card8"},(err,docs1)=>{
            res.status(200).render("card8.pug",{da:docs,l1:docs1.likes})

        })
            }
    })
    
})
app.get("/card9",(req,res)=>{
    let v
    
 
    Posts9.find({}, function(err, docs) {
        if(err) console.log(err)
        else {likedbs.findOne({name:"card9"},(err,docs1)=>{
            res.status(200).render("card9.pug",{da:docs,l1:docs1.likes})
            v=docs.likes

        })
            }
    })
    
})
app.get("/home",(req,res)=>{
    res.status(200).render("home")
})
app.listen(port,()=>{
    console.log(`Started at port ${port}`)
})