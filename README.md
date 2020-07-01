# Scrum sprint name generator

Simple script to query list of characters for some TV / movie franchises to use as Scrum sprint names.

## Requirements
* [Node.js](https://nodejs.org/en/)

or

* [Docker](https://www.docker.com)

## Data sources
Wiki pages configured in [urls.js](src/urls.js) files
e.g.
```
const wikiUrls = [
    {
        domain: "got",
        url: "https://en.wikipedia.org/wiki/List_of_Game_of_Thrones_characters",
        nameColumn: 2
    },
    {
        domain: "sw",
        url: "https://en.wikipedia.org/wiki/List_of_Star_Wars_characters",
        nameColumn: 1
    },
]
```

where
* `domain`:  a short name for the search domain
* `url`: full url of a wikipedia page
* `nameColumn`:  index of a column in a "wikitable" (starting from 1) containing character names (varies from page to page)
## Usage
### With Node.js installed:

Install modules first with:

```npm install .```


Then query a character with:

```node src/sprintNames.js <DOMAIN> <CHARACTER_FIRST_LETTER>```

e.g.
```
$ node src/sprintNames.js sw X
[ 'Xamuel Lennox', "Xi'an" ]
```

or use a wrapper script `get-name.sh` with the same arguments

### With Docker installed:

use a wrapper script `get-name-docker.sh <DOMAIN> <CHARACTER_FIRST_LETTER>`