import { instance } from "../instance.js";
import qs from "qs";
import { key } from "../config.js";

export default async function dailySignIn() {
  // 1. form
  const form = qs.stringify({
    key,
    route: "signin",
  });

  const response = await instance.post("/", form);
  if (response.data.day === -1) {
    console.log("今天已经打过卡啦");
  } else {
    console.log(response.data.tip);
  }
}
