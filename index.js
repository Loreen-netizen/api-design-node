const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// const admin = require('firebase-admin');

// admin.initializeApp({
//   credential: admin.credential.applicationDefault()
// });

// const db = admin.firestore();

// const docRef = db.collection('users').doc('alovelace');

app.get("/", function(req,res){
    res.render("index")
});

app.post("/addUser", async function(req,res){
    let user = req.body;
console.log(user);

await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
  
});


  
app.use(function(err, req, res, next) {
    if (err) {
      console.log({err})
      res.status(500).send(err);
    }
  });
  
  
  app.listen(3003);
  console.log('on port 3003');
