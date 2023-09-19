import axios from 'axios';
import * as cheerio from 'cheerio';
import chalk from 'chalk';

(async function getHtml() {
  try {
    let res = await axios.get("https://www.worldometers.info/coronavirus");
    handleHTML(res.data);
  } catch (err) {}
})();

const handleHTML = (html) => {
  let selTool = cheerio.load(html);
  let contentArr = selTool("#maincounter-wrap span");

  const cases = selTool(contentArr[0]).text();
  const deaths = selTool(contentArr[1]).text();
  const recovered = selTool(contentArr[2]).text();

  console.log(chalk.gray("total cases: " + cases));
  console.log(chalk.red("deaths: " + deaths));
  console.log(chalk.green("Recovered: " + recovered));
};
