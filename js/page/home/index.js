define(function (require, exports, module) {
    const Backbone = require('backbone');
    const HomeView = require('homeView');
    module.exports = Home = Backbone.View.extend({
        initialize: function () {
            const hostView = new HomeView
            hostView.show();
        }
    });
});