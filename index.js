const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

app.use(express.static("public"));

// app.get("/pois", (req, res) =>
//   res.send(
//     request("poidump.json", (err, resp, body) => {
//       console.log(err);
//       console.log(body);
//     })
//   )
// );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
