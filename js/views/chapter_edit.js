/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.ChapterEditView = Backbone.View.extend({
    events: {
      "click button.save": "save"
    },

    initialize: function (options) {
      this.ebookId = options.ebookId
      this.moduleId  = options.moduleId;
      this.chapter = options.chapter;
      this.chapters = options.chapters;
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      this.chapter.set({
        title: this.$el.find('input[name=title]').val(),
        description: this.$el.find('textarea[name=description]').val()
      });
      this.chapters.add(this.chapter)
      window.location.hash = "eBook/"+this.ebookId+"/module/"+ this.moduleId+"/edit";
    },

    render: function () {
      this.$el.html(_.template($('#editChapterTemplate').html(), this.chapter.toJSON()));
      this.$el.append($('#moduleTableHeaderTemplate').html())
      this.$el.find('h2').text('Edit Chapter');
      return this;
    }
  });
}());
