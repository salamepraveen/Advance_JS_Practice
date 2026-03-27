const express=require("express")
const app=express();
app.use(express.json())
const notes=[]; // this is bad practice, its an In memory variable which will help us store data

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