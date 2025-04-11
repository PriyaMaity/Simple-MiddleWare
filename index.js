const express = require("express");
const app = express();
const PORT = 5050;

app.use(express.json());

const requestLogger = (req, res, next) => {
  const start = Date.now();
  const { method, url } = req;
  const timestamp = new Date().toISOString();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[${timestamp}] ${method} ${url} - ${res.statusCode} - ${duration}ms`
    );
  });
  next();
};

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("This is Home Page!!");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at contact@example.com");
});

app.listen(PORT, (err) => {
  if (err) console.log(err, "Error in listening to port");
  console.log(`Listening to Port : ${PORT}`);
  console.log(`Developer: Priya Maity`);
});
