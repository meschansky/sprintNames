const cheerio = require('cheerio');
const request = require('request-promise');
const args = process.argv.slice(2);

const wikiUrls = require("./urls.js");
const domains = wikiUrls.map(x => x["name"])
const domain = args[0]

function usage(exit_code = 0) {
    console.log(`usage: node ${process.argv[1]} <domain> <first_letter>\nwhere domain in: ${domains.join(", ")}`);
    process.exit(exit_code);
}

function getNameByLetter($, firstLetter, nameColumn = 1) {
    return $(".wikitable td:nth-child(" + nameColumn + ")")
        .map(function (_, el) {
            var name = $(el).text().trim(); if (name[0].toUpperCase() == firstLetter.toUpperCase()) return [name]
        }).toArray()
}

if (args.includes("--help")) {
    console.log(domain)
    usage();
}

if (args.length != 2) {
    usage(1);
}

if (!domains.includes(domain)) {
    console.log(`Error: domain ${domain} not found!`)
    usage(1);
}

var inputUrl = wikiUrls.filter(x => x["name"] == domain)[0]["url"]
var searchLetter = args[1][0];

var options = {
    uri: inputUrl,
    transform: function (body) {
        return cheerio.load(body);
    }
};

//console.log(inputUrl, searchLetter)

request(options)
    .then(function ($) {
        //console.log($)
        console.log(getNameByLetter($, searchLetter, 2))
    })
    .catch(function (err) {
        console.log("Crawling failed or Cheerio choked... " + err)
    });