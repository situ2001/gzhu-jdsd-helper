import { instance } from "../instance.js";
import qs from "qs";
import { key } from "../config.js";

const types = ["诗", "词", "曲", "赋", "古文"];

export default async function dailyReading() {
  console.log("诗词鉴赏开始...");

  const _key = key || process.env.jdsd_key;
  // form range 1 to 5
  const buildForm = (type: number) =>
    qs.stringify({
      key: _key,
      route: "classic_time",
      addtime: 90,
      type: type,
    });

  const forms = Array(5)
    .fill(undefined)
    .map((_, i) => buildForm(i + 1));

  for (let i = 0; i < forms.length; i++) {
    const response = await instance.post("/", forms[i]);
    if (response.data.tip === undefined) {
      console.log(`今日${types[i]}的分已拿 请勿重复操作`);
    } else {
      console.log(`今日${types[i]}的阅读 ${response.data.tip}`);
    }
  }
}
