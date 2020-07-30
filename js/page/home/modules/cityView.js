define(function (require, exports, module) {
    const Backbone = require('backbone');
    const _ = require('underscore');
    const City = require('city');
    const cityTable = require('cityTable');
    module.exports = CityView = Backbone.View.extend({
        initialize: function (id) {
            this.cid = id;
            _.bindAll(this, 'onDelete', 'onHover', 'onOut')
        },
        getCityStr: _.template($('#city-template').html()),
        render: function (city) {
            this.model = city.attributes;
            $('.city-list a').before(this.getCityStr(this.model));
            this.el = $(`#${city.attributes.id}`)
                .on('click', this.onDelete)
                .hover(this.onHover, this.onOut);
            return this
        },
        onDelete: function () {
            if (confirm('是否确定删除？')) {
                this.el.remove();
            }
        },
        onHover: function () {
            this.el.text('删除');
        },
        onOut: function () {
            this.el.text(this.model.cityName);
        },
        add: function (city) {
            cityTable.push(city);
            this.render(city);
        },
        renderCitySelect: function (city, cityName) {
            const optionCity = _.template($('#city-option-template').html())(city.attributes)
            const $optionCity = $(optionCity);
            $('#city').append($optionCity);
            if (city.attributes.cityName===cityName) {
                $optionCity.attr('selected', 'selected');
            }
        }
    });

});