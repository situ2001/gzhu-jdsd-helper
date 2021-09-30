import getInfo from "./actions/info.js";
import dailyPractice from "./actions/practice.js";
import dailyReading from "./actions/read.js";
import dailySignIn from "./actions/signin.js";
import { key } from "./config.js";

// main procedure begins
console.log(process.env.jdsd_key);
if (key.length !== 0 || process.env.jdsd_key) {
  await getInfo();
  await dailySignIn();
  await dailyReading();
  await dailyPractice();
  await getInfo();
  process.exit(0);
} else {
  console.log("请将你的key加入环境变量jdsd_key中");
  process.exit(1);
}

// main procedure ends
