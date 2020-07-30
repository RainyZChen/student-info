define(function (require, exports, module) {
    const Backbone = require('backbone');
    const _ = require('underscore');
    const infoTable = require('infoTable');
    const InfoView = require('infoView');
    const EditView = require('editView');
    module.exports = InfoListView = Backbone.Model.extend({
        // batchCheck: $('#batch-check'),
        addInfo: $('.batch-operate .add-info'),
        initialize: function () {
            _.bindAll(this, 'onAdd');
            this.editView = new EditView(this);
            this.addInfo.on('click', this.onAdd);
            $('#batch-check').on('click', this.onBatchCheck);
            $('.batch-delete').on('click', this.onBatchDelete)
        },
        onAdd: function () {
            $('#home').addClass('unshow')
            $('body').addClass('background-gray');
            this.editView.show();
            this.editView.editOrInit();
        },
        save: function (info) {
            const infoView = new InfoView
            infoView.add(info);
            $('#home').removeClass('unshow');
            $('body').removeClass('background-gray');
            $('#edit').addClass('unshow')
        },
        onBatchCheck: function () {
            const $batch = $('#batch-check');
            const checked = $batch.prop('checked');
            if (checked) {
                $('input[type=checkbox]').prop('checked', true);
            } else {
                $('input[type=checkbox]').prop('checked', false);
            }
        },
        onBatchDelete:function () {
            $('.info-list input').each(function (index, ele) {
                const $ele = $(ele);
                if ($ele.prop('checked')) {
                    $ele.parents('li').remove();
                }
            })
        }



    });
});