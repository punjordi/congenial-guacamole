//Initialize angular module
var myApp = angular.module("appModule",[]);

//Initialize angular controller that processes user input and displays a list of recent searches
//that is stored on localstorage

myApp.controller("appController",function ($scope) {

    //Parse the localstorage string into the array
    $scope.recentNames = JSON.parse(localStorage.getItem("namesList"));
    //Initialize variables
    $scope.newName = "";

    //Function pushname that takes user input, checks for duplicates in the localstorage and if there is, pushes it to the front

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
    //Function deletes the name in the list given an index.
   $scope.deleteName = function (index) {
       $scope.recentNames.splice(index,1);
       $scope.pushLocal($scope.recentNames);
   };

   //Helper function that pushes the array object into localstorage by first stringifying.
   $scope.pushLocal = function (arr) {
       localStorage.setItem("namesList",JSON.stringify(arr));
   }


});

