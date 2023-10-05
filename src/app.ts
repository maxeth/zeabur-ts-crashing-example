require("dotenv").config();

import { HttpStatusCode } from "axios";
import cors from "cors";
import express, { json } from "express";

const app = express();
app.use(json());
app.use(cors());

const port = process.env.PORT || 3002;

app.get("/", (req, res) => res.type("text").send("hi"));

app.get("/health", (req, res) =>
  res.status(HttpStatusCode.Ok).json({ success: true })
);
