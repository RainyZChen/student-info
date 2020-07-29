define(function (require, exports, module) {
    const City = require('city');
    class CityTable {
        // 作静态方法
    }
    const table = CityTable.prototype.table=[]
    for (let i = 0; i < 20; i++) {
        const city = new City
        city.set({id:`city${i}`, cityName: `成都${i}`})
        table.push(city)
    }
    module.exports = table;
});