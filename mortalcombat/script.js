//script

'use strict';
	angular.module('app', [])
	
  .controller('toastCtrl', ['$scope',function($scope){
		var p1 = {
			name:'Scopion'
			, sprite: 'http://i225.photobucket.com/albums/dd155/GM123456/Scorp_3d_slim_final.gif' 
			, versusImage:'https://3.bp.blogspot.com/-v8C3iA3bKlg/TaGcyvmTBSI/AAAAAAAAD_Y/4TeY1WGHong/s1600/SCORPIONmk3vs.png'
			, life:100
			, pos:20
		}
		var p2 = {
			name:'Repitile'
			, sprite: 'http://i225.photobucket.com/albums/dd155/GM123456/Scorp_3d_slim_final.gif' 
			, versusImage:'https://2.bp.blogspot.com/-ZAByB9T8tTE/TaGdF3cTkYI/AAAAAAAAD_g/klxnloTfJ_s/s1600/REPTILEmk3vs.png'
			, life:100
			, pos:20
		}
		$scope.plyaers = {
			p1:p1
			, p2: p2
		}

		$scope.loader = true
		setTimeout(function(){
			$scope.loader = false;
			$scope.$apply();
		},2000)
		$scope.toast = false;
		$scope.showDanForden = function(){
			$scope.toast = true;
			setTimeout(function(){
				$scope.toast = false;
				$scope.$apply();
			},800);
		}

		$scope.finish = {
				action:''
		};
		$scope.showFinish = function(){
			$scope.finish.action = 'https://49.media.tumblr.com/e0c55fc60b703206f5b50d61f08c66d1/tumblr_mgj1s8HP4A1rvbjw7o1_500.gif';
			setTimeout(function(){
				$scope.finish.action = '';
				$scope.$apply();
			},1400);
		}
		
		$('.level').keypress(function(event){
			console.log(event.which);
		})
  }])