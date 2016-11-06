(function () {
    'use strict';

    angular
        .module('simplepractices')
        .controller('cDesignPatternController', DesignPatternController);

    //controller.$inject = ['$location']; 

    function DesignPatternController($scope, $sce) {
        var vm = this;
        var lc = $sce;
        vm.ContentFile = "";
        //vm.DivSection = "test";
        vm.SetDetailSection = function (viewname) {
            if (vm.ContentFile.length <= 0) {
                $.get('static/DesignPattern/DesignPatternContent.html', function (data) {
                    //process text file line by line
                    vm.ContentFile = data;
                    //vm.DivSection = $(vm.CssContentFile).find("#" + viewname).html();
                    $scope.$apply(function () {
                        vm.DivSection = $(vm.ContentFile).siblings("#" + viewname).html();
                    });
                });
            } else {
                vm.DivSection = $(vm.ContentFile).siblings("#" + viewname).html();
            }
            //$("#" + viewname + " > .collapse").collapse();
        };
    }
})();
