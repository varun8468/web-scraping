// last ball comentry
import axios from "axios";
import * as cheerio from "cheerio";
import chalk from "chalk";

const url =
  "https://www.espncricinfo.com/series/asia-cup-2023-1388374/sri-lanka-vs-india-final-1388414/ball-by-ball-commentary";

(async function getHtml() {
  try {
    let res = await axios.get(url);
    handleHTML(res.data);
  } catch (err) {
    console.log(err);
  }
})();

function handleHTML(html) {
  let $ = cheerio.load(html);
  let elemArr = $(".ci-html-content");
  let text = $(elemArr[0]).text();
  let htmlData = $(elemArr[0]).html();

  console.log("text: ", text);
  console.log("html: ", htmlData);
}
