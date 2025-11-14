const express = require("express");
const app = express();
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "upload");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/create", upload, (req, res) => {
  res.send("file uploaded");
});

const server = app.listen(0, () => {
  let port = server.address().port;
  console.log(`server started at ${port}`);
});

// multer is a middleware  which is used to deal with formdata which is primarly used for uploading files

// postman
