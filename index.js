import express from "express"
const port = 5000;

const app = express();


app.get('/test', (req, res) => {
    res.send("hello world")
})


app.post('/user/signup', (req, res) => {
    res.json({
        message: "Signup endpoint"
    })
})
app.post('/user/signin', (req, res) => {
    res.json({
        message: "Signup endpoint"
    });
})

app.get('/user/purchases', (req, res) => {
    res.json({
        message: "Signup endpoint"
    });
})


app.post('/course/purchases', (req, res) => {
    res.json({
        message: "Signup endpoint"
    });

})

app.listen(port, () => {
    console.log(`Example app listing on port ${port}`)
})