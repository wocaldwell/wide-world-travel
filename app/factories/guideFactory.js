"use strict";

app.factory("GuideFactory", function($http, $q) {
    let getGuidesInfo = function() {
        return $q(function(resolve, reject) {
            $http.get("../data/guides.json")
            .then(function(guideObject) {
                console.log('guideObject = ', guideObject);
                let guideCollection = guideObject.data;
                resolve(guideCollection.guides);
            })
            .catch(function(error) {
                reject(error);
            });
        });
    };

    return {getGuidesInfo};
});