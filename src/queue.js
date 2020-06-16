import "dotenv/config";

import Queue from "./lib/Queue";

console.log("[server queue] Queue Running");

Queue.process();
