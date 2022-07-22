const express = require("express");

const app = express();

app.listen(8080, function () {
  console.log("server is running on 8080port");
});

// 누군가 /pet으로 방문을 하면.. pet 관련된 안내문을 띄워주자

app.get("/pet", (req, res) => {
  res.send("pet함수");
});

app.get("/pet123", (req, res) => {
  res.send("pet함수123");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
