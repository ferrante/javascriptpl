var fs = require('fs');
var Mustache = require('mustache');
var utils = require('./utils');

// do not allow Mustache to replace <> with &lt;&gt; etc.
Mustache.escape = function(a) {
    return a;
};

var TIPS_DIR = '../tips/';
var INDEX_FILE_TEMPLATE = '../templates/index.mustache';
var ARTICLE_FILE_TEMPLATE = '../templates/article.mustache';
var GENERATED_INDEX_FILE = '../index.html';

var createArticleURL = function(article) {
    return '/articles/'+utils.createSlug(utils.removeAccent(article.title)) + '.html'
};

// we need to pass some data to the Mustache templates at the end to render a full list of articles
var indexFileTemplateData = {
    articles: []
};

var indexTemplate = fs.readFileSync(INDEX_FILE_TEMPLATE, 'utf-8');
var articleTemplate = fs.readFileSync(ARTICLE_FILE_TEMPLATE, 'utf-8');

// read the files
var files = fs.readdirSync(TIPS_DIR);

files.forEach(function(file, idx) {
    // let's read a file containing a single tip
    var articleContent = fs.readFileSync(TIPS_DIR + file, 'utf-8');
    // this is what tags we expect to be present in a single article
    var articleElements = ['title', 'author', 'author_url', 'content', 'date'];
    var reg;
    var articleOutput;
    // initial article object, we will fill it with the data read from a single tip file
    var article = {};
    
    // let's iterate through necessary xml nodes to get e.g. tip content and title
    for (var i = 0, ilen = articleElements.length; i < ilen; i++) {
        reg = new RegExp('<'+articleElements[i]+'>([\\s\\S]*?)<\/'+articleElements[i]+'>');
        article[articleElements[i]] = reg.exec(articleContent)[1].trim();
    }
    
    // each article has its own url
    article.url = createArticleURL(article);

    indexFileTemplateData.articles.push(article);
});

// sort articles
indexFileTemplateData.articles.sort(function(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
});

indexFileTemplateData.articles.map(function(article, idx) {
    // set the right tip_counter
    article.tip_counter = this.length - idx;
    
    var articleOutput = Mustache.render(indexTemplate, {
        articles: [article]
    }, {
        article: articleTemplate
    });
    fs.writeFileSync('../'+article.url, articleOutput, 'utf-8');    
    return article;
}, indexFileTemplateData.articles);

var indexOutput = Mustache.render(indexTemplate, {
    articles: indexFileTemplateData.articles
}, {
    article: articleTemplate
});
fs.writeFileSync(GENERATED_INDEX_FILE, indexOutput, 'utf-8');
console.log("Building... done!");