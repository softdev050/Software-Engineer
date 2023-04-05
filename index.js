const express = require('express');
const { applyMiddleware } = require('redux');
const PORT =3000;
const app = express();

// create Middleware
function logger (req, res, next) {
 console.log(`[${Date.now()}] ${req.method} ${req.url}`);
 next();
}

app.use(logger);

// testing if the router is working correctly
app.get('/test', (req, res) =>{
    res.json({ok:true});
});

app.get('/greet/:name', (req, res) =>{
    res.json({greeting: `Hello ${req.params.name}!`});
});

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));