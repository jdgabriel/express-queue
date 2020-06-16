import "dotenv/config";
import express from "express";
import BullBoard from "bull-board";
import Queue from "./lib/Queue";

// Controlers
import UserController from "./controller/UserController";

BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ Hello: "World" });
});

app.use("/admin", BullBoard.UI);

app.post("/email", UserController.store);

app.listen(4444, () => {
  console.log("[server online] Server running");
});
