/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.EBookRowView = Backbone.View.extend({
    tagName: "tr",
    events: {
      "click a.delete": "destroy"
    },

    initialize: function (options) {
      this.eBook  = options.eBook;
      this.eBooks = options.eBooks;
    },

    render: function () {
      this.$el.html(_.template($('#eBookRowTemplate').html(), this.eBook.toJSON()));
      return this;
    },

    destroy: function (event) {
      event.preventDefault();
      event.stopPropagation();

      this.eBooks.remove(this.eBook);
      this.$el.remove();
    }
  });
}());
