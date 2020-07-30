define(function (require, exports, module) {
    const Backbone = require('backbone');
    const _ = require('underscore');
    const infoTable = require('infoTable');
    const InfoView = require('infoView');
    const EditView = require('editView');
    module.exports = InfoListView = Backbone.Model.extend({
        initialize: function () {
            _.bindAll(this, 'onAdd');
            $('.batch-operate .add-info').on('click', this.onAdd);
        },
        onAdd: function () {
            $('#home').addClass('unshow')
            $('body').addClass('background-gray');
            new EditView(this);
        },
        save: function (info) {
            const infoView = new InfoView
            infoView.add(info);
            $('#home').removeClass('unshow');
            $('body').removeClass('background-gray');
            $('#edit').addClass('unshow')
        }
    });
});