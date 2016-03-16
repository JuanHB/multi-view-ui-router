(function(){
    'use strict';


    DashboardCtrl.$inject = ['ToolsSidebarService'];
    function DashboardCtrl(ToolsSidebarService){

        var vm = this;
        var tools = ToolsSidebarService.model.tools;


        angular.extend(this, {
            tools : tools
        });

    }

    angular
        .module('MultiViewApp.dashboard')
        .controller('DashboardCtrl', DashboardCtrl)

})();