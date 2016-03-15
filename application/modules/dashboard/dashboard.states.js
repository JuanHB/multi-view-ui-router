/*
* Cada coisa no seu lugar, um arquivo para cada configuração.
* Esse arquivo cuida das rotas para o modulo do dashboard.
* */
(function(){
    'use strict';

    // injeção de dependencia (DI)
    homeStatesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function homeStatesConfig($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");

        // Configurando os estados
        $stateProvider
            .state('dashboard', {
                // "abstract", significa que esse estado pode ser herdado por outros
                //abstract : true,
                url: "/dashboard",
                views : {
                    'dashboard' : {
                        templateUrl : 'application/layouts/dashboard.layout.html'
                    }
                }
            })
            .state('dashboard.index', {
                url : "/home",
                templateUrl : "application/modules/dashboard/partials/index.partial.html"
            })

    }

    angular
        .module('MultiViewApp.dashboard')
        .config(homeStatesConfig)

})();