define(function (require, exports, module) {
    const Backbone = require('backbone');
    const _ = require('underscore');
    const infoTable = require('infoTable');
    module.exports = InfoView = Backbone.View.extend({
        initialize: function (editView) {
            _.bindAll(this, 'onDelete','onEdit','onUp','onDown','add');
            this.editView = editView;
        },
        getCityStr: _.template($('#info-template').html()),
        render: function (info) {
            this.model = info.attributes;
            const $info = $(this.getCityStr(this.model));
            $('.info-list ul').append($info);
            this.el = $info
            $info.find('.delete-info').on('click', this.onDelete);
            $info.find('.edit-info').on('click', this.onEdit);
            $info.find('.up-info').on('click', this.onUp);
            $info.find('.down-info').on('click', this.onDown);
            return this
        },
        add: function (info) {
            infoTable.push(info);
            this.render(info);
            this.info = info;
        },
        onDelete: function () {
            if (confirm('是否确定删除？')) {
                this.el.remove();
            }
        },
        onEdit: function () {
            this.editView.show(this);
        },
        onUp: function () {
            const $prev = $(this.el).prev('li');
            if($prev.length > 0){
                $prev.before($(this.el).detach())
            }
        },
        onDown: function () {
            const $next = $(this.el).next('li');
            if ($next.length > 0) {
                $next.after($(this.el).detach())
            }

        }


    });

});