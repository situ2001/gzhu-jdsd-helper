import qs from "qs";
import { key } from "../config.js";
import { instance } from "../instance.js";
import fs from "fs";

const getData = (itemNum: number) =>
  qs.stringify({
    route: "ascertain_answer",
    gaming_key: 54330981,
    question_id: ".coctl",
    question_num: itemNum,
    answer_id: "A",
    key,
  });

const obj = {};
let i = 1;
while (i < 10000) {
  const { data } = await instance.post("/", getData(i));
  console.log(data.test_item2.answer);
  if (data.test_item2.answer !== undefined) {
    obj[i] = {
      answer: data.test_item2.answer,
    };
    const str = JSON.stringify(obj);
    fs.writeFileSync("answers.json", str, { encoding: "utf-8" });
  }
  i++;
}
