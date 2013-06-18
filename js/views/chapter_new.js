/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.ChapterNewView = Backbone.View.extend({
    events: {
      "click button.save": "save"
    },

    initialize: function (options) {
      this.ebookId = options.ebookId;
      this.chapter  = options.chapter;
      this.chapters  = options.chapters;
      this.moduleId = options.moduleId;
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      this.chapter.set({
        title: this.$el.find('input[name=title]').val(),
        description: this.$el.find('textarea[name=description]').val(),
        id: Math.floor(Math.random() * 100) + 1,
        moduleId:this.moduleId.toString()
      });

      this.chapters.add(this.chapter);
      window.location.hash = "eBook/"+this.ebookId+"/module/"+this.moduleId+"/edit";
    },

    render: function () {
      this.$el.html(_.template($('#formTemplate').html(), this.chapter.toJSON()));
      this.$el.find('h2').text('Create New Chapter');
      return this;
    }
  });
}());
