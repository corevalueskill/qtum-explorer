'use strict';

angular.module('insight.address')
.factory('Address', function($resource, $window) {

		return $resource($window.apiPrefix + '/addr/:addrStr/?noTxList=1', {
			addrStr: '@addStr'
		}, 
		{
			get: {
				method: 'GET',
				interceptor: {
					response: function (res) {
						return res.data;
					},
					responseError: function (res) {
						if (res.status === 404) {
							return res;
						}
					}
				}
			}
		});
	}
);