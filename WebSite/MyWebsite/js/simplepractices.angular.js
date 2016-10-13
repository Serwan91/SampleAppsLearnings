/// <reference path="Angular.js" />
var app = angular.module("simplepractices", ['ngSanitize'])
app.controller("indexController", function () {
    this.DetailSection = "";
   this.SetDetailSection = function (viewname) {
       this.DetailSection = "Test succeed"
	};
})
app.controller("cSharpController", function ($scope, $sce) {

    $scope.csharpCtrl.CsharpContentFile = "";
    $scope.csharpCtrl.DivSection = "test";
    $scope.csharpCtrl.SetDetailSection = function (viewname) {
        if ($scope.csharpCtrl.CsharpContentFile.length <= 0) {
            $.get('csharpContent.html', function (data) {
                //process text file line by line
                $scope.csharpCtrl.CsharpContentFile = data;
                $scope.$apply(function () {
                    $scope.csharpCtrl.DivSection = $sce.trustAsHtml($($scope.csharpCtrl.CsharpContentFile).siblings("#" + viewname).html());
            });
            });
        } else {
            $scope.csharpCtrl.DivSection = $sce.trustAsHtml($($scope.csharpCtrl.CsharpContentFile).siblings("#" + viewname).html());
        }
    };
});
// CSS Controler
app.controller("CssControler", function ($scope, $sce) {
    
    $scope.CtrlCss.CssContentFile = "";
    $scope.CtrlCss.SetDetailSection = function (viewname) {
        if ($scope.CtrlCss.CssContentFile.length <= 0) {
            $.get('CssContent.html', function (data) {
                //process text file line by line
                $scope.CtrlCss.CssContentFile = data;
                $scope.$apply(function () {
                    $scope.CtrlCss.DivSection = $sce.trustAsHtml($($scope.CtrlCss.CssContentFile).find("#" + viewname).html());
                });
            });
        } else {
            $scope.CtrlCss.DivSection = $sce.trustAsHtml($($scope.CtrlCss.CssContentFile).find("#" + viewname).html());
        }
    };
});