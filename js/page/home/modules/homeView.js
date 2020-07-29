define(function (require, exports, module) {
    const Backbone = require('backbone');
    const $ = require('jquery');
    const CityListView = require('cityListView');
    const InfoListView = require('infoListView');

    module.exports = HomeView = Backbone.View.extend({
        el: "#home",
        /**
         * 1、初始化城市列表
         * 2、初始化信息列表
         */
        initialize: function () {
            console.log("测试HomeView的加载");
            const cityListView = new CityListView
            const infoListView = new InfoListView

        },
        show: function () {
            $(this.el).show();
        },
        hide:function () {
            $(this.el).hide();
        }
    });

});