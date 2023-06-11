const express = require('express');
const cors = require("cors")
require("./db/config")
const User = require('./db/User')
const port = process.env.PORT || 5000   
const app = express();


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello, Welcome to Backend");
});


app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  resp.send(result);
})

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user)
    } else {
      resp.send({ result: 'No User Found' })
    }
  } else {
    resp.send({ result: 'No User Found' })
  }

})


app.listen(port,()=>{
  console.log(`Example app at http://localhost:${port}`)
})