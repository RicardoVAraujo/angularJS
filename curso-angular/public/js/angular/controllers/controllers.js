myApp.controller('homeController', function($scope,$http,ngTableParams,$filter,numeroRegistros){

	$http.get('/app/home').success(function(data){
		produtos = data;
		$scope.produtos = produtos;
    	paginacao($scope,ngTableParams,produtos,15,$filter);


    	if(numeroRegistros.semRegistro(produtos)){
    		$("#mensagem-status").show('fast');
			$("#mensagem-status").html('Sem registros');
		}
	});

	//edit
	$scope.edit = function(index){
		$scope.tr_edit = true;
		$scope.produto_editar = index;
	}
	
	//atualizar
	$scope.atualizar = function(index){
		$http.put('/app/atualizar',index).success(function(data){
			if(data === 'atualizou'){
					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-success');
					$("#mensagem-status").html('Atualizado com sucesso');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-success');
					$("#mensagem-status").hide('fast');
				},2000);
			}else{
					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-danger');
					$("#mensagem-status").html('Erro ao atualizar registro');

				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-danger');
					$("#mensagem-status").hide('fast');
				},2000);
			}
		});
	}
	

	//verificar se registro ja existe
	$scope.verificar = function(){
		$scope.$watch(function(){
			return $scope.produto_cadastrar.tb_produtos_nome;
		},function(newValue,oldValue){
			var totalRegistros = produtos.length;
			for(var i=0; i<totalRegistros;i++){
				if(newValue == oldValue){
					if(produtos[i].tb_produtos_nome == newValue){
						$("#mensagem-status").show('fast');
						$("#mensagem-status").addClass('alert alert-danger');
						$("#mensagem-status").html('Esse registro já existe');
						$scope.formCadastrar.$invalid = true;
						return false;
					}else{	

						console.log('invalido:'+$scope.formCadastrar.$invalid);
						console.log('required:'+$scope.formCadastrar.$error.required);

						if($scope.formCadastrar.$invalid == false || $scope.formCadastrar.$error.required == false){
							$scope.formCadastrar.$invalid = false;
						}
						$("#mensagem-status").removeClass('alert alert-danger');
						$("#mensagem-status").hide('fast');
					}
				}
			}
		});
	}


	//cancelar
	$scope.cancelar = function(){
		$scope.tr_edit = false;
	}

	//deletar
	$scope.deletar = function(index){	
		$http.delete('app/deletar/'+index.id).success(function(data){
			if(data === 'deletou'){

					var indexof = produtos.indexOf(index);
					produtos.splice(indexof,1);
					$scope.tableParams.reload();

					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-success');
					$("#mensagem-status").html('Deletado com sucesso');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-success');
					$("#mensagem-status").hide('fast');
				},2000);
			}else{
					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-success');
					$("#mensagem-status").html('Erro ao deletar');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-success');
					$("#mensagem-status").hide('fast');
				},2000);
			}
		});
	}

	//cadastrar
	$scope.add = function(){

		var date = new Date();
		dateTime = date.getTime();
		$scope.produto_cadastrar.tb_produtos_data = dateTime;

		$http.post('/app/cadastrar',$scope.produto_cadastrar).success(function(data){
			produtos.unshift(data);
			$scope.tableParams.reload();

				$scope.cadastrar = false;
				$scope.produto_cadastrar = '';

			if(data.id !== 0 && data.id !== undefined){
				    $("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-success');
					$("#mensagem-status").html('Cadastrado com sucesso');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-success');
					$("#mensagem-status").hide('fast');
				},2000);
			}else{
   					$("#mensagem-status").show('fast');
					$("#mensagem-status").addClass('alert alert-danger');
					$("#mensagem-status").html('Erro ao cadastrar registro');
				setTimeout(function(){
					$("#mensagem-status").removeClass('alert alert-danger');
					$("#mensagem-status").hide('fast');
				},2000);
			}

		});
	}

	//includes
	$scope.header = '/app/views/header.html';
	$scope.footer='caminho_footer';
});

myApp.controller('editarProdutoController', function($scope,$routeParams,$http){
	$http.get('/app/atualizar/'+$routeParams.id).success(function(data){
		$scope.produto_editar = data;
	});	

	//atualizar
	$scope.atualizar = function(index){
		$http.put('/app/atualizar',index).success(function(data){
			if(data === 'atualizou'){
					$("#mensagem-status-atualizar").show('fast');
					$("#mensagem-status-atualizar").addClass('alert alert-success');
					$("#mensagem-status-atualizar").html('Atualizado com sucesso');
				setTimeout(function(){
					$("#mensagem-status-atualizar").removeClass('alert alert-success');
					$("#mensagem-status-atualizar").hide('fast');
				},2000);
			}else{
					$("#mensagem-status-atualizar").show('fast');
					$("#mensagem-status-atualizar").addClass('alert alert-danger');
					$("#mensagem-status-atualizar").html('Erro ao atualizar registro');

				setTimeout(function(){
					$("#mensagem-status-atualizar").removeClass('alert alert-danger');
					$("#mensagem-status-atualizar").hide('fast');
				},2000);
			}
		});
	}

});