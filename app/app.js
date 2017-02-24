"use strict";

var app = angular.module("wideWorldApp", ["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/guide-cards.html",
        controller: "BookCtrl"
    });
});
