const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/posts');




app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes)


const PORT = 8000;
const DB_URL = "mongodb+srv://vjs9c:vjs9c@inv2.ykh4t.mongodb.net/inv2?retryWrites=true&w=majority";

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('Connected to database');
})
.catch(err => console.log("db con error",err));


app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});
 


