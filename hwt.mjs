import axios from "axios";
import * as cheerio from "cheerio";
import chalk from "chalk";

const url =
  "https://www.espncricinfo.com/series/asian-games-women-s-cricket-competition-2023-1398686/indonesia-women-vs-mongolia-women-1st-match-group-a-1399052/full-scorecard";

(async function getHtml() {
  try {
    let res = await axios.get(url);
    handleHTML(res.data);
  } catch (err) {
    console.log(err)
  }
})();

const handleHTML = (html) => {
  let $ = cheerio.load(html);
  let elemArr = $(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-mb-2");
  for(let i=0; i<elemArr.length; i++){
    let hasClass = $(elemArr[i]).hasClass("ds-opacity-50");
    if(hasClass == false){
        let teamNameElem = $(elemArr[i]).find("span").html();
        console.log(teamNameElem)
    }
  }
};
