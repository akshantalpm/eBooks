/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.ChapterRowView = Backbone.View.extend({
    tagName: "tr",
    events: {
      "click a.delete": "destroy"
    },

    initialize: function (options) {
      this.ebookId = options.ebookId;
      this.moduleId = options.moduleId;
      this.chapter  = options.chapter;
      this.chapters  = options.chapters;
    },

    render: function () {
      this.chapter.set({ebookId: this.ebookId, moduleId: this.moduleId})
      this.$el.html(_.template($('#chapterRowTemplate').html(), this.chapter.toJSON()));
      return this;
    },

    destroy: function (event) {
      event.preventDefault();
      event.stopPropagation();

      this.chapters.remove(this.chapter)
      this.$el.remove();
    }
  });
}());
