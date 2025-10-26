import app from "./src/App/app.js";
import DB_Connection from "./src/db/dbconnection.js";

DB_Connection()
.then(() => {
    
    app.listen(process.env.PORT, () => {
        console.log(`App is running on ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Server Creaction Error :: Due to DB :: ", err);
})