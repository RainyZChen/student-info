define(function (require, exports, module) {
    const Backbone = require('backbone');
    const HomeView = require('homeView');
    const EditView = require('editView');
    module.exports = Home = Backbone.View.extend({
        initialize: function () {
            const hostView = new HomeView
            const editView = new EditView
            hostView.show();
            editView.hide();
        }
    });
});