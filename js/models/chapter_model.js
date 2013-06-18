/*global APP:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";

  window.APP = APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Models.ChapterModel = Backbone.Model.extend({
    defaults: {
      title: "My new chapter",
      description: ""
    },
    initialize: function (options) {
    }
  });
  
  window.APP.Collections = window.APP.Collections || {};
  window.APP.Collections.ChapterCollection = Backbone.Collection.extend({
    model: APP.Models.ChapterModel
  });
}());
