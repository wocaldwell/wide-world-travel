"use strict";

app.controller("BookCtrl", function($scope, $http, $q) {
    return $q(function(resolve, reject) {
        $http.get("../data/guides.json")
        .then(function(guideObject) {
            console.log('guideObject = ', guideObject);
            let guideCollection = guideObject.data;
            $scope.books = guideCollection.guides;
        });
    });


});