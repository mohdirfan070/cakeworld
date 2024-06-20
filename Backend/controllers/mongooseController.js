

const mongoose = require('mongoose');

const connectDB =async  () =>{

    
    main().then(()=>{
        console.log("Connected to database Succesfully!");
    }).catch(err => console.log(err));

async function main() {
    // await mongoose.connect(process.env.MONGODB_URL);
     await mongoose.connect('mongodb://localhost:27017/cakeWorld');
}

}

module.exports = connectDB;
