//http server that supports 4 routes (/sum,/sub,/div,/mul)
// node packae manager -npm
const express=require("express");

const app=express();
app.use(express.json());
app.get("/",function(req,res){
     res.sendFile("E:/CODING/100X/WebDev&DevOps/Practice/Advance-JS/week7/index.html")
})

// http://localhost:3000/sum?a=1&b=2 // by default a b will be taken as string
app.post("/sum", function(req, res) {
    
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

   

    const sum = a + b;

    res.json({
        ans: sum
    });

});
app.get("/sub",function(req,res){

   
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    const sub=a-b;

    res.json({
        ans: sub
    })
});
app.get("/mul",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    const mul=a*b;

    res.json({
        ans: mul
    })
});
app.get("/div",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    const div=a/b;

    res.json({
        ans: div
    })
});


app.listen(3000);
