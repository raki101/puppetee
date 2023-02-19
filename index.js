const express = require('express');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/',(req,res)=>{

    var temp = req.body.uu; 
    console.log(temp)
    const url = req.body.url;
    const screenshot = takeScreenshot(temp);
})


async function takeScreenshot(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const screenshot = await page.screenshot({path:"amazing.png", fullPage: true });
  await browser.close();
  return screenshot;
}

app.listen(4000, function() {
  console.log('Server listening on port 3000');
});
