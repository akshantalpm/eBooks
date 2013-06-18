/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/

(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.EBookIndexView = Backbone.View.extend({
    initialize: function (options) {
      this.eBooks = options.eBooks;
      this.eBooks.bind('reset', this.addAll, this);
    },

    render: function () {
      this.$el.html($('#eBookTableHeaderTemplate').html());
      this.addAll();
      return this;
    },

    addAll: function () {
      this.$el.find('tbody').children().remove();
      _.each(this.eBooks.models, $.proxy(this, 'addOne'));
    },

    addOne: function (eBook) {
      var view = new APP.Views.EBookRowView({eBooks: this.eBooks, eBook: eBook});
      this.$el.find("tbody").append(view.render().el);
    }
  });
}());
