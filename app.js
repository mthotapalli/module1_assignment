(function(){
'use strict';

angular.module("LunchCheck",[])
.controller('LunchCheckController', LunchCheckAppController);
LunchCheckAppController.$inject = ['$scope', '$filter'];
function LunchCheckAppController($scope, $filter){
    $scope.message = "";
    $scope.lunchMenuList = "";
    $scope.messageColor ="";
    $scope.borderColor ="";
    $scope.displayMessage = function(){
      var itemCount = getItemsCount($scope.lunchMenuList);
      $scope.message = getMessage(itemCount);
      $scope.messageColor = getMessageColor(itemCount);
      $scope.borderColor = getBorderColor(itemCount);

    };

    function getItemsCount(luchMenuString){
      var item = luchMenuString.split(',');
      var count = 0;
      for(var i=0;i<item.length;i++){
        if(item[i].trim()!=''){
          count++;
        }
      }

      return count;
    };

    function getMessage(count){

      if(count==0){
        return "Please enter data first.";
      }

      if(count<=3){
        return "Enjoy!";
      }

      if(count>3){
        return "Too much!";
      }
    };

    function getMessageColor(count){

      if(count==0){
        return "red";
      }
      return "green";
    };
    
    function getBorderColor(count){

      if(count==0){
        return "redBorder";
      }
      return "greenBorder";
    };
  }
})();
