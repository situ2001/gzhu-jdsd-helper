import { instance } from "../instance.js";
import qs from "qs";
import { key } from "../config.js";

// form range 1 to 5
const buildForm = (type: number) =>
  qs.stringify({
    key,
    route: "classic_time",
    addtime: 90,
    type: type,
  });

const types = ["诗", "词", "曲", "赋", "古文"];

export default async function dailyReading() {
  console.log("诗词鉴赏开始...");

  const forms = Array(5)
    .fill(undefined)
    .map((_, i) => buildForm(i + 1));

  forms.forEach(async (form, index) => {
    const response = await instance.post("/", form);
    if (response.data.done === 1) {
      console.log(`今日${types[index]}的分已拿 请勿重复操作`);
    } else {
      console.log(response.data.tip);
    }
  });
}
