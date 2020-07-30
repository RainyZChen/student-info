define(function (require, exports, module) {
    const Backbone = require('backbone');
    const _ = require('underscore');
    const infoTable = require('infoTable');
    module.exports = InfoView = Backbone.View.extend({
        initialize: function () {
            console.log("测试InfoView的加载")
        },
        getCityStr: _.template($('#info-template').html()),
        render: function (info) {
            this.model = info.attributes;
            $('.info-list ul').append(this.getCityStr(this.model));
            this.el = $(`#${info.attributes.id}`)
                .on('click', this.onDelete)
                // .hover(this.onHover, this.onOut);
            return this
        },
        onDelete: function () {
            if (confirm('是否确定删除？')) {
                this.el.remove();
            }
        },
        // onHover: function () {
        //     this.el.text('删除');
        // },
        // onOut: function () {
        //     this.el.text(this.model.cityName);
        // },
        add: function (info) {
            infoTable.push(info);
            this.render(info);
        }
    });

});