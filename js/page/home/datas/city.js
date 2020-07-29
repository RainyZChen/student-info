define(function (require, exports, module) {
    const Backbone = require('backbone');
    module.exports = City = Backbone.Model.extend({
        initialize: function () {
            console.log("测试City加载"+this.get('id'))
        },
        defaults:{
            id: null,
            cityName: null
        }
    });

});