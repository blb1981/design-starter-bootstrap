// Reference for this setup: https://raddy.dev/blog/nodejs-express-layouts-and-partials/

const path = require("path");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000;

// Static Files

app.use(express.static("public"));

// Template Engine Settings
// Default layout is the frontend.ejs file
// Other templates below will use different layouts, specified in the route

app.use(expressLayouts);
app.set("layout", "./layouts/frontend.ejs");
app.set("view engine", "ejs");

// Routes... Add future pages here
// Frontend pages

app.get("", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "About Us" });
});


// Backend pages

// app.get("/dashboard", (req, res) => {
//   res.render("dashboard", {
//     title: "Dashboard",
//     layout: "./layouts/backend.ejs",
//   });
// });

// Auth pages

// app.get("/login", (req, res) => {
//   res.render("login", {
//     title: "Login",
//     layout: "./layouts/auth.ejs",
//   });
// });

// Server

app.listen(port, () => {
  console.log("Listening on http://localhost:5000");
});
