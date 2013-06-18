/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";

  window.APP = APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Models.EBookModel = Backbone.Model.extend({
    paramRoot: "eBook",

    defaults: {
      title: "My new eBook",
      description: "",
      lastModified: new Date().toDateString(),
      modules: new APP.Collections.ModuleCollection()
    },

    initialize: function (options) {
    }
  });
  
  window.APP.Collections = window.APP.Collections || {};
  window.APP.Collections.EBookCollection = Backbone.Collection.extend({
    model: APP.Models.EBookModel
  });
}());
