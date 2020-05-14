var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl',function($scope) {
$scope.galleries = [
		{ "title":"Kopalino",
			"when":"2016-03-10",
			"thumbnailUrl":"pict/ang/kol1.jpg"
		},
		{  "title":"Kassel",
			"when":"2014-05-12",
			"thumbnailUrl":"pict/ang/kol3.jpg"
		},
		{ "title":"Brading",
			"when":"2017-09-23",
			"thumbnailUrl":"pict/ang/kol5.jpg"
		},
		{  "title":"Kopalino",
			"when":"2016-03-12",
			"thumbnailUrl":"pict/ang/kol2.jpg"
		},
		{ "title":"Balloch",
			"when":"2014-10-10",
			"thumbnailUrl":"pict/ang/kol4.jpg"
		},
		{  "title":"Karen Village",
			"when":"2018-06-12",
			"thumbnailUrl":"pict/ang/kol6.jpg"
		},
		];
		$scope.length=Object.keys($scope.galleries).length;
		$scope.sortList = [
		{
			'label':'Alfabetycznie',
			'value':'title'
		},
		{
			'label':'Chronologicznie',
			'value':'when'
		},
		{
			'label':'Najnowsze',
			'value':'-when'
			}
		];

		$scope.orderProp = 'when';
});


