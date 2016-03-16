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
            // estado pai para o dashboard
            .state('dashboard', {
                // "abstract", significa que esse estado pode ser herdado por outros
                abstract : true,
                views : {
                    'dashboard' : {
                        templateUrl : 'application/layouts/dashboard.layout.html'
                    }
                }
            })
            // estado filho do dashboard, esse aponta para o index do dashboard
            .state('dashboard.index', {
                url : "/",
                templateUrl : "application/modules/dashboard/partials/index.partial.html"
            })

    }

    angular
        .module('MultiViewApp.dashboard')
        .config(homeStatesConfig)

})();