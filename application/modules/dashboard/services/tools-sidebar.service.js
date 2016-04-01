/*
 * Serviço de dados que retorna a lista atual de
 * itens do menu "tools"
 * */
(function(){
    // ECMA5
    'use strict';

    // criando a função que cria o serviço
    function ToolsSidebarService(){

        // model object, é sempre bom manter toda
        // sua estrutura de informação nos serviços,
        // primeiro pq essa informação pode ser facilmente
        // compartilhada entre controladores
        // segundo, isso centraliza a informação em um lugar
        // assim você evita problemas como informação perdida
        // em diversos lugares do projeto
        var model = {
            tools : [
                { label : 'Home', slug: 'home', state : 'dashboard.index'},
                { label : 'Reports', slug: 'home', state : 'dashboard.reports'},
                { label : 'Users', slug: 'home', state : 'dashboard.users'},
                { label : 'Configs', slug: 'home', state : 'dashboard.configs'}
            ]
        };

        // usamos o return para exporta apenas coisas
        // "publicas", como a model e funções do serviço
        return {
            model : model
        };

    }

    angular
        .module('MultiViewApp.dashboard')
        .factory('ToolsSidebarService', ToolsSidebarService);

})();