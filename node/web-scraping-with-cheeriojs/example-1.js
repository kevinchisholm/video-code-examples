var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    pageURL = 'http://output.jsbin.com/xavuga';

function scrapePage () {
    //make an HTTP request for the page to be scraped
    request(pageURL, function(error, response, responseHtml){        

        //write the entire scraped page to the local file system
        fs.writeFile(__dirname + '/HTML/entire-page.html', responseHtml, function(err){
            console.log('entire-page.html successfully written to HTML folder');
        })
    }) ;
}

//scrape the page
scrapePage();

