const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ArticleSchema = new Schema( {
time: String,
link: String,
linkImg: String,
zagolovok: String,
preview: String,
content: String,
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;