import express from 'express'

const app = express()
const port = 8080;

const students = ["omar", "ahmed", "yasser", "ibrahim", "osama"];
let s = "<ui>";
students.forEach((item) => {
    let j = "<li>" + item + "</li>";
    s += j;
})
s += "</ui>";
const x = (req, res) => {
    res.send(s);
};

app.get('/students', x);


app.listen(5000);