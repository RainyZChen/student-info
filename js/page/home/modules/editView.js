define(function (require, exports, module) {
    const Backbone = require('backbone');
    module.exports = EditView = Backbone.View.extend({
        el: "#edit",
        initialize: function () {
            console.log("测试EditView的加载")
        },
        show: function () {
            $(this.el).show()
        },
        hide:function () {
            $(this.el).hide();
        }

    });

});