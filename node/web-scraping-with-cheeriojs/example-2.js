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

        //write isolated sections of the entire scraped page to the local file system

        //create the cheerio object
        var $ = cheerio.load(responseHtml),
            //create a reference to the header element
            $header = $('header').html();

        //write the header to the local file system
        fs.writeFile(__dirname + '/HTML/header.html', $header, function(err){
            console.log('header.html successfully written to HTML folder');
        });
    });
}

//scrape the page
scrapePage();

