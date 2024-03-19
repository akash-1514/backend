// const express = require('express')
import express from 'express'
// require("dotenv").config();
import 'dotenv/config'
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/twitter", (req, res) => {
    res.send("akash_1513")
})

app.get("/login", (req, res) => {
    res.send("<h1>Please Login at chai aur code</h1>")
})

app.get("/chai", (req, res) => {
    res.send('<h2>chai aur code</h2>');
})

app.listen(process.env.PORT, () => {
    console.log(`listening to port ${port}`)
})