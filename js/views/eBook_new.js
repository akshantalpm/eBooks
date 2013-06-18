/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.EBookNewView = Backbone.View.extend({
    events: {
      "click button.save": "save"
    },

    initialize: function (options) {
      this.eBook  = options.eBook;
      this.eBooks = options.eBooks;
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();


      this.eBook.set({
        title: this.$el.find('input[name=title]').val(),
        description: this.$el.find('textarea[name=description]').val(),
        id: Math.floor(Math.random() * 100) + 1
      });

      this.eBooks.add(this.eBook);

      window.location.hash = "eBooks/index";
    },

    render: function () {
      this.$el.html(_.template($('#formTemplate').html(), this.eBook.toJSON()));
      this.$el.find('h2').text('Create New Ebook');
      return this;
    }
  });
}());
