const express = require("express");

// assign express to app
const app = express();

// route folder location pass app
require("./startup/routes")(app);

// Assign port if not assign in the  environment
const PORT = process.env.PORT || 5000;

console.log(`Application environment: ${app.get("env")}`);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
