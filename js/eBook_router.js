/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Routers.EBookRouter = Backbone.Router.extend({
    routes: {
      "eBook/new": "create",
      "eBooks/index": "index",
      "eBook/:id/edit": "edit",
      "eBook/:id/view": "show",
      "eBook/:id/module/new": "createModule",
      "eBook/:id/module/:id/new": "createChapter",
      "eBook/:id/module/:id/edit": "editModule",
      "eBook/:id/module/:id/chapter/:id/edit": "editChapter"
    },

    initialize: function (options) {
      this.eBooks = options.eBooks;
      this.index();
    },

    create: function () {
      this.currentView = new APP.Views.EBookNewView({eBooks: this.eBooks, eBook: new APP.Models.EBookModel()});
      $('#primary-content').html(this.currentView.render().el);
    },

    createModule: function (id) {
      this.currentView = new APP.Views.ModuleNewView({eBook:this.eBooks.get(id),modules: this.eBooks.get(id).get("modules"), module: new APP.Models.ModuleModel()});
      $('#primary-content').html(this.currentView.render().el);
    },

    createChapter: function (ebookId, moduleId) {
        var modules = this.eBooks.get(ebookId).get("modules").get(moduleId);
        this.currentView = new APP.Views.ChapterNewView({ebookId:ebookId, moduleId:moduleId, chapters: modules.get("chapters"), chapter: new APP.Models.ChapterModel()});
      $('#primary-content').html(this.currentView.render().el);
    },

    editModule: function (ebookId, moduleId) {
        var module = this.eBooks.get(ebookId).get("modules").get(moduleId);
        this.currentView = new APP.Views.ModuleEditView({module: module, ebookId: ebookId});
        $('#primary-content').html(this.currentView.render().el);
    },

    editChapter: function (ebookId, moduleId, chapterId) {
        var chapters = this.eBooks.get(ebookId).get("modules").get(moduleId).get("chapters");
        var chapter = chapters.get(chapterId);
        this.currentView = new APP.Views.ChapterEditView({moduleId: moduleId, ebookId: ebookId, chapter: chapter, chapters:chapters});
        $('#primary-content').html(this.currentView.render().el);
    },

    edit: function (id) {
      var eBook = this.eBooks.get(id);
      this.currentView = new APP.Views.EBookEditView({eBook: eBook});
      $('#primary-content').html(this.currentView.render().el);
    },

    show: function (id) {
      var eBook = this.eBooks.get(id);
      this.currentView = new APP.Views.EBookShowView({eBook: eBook});
      $('#primary-content').html(this.currentView.render().el);
    },

    index: function () {
      this.currentView = new APP.Views.EBookIndexView({eBooks: this.eBooks});
      $('#primary-content').html(this.currentView.render().el);
    }
  });
}());
