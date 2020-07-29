define(function (require, exports, module) {
    const Backbone = require('backbone');
    const _ = require('underscore');
    const cityTable = require('cityTable');
    const cityView = require('cityView');


    module.exports = InfoListView = Backbone.Model.extend({
        initialize: function () {
            // _.bindAll(this, 'onAddCity');
            // this.el = $('#cities a').on('click',this.onAddCity)
        },
        // onAddCity:function () {
        //     const message = prompt();
        //     // cityView.render();
        //
        // }
    });
});