import express from 'express';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.listen(port, (error)=> {
    
    if (error){
        console.error(error);
        return;
    }

    console.log(`Server started at port ${port}`);

});