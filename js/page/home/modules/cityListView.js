define(function (require, exports, module) {
    const Backbone = require('backbone');
    const _ = require('underscore');
    const CityView = require('cityView');
    const cityTable = require('cityTable');
    const City = require('city');
    module.exports = CityListView = Backbone.Model.extend({
        initialize: function () {
            _.bindAll(this, 'onAdd');
            this.el = $('#cities a').on('click',this.onAdd)
            this.refreshShow(cityTable);
        },
        refreshShow: function (cityTable) {
            if (cityTable[0]) {
                for (let i = 0; i < cityTable.length; i++) {
                    const cityView = new CityView(cityTable[i].attributes.id)
                    cityView.render(cityTable[i])
                }
            }
        },
        onAdd:function () {
            const message = prompt();
            if (!message) {
                alert('添加城市不能为空');
                return;
            }
            const cityView = new CityView();
            const city = new City
            city.set({id: this.getMaxId(cityTable), cityName: message});
            cityView.add(city);
        },
        getMaxId: function (cityTable) {
            if (cityTable[0]) {
                cityTable.sort(this.compare('id'));
                return cityTable[cityTable.length - 1].get('id') + 1;
            } else {
                return 0;
            }
        },
        compare: function (propertyName){
        return function(a,b){
            let value1 = Number.parseInt(a.get(propertyName));
            let value2 = Number.parseInt(b.get(propertyName));
            return value1 - value2;
        }
    }

    });
});