require.config({
    baseUrl: './',
    map: {
        '*': {
            'css': 'lib/require-css/css' // or whatever the path to require-styles is
        }
    },
    paths: {
        "underscore": 'lib/underscore',
        "jquery": 'lib/jquery-3.3.1',
        "backbone": 'lib/backbone',
        //**********整个项目的入口
        "main":"js/main",
        //**********加载整个页面的控制器
        "home":"js/page/home/index",
        //**********views
        "homeView":"js/page/home/modules/homeView",
        "cityView":"js/page/home/modules/cityView",
        "cityListView":"js/page/home/modules/cityListView",
        "editView":"js/page/home/modules/editView",
        "infoListView":"js/page/home/modules/infoListView",
        "infoView":"js/page/home/modules/infoView",
        //**********domains
        "city":"js/page/home/datas/city",
        "info":"js/page/home/datas/info",
        "cityTable":"js/page/home/datas/cityTable",
        "infoTable":"js/page/home/datas/infoTable",
    },
    shim:{
        // main: {
        //    deps: ['css!styles/index.css']
        // },
        backbone: {
            deps: ['underscore']
        },
        underscore: {
            exports: '_',
        },
    },

});