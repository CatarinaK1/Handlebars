const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


// Specify main template
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');

// Folder for static files like css, jpg
app.use(express.static('public'));


app.get('/', (req,res) =>{

    // res.send("Testing");
    res.render('index');
});

app.get('/contact', (req,res) =>{

    // res.send("Testing");
    res.render('contact');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

