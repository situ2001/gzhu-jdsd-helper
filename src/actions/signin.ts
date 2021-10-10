import { instance } from "../instance.js";
import qs from "qs";
import { key } from "../config.js";

export default async function dailySignIn() {
  console.log("日常登录开始...");

  const _key = key || process.env.jdsd_key;

  // 1. form
  const form = qs.stringify({
    key: _key,
    route: "signin",
  });

  try {
    const response = await instance.post("/", form);
    if (response.data.day === -1) {
      console.log("今天已经打过卡啦");
    } else {
      console.log(response.data.tip);
    }
  } catch (e) {
    console.log("打卡好像失败了");
    console.error(e);
  }
}
