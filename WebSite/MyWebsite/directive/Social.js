(function() {
    'use strict';

    angular
        .module('mycustomDirective', [])
        .directive('mySocialTag', directive);
     
   // directive.$inject = ['$window'];
    
    function directive () {
        // Usage:
        //     <directive></directive>
        // Creates:
        // 
        var directive = {
            restrict: 'E',
            template: ' <a href="#"><i class="icon-twitter-with-circle"></i></a>'+
                      ' <a href="#"><i class="icon-facebook-with-circle"></i></a>'+
                      ' <a href="#"><i class="icon-instagram-with-circle"></i></a>'

        };
        return directive;
    }

})();