define(function (require, exports, module) {
    const Backbone = require('backbone');
    module.exports = Info = Backbone.Model.extend({
        initialize: function () {
            console.log("测试Info加载"+this.get('id'))
        },
        defaults:{
            id: null,
            username: null,
            age: null,
            cityName: null
        }
    });
});