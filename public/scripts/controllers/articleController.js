'use strict';

var app = app || {};

(function (module) {
    const articleController = {};

    articleController.randomArticle = function () {
        let nytArticle = app.Article.selectRandom(app.Article.loadNytArticles());
        let huffpoArticle = app.Article.selectRandom(app.Article.loadHuffpoArticles());
        let usaArticle = app.Article.selectRandom(app.Article.loadUsaArticles());
        let dmArticle = app.Article.selectRandom(app.Article.loadDmArticles());
        let breitArticle = app.Article.selectRandom(app.Article.loadBreitArticles());
        let consolidatedArray = [huffpoArticle, nytArticle, usaArticle, dmArticle, breitArticle];
        return app.Article.selectRandom(consolidatedArray);
    };

    articleController.init = function () {
        app.nytArticles.requestArticles(app.articleView.init);
        app.huffpoArticles.requestArticles(app.articleView.init);
        app.usaArticles.requestArticles(app.articleView.init);
        app.dmArticles.requestArticles(app.articleView.init);
        app.breitArticles.requestArticles(app.articleView.init);
    };




	// articleController.randomArticle = function () {
	//   console.log('inside random article');
	//     return app.Article.selectRandom(app.Article.loadArticles('randomArticle'));
	// };
	//
	// articleController.init = function () {
	//     console.log('inside articleController.init');
	//     app.Article.requestArticles(app.articleView.init);
	// };



    module.articleController = articleController;
}(app));
