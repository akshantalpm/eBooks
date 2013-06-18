/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.ModuleEditView = Backbone.View.extend({

    events: {
      "click button.save": "save"
    },

    initialize: function (options) {
      this.ebookId = options.ebookId;
      this.module  = options.module;
      this.moduleId  = options.module.get("id").toString();
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      this.module.set({
        title: this.$el.find('input[name=title]').val(),
        description: this.$el.find('textarea[name=description]').val(),
      });
      window.location.hash = "eBook/"+this.ebookId+"/edit";
    },

    render: function () {
      this.$el.html(_.template($('#editModuleTemplate').html(), this.module.toJSON()));
      this.$el.find('h2').text('Edit Module');
      this.addAll();
      return this;
    },

    addAll: function () {
      this.$el.find('tbody').children().remove();
      var chapters = this.module.get("chapters").where({moduleId:this.moduleId});
      if(chapters.length) {
          this.$el.append($('#chapterTableHeaderTemplate').html());
      }
      _.each(chapters, $.proxy(this, 'addOne'));
    },

    addOne: function (chapter) {
        var view = new APP.Views.ChapterRowView({ebookId:this.ebookId, moduleId:this.moduleId, chapters: this.module.get("chapters"), chapter: chapter});
        this.$el.find("tbody").append(view.render().el);
    }
  });
}());
