const express=require("express")
const app=express();
const jwt=require("jsonwebtoken")
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
    const password=req.body.password;
    const userExists=users.find(user=>user.username==username);
    if(userExists){
        return res.status(403).json({
            message:"User with this username already exists"
        })
    }

    users.push({
        username:username,
        password:password
});

res.json({
    message:"You have signedUp"
})
})




app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(403).json({
            message: "Incorrect credentials"
        });
    }

    const token = jwt.sign(
        { username: username },
        "SECRET_KEY" // replace later with env
    );

    res.json({
        token: token
    });
});

// Post - create a note
app.post("/notes",function(req,res){

    //
    const token=req.headers.token;
    if(!token){
        res.status(403).send({
            message:"You are not logged in"
        });
        return ;
    }

    const decoded=jwt.verify(token,"Spidey");
    const username=decoded.username;
    if(!username){
        res.status(403).json({
            message:"malformed token"
        })
        return ;
    }

    const note=req.body.note;
    

   
    notes.push({
        note:note,
        username:username
        
    });


    res.json(
        {
            message:"Done"
        }
)
})

// Get-get all my notes
app.get("/notes",function(req,res){
    const token=req.headers.token;
    if(!token){
        res.status(403).send({
            message:"You are not logged in"
        });
        return ;
    }

    const decoded=jwt.verify(token,"Spidey");
    const username=decoded.username;
    if(!username){
        res.status(403).json({
            message:"malformed token"
        })
        return ;
    }

    const userNote=notes.filter(note=>note.username===username);
    res.json({
        notes:userNotes
    })
}
)
app.get("/",function(req,res){
    res.sendFile("E:/CODING/100X/WebDev&DevOps/Practice/Advance-JS/week9/index.html")
})

app.listen(3000)