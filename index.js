const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')

const PORT  = process.env.PORT  || 3000;
const app = express();


app.use(express.json());
app.use(authRouter);

const DB = "mongodb+srv://lfpsdatabase:DAmkzK2GY4xQAFIo@cluster0.5aclt2w.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(
    console.log('CONNECTED TO DB')
)




app.listen(PORT , "0.0.0.0" , ()=>{
    console.log(`CONNECTED IN ${PORT}`);
    
});

