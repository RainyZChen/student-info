define(function (require, exports, module) {
    const Backbone = require('backbone');
    const _ = require('underscore');
    const infoTable = require('infoTable');
    const cityTable = require('cityTable');
    const Info = require('info');
    const CityView = require('cityView');
    module.exports = EditView = Backbone.View.extend({
        el: "#edit",
        username: "#username",
        age: "#age",
        city: "#city",

        initialize: function (infoListView) {
            _.bindAll(this, 'onSave','editOrInit');
            this.infoListView = infoListView;
        },
        events: {
            'click #close': 'onClose',
            'click #save': 'onSave',
        },
        show: function (infoView) {
            $('#home').addClass('unshow');
            $('body').addClass('background-gray');
            $(this.el).removeClass('unshow');
            $('#edit input').val('');
            this.editOrInit(infoView);
        },
        hide:function () {
            $(this.el).add('unshow')
        },
        onClose: function () {
            $(this.el).addClass('unshow');
            $('#home').removeClass('unshow');
        },
        onSave: function () {
            const info = new Info
            // TODO
            info.set({id:this.getMaxId(infoTable),username: $(this.username).val(), age: $(this.age).val(), cityName: $(this.city).val()});
            this.infoListView.save(info)
            $(this.el).find('option').remove();
        },
        getMaxId: function (cityTable) {
            if (cityTable[0]) {
                cityTable.sort(this.compare('id'));
                return cityTable[cityTable.length - 1].get('id') + 1;
            } else {
                return 0;
            }
        },
        compare: function (propertyName) {
            return function (a, b) {
                let value1 = Number.parseInt(a.get(propertyName));
                let value2 = Number.parseInt(b.get(propertyName));
                return value1 - value2;
            }
        },
        editOrInit: function (infoView) {
            if (infoView) {
                const infoModel = infoView.info.attributes;
                $(this.username).val(infoModel.username);
                $(this.age).val(infoModel.age);
                // $(this.city).val(infoModel.cityName);
            }
            const cityView = new CityView
            for (let i = 0; i < cityTable.length; i++) {
                cityView.renderCitySelect(cityTable[i]);
            }
        }
    });

});