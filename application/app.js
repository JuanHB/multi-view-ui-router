(function(){
    // jsHint
    'use strict';

    // carretamos modulos da aplicação aqui
    // os módulos de terceiros ficam centralizados
    // no core.module.js
    angular.module('MultiViewApp', [

        // modulo que carrega
        // os módulos de terceiros
        'MultiViewApp.core',

        // modulo para as dependencias
        // da home page do projeto
        'MultiViewApp.home'

    ]);

})();