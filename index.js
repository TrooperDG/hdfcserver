import express from "express";
import cors from "cors";
import { generateMockJourneys } from "./jdata.js";
import { generateMockTransactions } from "./sdata.js";
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.end("haloooo");
});
app.post("/journeys/search", (req, res, next) => {
  // console.log(generateMockJourneys(2));
  res.send(generateMockJourneys(10));
});
app.post("/stages/search", (req, res, next) => {
  // console.log(generateMockJourneys(2));
  res.send(generateMockTransactions(10));
});

app.post("/login", (req, res, next) => {
  // console.log(generateMockJourneys(2));
  res.send({
    success: "true",
    responseData: {
      role: "xx",
      accessToken: "xx", //! accessToken
      profile: {
        userId: "xx",
        phone: "xx",
        email: "xx",
      },
    },
  });
});

app.listen(8000, () => console.log(`server running : http://localhost:8000`));
