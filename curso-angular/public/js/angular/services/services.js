myApp.service('numeroRegistros', function(){
	this.semRegistro = function(arrayData){
		if(arrayData.length == 0){
			return true;
		}else{
			return false;
		}
	}
});