import { instance } from "../instance.js";
import qs from "qs";
import { key } from "../config.js";

export default async function getInfo() {
  const _key = key || process.env.jdsd_key;

  const form = qs.stringify({
    route: "user_info",
    key: _key,
  });

  try {
    const response = await instance.post("/", form);
    if (response.data) {
      if (response.data.status === 1) {
        console.log("你的积分为", response.data.re.credits);
      } else {
        console.log(response.data.error);
        process.exit(1);
      }
    }
  } catch (e) {
    console.error(e);
  }
}
