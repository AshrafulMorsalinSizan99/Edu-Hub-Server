const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('api running');
})
app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_course = courseDetails.filter(cc => cc.course_id === id);
    res.send(category_course);
})


app.get('/courseDetails/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(cd => cd.id === id);
    res.send(selectedCourse);
    // console.log(req.params);
})
app.get('/category/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCheckout = courseDetails.filter(sc => sc.course_id === id);
    res.send(selectedCheckout);
    // console.log(selectedCheckout)
})

app.listen(port, () => {
    console.log('server running on port', port);
})