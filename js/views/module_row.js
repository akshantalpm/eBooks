/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.ModuleRowView = Backbone.View.extend({
    tagName: "tr",
    events: {
      "click a.delete": "destroy"
    },

    initialize: function (options) {
      this.module  = options.module;
      this.modules  = options.modules;
    },

    render: function () {
      this.$el.html(_.template($('#moduleRowTemplate').html(), this.module.toJSON()));
      return this;
    },

    destroy: function (event) {
      event.preventDefault();
      event.stopPropagation();

      this.modules.remove(this.module)
      this.$el.remove();
    }
  });
}());
