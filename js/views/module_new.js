/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.ModuleNewView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click button.save": "save"
    },

    // the constructor
    initialize: function (options) {
      this.eBook = options.eBook;
      this.module  = options.module;
      this.modules = options.modules;
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      this.module.set({
        title: this.$el.find('input[name=title]').val(),
        description: this.$el.find('textarea[name=description]').val(),
        id: Math.floor(Math.random() * 100) + 1,
        ebookId:this.eBook.get("id")
      });

      this.modules.add(this.module);
      window.location.hash = "eBook/"+this.eBook.get("id")+"/edit";
    },

    render: function () {
      this.$el.html(_.template($('#formTemplate').html(), this.module.toJSON()));
      this.$el.find('h2').text('Create New Module');
      return this;
    }
  });
}());
