(function () {
    'use strict';

    var app = angular.module('simplepractices');
    app.controller('cSharpController', csharp);

    //csharp.$inject = ['$location'];

    function csharp($scope, $sce) {
        var vm = this;
        var lc = $sce;
        vm.CsharpContentFile = "";
        //vm.DivSection = "test";
        vm.SetDetailSection = function (viewname) {
            if (vm.CsharpContentFile.length <= 0) {
                $.get('static/c-sharp/csharpContent.html', function (data) {
                    //process text file line by line
                    vm.CsharpContentFile = data;
                    //vm.DivSection = $(vm.CssContentFile).find("#" + viewname).html();
                    $scope.$apply(function () {
                        vm.DivSection = $(vm.CsharpContentFile).siblings("#" + viewname).html();
                    });
                });
            } else {
                vm.DivSection = $(vm.CsharpContentFile).siblings("#" + viewname).html();
            }
        };
    }
})();
