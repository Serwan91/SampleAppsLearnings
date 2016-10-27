(function () {
    'use strict';
    var app = angular.module('simplepractices');
    app.controller('cWCFController', WcfController);

    //csharp.$inject = ['$location'];

    function WcfController($scope, $sce) {
        var vm = this;
        var lc = $sce;
        vm.ContentFile = "";
        vm.Code = ""
        vm.SetDetailSection = function (viewname) {
            
            if (vm.ContentFile.length <= 0) {
                $.get('static/wcf/wcfContent.html', function (data) {
                    //process text file line by line
                    vm.ContentFile = data;
                    vm.DivSection = $(vm.ContentFile).siblings("#" + viewname).html();
                    //vm.Code = vkbeautify.xml($(vm.ContentFile).siblings("#" + viewname).find(".codeSnippetContainerCodeContainer").html())
                });
            } else {
                vm.DivSection = $(vm.ContentFile).siblings("#" + viewname).html();
            }
        };
    }

  
})();
