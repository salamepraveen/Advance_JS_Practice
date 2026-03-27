const express=require("express")
const app=express();
app.use(express.json())
const notes=[]; // this is bad practice, its an In memory variable which will help us store data
const users=[{
    username:"prav",
    password:"123123"
},{
    username:"Spidey",
    password:"Gwen124"
}]

app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.passwod;
    const userExists=users.find(user=>user.username==username);
    if(userExists){
        return res.status(403).json({
            message:"User with this username already exists"
        })
    }

    users.push({
        username:username,password:password
});

res.json({
    message:"You have signedUp"
})
})


app.post("/sign",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const userExist=
})


// Post - create a note
app.post("/notes",function(req,res){
    const note =req.body.note;
    notes.push(note);


    res.json(
        {
            message:"Done"
        }
)
})

// Get-get all my notes
app.get("/notes",function(req,res){
    res.json({
        notes
    })
}
)
app.get("/",function(req,res){
    res.sendFile("E:/CODING/100X/WebDev&DevOps/Practice/Advance-JS/week9/index.html")
})

app.listen(3000)