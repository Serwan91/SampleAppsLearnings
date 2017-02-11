(function () {
    'use strict';
    angular
        .module('simplepractices')
        .controller('cInterviewQuestionController', InterviewQuestionController);

    //controller.$inject = ['$location']; 

    function InterviewQuestionController($scope, $sce) {
        var vm = this;
        var lc = $sce;
        vm.ContentFile = "";
        //vm.DivSection = "test";
        vm.SetDetailSection = function (viewname) {
            if (vm.ContentFile.length <= 0) {
                $.get('static/InterviewQuestions/InterviewQuestionContent.html', function (data) {
                    //process text file line by line
                    vm.ContentFile = data;
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
