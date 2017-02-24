"use strict";

app.controller("BookCtrl", function($scope, GuideFactory) {
    GuideFactory.getGuidesInfo()
    .then(function callback(guides) {
        console.log('stuff from GuideFactory = ', guides);
        $scope.books = guides;
    });
});