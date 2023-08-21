import express from "express";
import { PowerShell } from "node-powershell";
PowerShell.$`echo "hello from PowerShell"`;
const ps = new PowerShell({
  executionPolicy: "Bypass",
  noProfile: true,
});
const app = express();
const port = 3000;

app.get("/:path", function (req, res) {
  console.log(req.params.path);
  ps.invoke(` ${req.params.path}`)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/login", function (req, res) {
  res.send("welcome");
});
app.listen(port, () => {
  return `nodejs is running on Port ${port}`;
});
