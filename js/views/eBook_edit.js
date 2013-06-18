/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.EBookEditView = Backbone.View.extend({

    events: {
      "click button.save": "save"
    },

    initialize: function (options) {
      this.eBook  = options.eBook;
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      this.eBook.set({
        title: this.$el.find('input[name=title]').val(),
        description: this.$el.find('textarea[name=description]').val(),
        lastModified:new Date().toDateString(),
        modules: this.eBook.get("modules")
      });
      window.location.hash = "eBooks/index";
    },

    render: function () {
      this.$el.html(_.template($('#editeBookTemplate').html(), this.eBook.toJSON()));
      this.$el.find('h2').text('Edit eBook');
      this.addAll();
      return this;
    },

      addAll: function () {
          this.$el.find('tbody').children().remove();
          var ebookId = this.eBook.get("id");
          var modules = this.eBook.get("modules").where({ebookId:ebookId});
          if(modules.length){
              this.$el.append($('#moduleTableHeaderTemplate').html())
          }
          _.each(modules, $.proxy(this, 'addOne'));
      },

      addOne: function (module) {
          var view = new APP.Views.ModuleRowView({modules: this.eBook.get("modules"), module: module});
          this.$el.find("tbody").append(view.render().el);
      }
  });
}());
