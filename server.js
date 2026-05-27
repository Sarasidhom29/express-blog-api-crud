import express from 'express';
import postsRouter from "./routers/posts.js";

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use("/", postsRouter);

app.get("/", (request, response) => {
  response.status(200).send("Server attivo");
});

app.listen(port, (error)=> {
    
    if (error){
        console.error(error);
        return;
    }

    console.log(`Server started at port ${port}`);

});



