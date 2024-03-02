import app from "./server.js";
import {MongoClient} from "mongodb";
import connectDB from "./db/index.js";
import ReviewsDAO from "../src/DAO/review.DAO.js";

const port = 8000;

const url = "mongodb+srv://nirmal:1234@cluster2.tzh1hh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2"
MongoClient.connect(url)
    .then(client => {
        const result =  ReviewsDAO.injectDB(client);
        if(result){
            console.log("true");
        }else{
            console.log("false");
        }
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })

    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    });