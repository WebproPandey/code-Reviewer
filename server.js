require('dotenv').config()

const app  = require("./src/app")

app.listen(3000 , () =>{
    console.log('Server is Running on https://localhost:3000');
    
})