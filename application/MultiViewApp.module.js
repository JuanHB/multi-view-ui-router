(function(){
    // jsHint
    'use strict';

    // carretamos modulos da aplicação aqui
    // os módulos de terceiros ficam centralizados
    // no modules/core.module.js
    angular.module('MultiViewApp', [

        // modulo que carrega
        // os módulos de terceiros
        'MultiViewApp.core',

        // modulo para as dependencias
        // da dashboard do projeto
        'MultiViewApp.dashboard',

        // modulo com os submodulos da estrutura
        // que possui dados dinamicos
        'MultiViewApp.structure'

    ]);

})();