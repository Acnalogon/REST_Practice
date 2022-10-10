const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
})

app.post('/tacos', (res, req) => {
    res.send('POST /tacos response');
})

app.listen(3000, () => {
    console.log("on port 3000");
})