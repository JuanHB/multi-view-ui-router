(function(){
    'use strict';

    appConfig.$inject = ['$urlRouterProvider'];
    function appConfig($urlRouterProvider){

        // Para urls que não existem, redireciona para o root
        $urlRouterProvider.otherwise("/");

    }

    angular
        .module('MultiViewApp')
        .config(appConfig);
})();
