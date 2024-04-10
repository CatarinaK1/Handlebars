const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


// Specify main template
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));


// Dummy database. IRL we would get data from MongoDB
const products = 
[
    
    {
        name: 'Volvo',
        price: 2500
    },
    {
        name:'Kia',
        price: 3000
    }
]
app.set('view engine', 'handlebars');

// Folder for static files like css, jpg
app.use(express.static('public'));


app.get('/', (req,res) =>{

    // res.send("Testing");
    // res.render('index');
    res.render('index', {
        title: 'Home',
        companyName: 'Business Ltd'
    });
});

app.get('/contact', (req,res) =>{

    // res.send("Testing");
    res.render('contact');
});


app.get('/products', (req,res) =>{

    // res.send("Testing");
    res.render('products',{
        title: "Products",
        products: products
    });
});


app.use((req,res,next) =>{
    res.status(404).send("Content not found");

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

