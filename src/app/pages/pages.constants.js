/**
 * @author Jason Zhang
 * created on 13.08.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages')
        .constant('Constants', {
            MAX_REC_COUNT_FOR_LOOKUP: 10000,
            HEADERS: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Basic emxpbXNfYmU6emxpbXNfYmU='
            },
            RESOURCE_TYPE_API: '/resources/type/:id/',
            RESOURCE_INSTANCE_API: '/resources/instance/:id/',
            LOOKUP_API: '/data/',
            REPORTS_SAMPLES_API: '/reports/samples/'
        });


})();
