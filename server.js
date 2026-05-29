import "dotenv/config";

import app from "./src/app.js";
import connectDB from "./src/config/database.js";

await connectDB();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("server is working...3000"));
