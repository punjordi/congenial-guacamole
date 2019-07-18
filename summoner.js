var myApp = angular.module("appModule",[]);

myApp.controller("appController",function ($scope) {


    $scope.recentNames = JSON.parse(localStorage.getItem("namesList"));
    $scope.newName = "";
    $scope.pushName = function () {

       if($scope.newName !== "") {

           if($scope.recentNames.includes($scope.newName)){
               $scope.deleteName($scope.recentNames.indexOf($scope.newName));
               $scope.recentNames.unshift($scope.newName);
               $scope.pushLocal($scope.recentNames);
               $scope.newName = "";
           }
           else{
               $scope.recentNames.unshift($scope.newName);
               $scope.pushLocal($scope.recentNames);
               $scope.newName = "";


       }


    }



   };
   $scope.deleteName = function (index) {
       $scope.recentNames.splice(index,1);
   };
   $scope.pushLocal = function (arr) {

       localStorage.setItem("namesList",JSON.stringify(arr));

   }




});