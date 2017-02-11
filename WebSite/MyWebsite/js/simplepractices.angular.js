/// <reference path="_reference.js" />

var app = angular.module("simplepractices", ['ngSanitize', 'ngRoute'])

//Route Configurations:
app.config(routConfig);
routConfig.$inject = ['$routeProvider', '$locationProvider'];

function routConfig($routeProvider, $locationProvider) {
    $routeProvider
        .when("/csharp", { templateUrl: '/static/c-sharp/csharp.html', controller: 'cSharpController', controllerAs: 'csharpCtrl', title: 'C-Sharp' })
        .when("/DotNetFrameWork", { templateUrl: '/static/DotNET/DotNetFrameWork.html', controller: 'cDotNetController', controllerAs: 'cDotNetCtrl', title: 'C-Sharp' })
        .when("/WCF", { templateUrl: '/static/wcf/WCF.html', controller: 'cWCFController', controllerAs: 'wcfCtrl', title: 'WCF' })
        .when("/Angular", { templateUrl: '/static/angular/Angular.html', controller: 'cAngularController', controllerAs: 'cAngularCtrl', title: 'C-Sharp' })
        .when("/JQuery", { templateUrl: '/static/JQuery/JQuery.html', controller: 'cJQueryController', controllerAs: 'cJQueryCtrl', title: 'C-Sharp' })
        .when("/HTML", { templateUrl: '/static/HTML/HTML.html', controller: 'cHTMLController', controllerAs: 'cHTMLCtrl', title: 'C-Sharp' })
        .when("/CSS", { templateUrl: '/static/CSS/CSS.html', controller: 'cCSSController', controllerAs: 'cCSSCtrl', title: 'C-Sharp' })
        .when("/BootStrap", { templateUrl: '/static/BootStrap/BootStrap.html', controller: 'cBootStrapController', controllerAs: 'cBootStrapCtrl', title: 'C-Sharp' })
        .when("/DesignPattern", { templateUrl: '/static/DesignPattern/DesignPattern.html', controller: 'cDesignPatternController', controllerAs: 'dgnpatternCtrl', title: 'C-Sharp' })
        //.when("/Algorithm", { templateUrl: '/static//csharp.html', controller: 'cDesignPatternController', controllerAs: 'cDesignPatternCtrl', title: 'C-Sharp' })
        .when("/InterviewQuestion", { templateUrl: '/static/InterviewQuestions/InterviewQuestion.html', controller: 'cInterviewQuestionController', controllerAs: 'cInterviewQuestionCtrl', title: 'Interview Question' })
        //.when("/RelatedNews", { templateUrl: '/static//csharp.html', controller: 'cDesignPatternController', controllerAs: 'cDesignPatternCtrl', title: 'C-Sharp' })
        .otherwise({ redirectTo: '/Index.html' });


    $locationProvider.html5Mode(true);
}



app.controller("indexController", function () {
    this.DetailSection = "";
    this.SetDetailSection = function (viewname) {
        this.DetailSection = "Test succeed"
    };
})
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

app.controller("cWCFController", function ($scope, $sce) {
    var vm = this;
    vm.DivSection = "test success";

});