import path from "path";
import app from "./app.js";
import { fileURLToPath } from "url";
import DB_Connection from "./src/db/connection.db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
DB_Connection()
  .then(() => {
    
    app.get("/", (req, res) => {
    res.sendFile('/static/home.html', {root : __dirname})
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is runnin on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB Connection :: Error :: ", error);
  });
