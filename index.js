const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <h1>Welcome to my website!!!!!</h1>
        <p>Thank you for visiting.</p>
      </body>
    </html>
  `);
});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
