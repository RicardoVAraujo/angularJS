<?php

$app->get('/home', function(){

	$produtos = new \app\models\produtos();
	$produtosCadastrados = $produtos->listar();

	$toJson = new app\classes\toJson();
	$jsonProdutos = $toJson->multipleJson($produtosCadastrados);
	echo $jsonProdutos;

});

$app->put('/atualizar', function() use($app){
	$produtos = new \app\models\produtos();
	$dados = json_decode($app->request()->getBody());
	
	$id = filter_var($dados->id, FILTER_SANITIZE_NUMBER_INT);
	$nome = filter_var($dados->tb_produtos_nome, FILTER_SANITIZE_STRING);
	$preco = filter_var($dados->tb_produtos_preco, FILTER_SANITIZE_STRING);

	//datetime para pegar a data de hoje
	$data = new \DateTime();
	$dataUpdate = $data->getTimestamp()*1000;

	$attributes = array(
		'tb_produtos_nome' => $nome,
		'tb_produtos_preco' => $preco,
		'tb_produtos_data' => $dataUpdate
	);

	$produtos->atualizar($id,$attributes);
	echo 'atualizou';
});

$app->get('/atualizar/:id', function($id){
	$produtos = new \app\models\produtos();
	$produtoEncontrado = $produtos->pegar_pelo_id('id',$id);

	$toJson = new app\classes\toJson();
	$jsonProdutos = $toJson->simpleJson($produtoEncontrado);
	echo $jsonProdutos;
});

$app->delete('/deletar/:id', function($id){
	$produtos = new \app\models\produtos();
	$produtos->deletar($id);
	echo 'deletou';
});

$app->post('/cadastrar', function() use($app){
	$produtos = new \app\models\produtos();
	$dados = json_decode($app->request()->getBody());

	$nome = filter_var($dados->tb_produtos_nome, FILTER_SANITIZE_STRING);
	$preco = filter_var($dados->tb_produtos_preco, FILTER_SANITIZE_STRING);
	$datacadastro = filter_var($dados->tb_produtos_data, FILTER_SANITIZE_STRING);
	
	$attributes = array(
		'tb_produtos_nome' => $nome,
		'tb_produtos_preco' => $preco,
		'tb_produtos_data' => $datacadastro
	);

	$produtoCadastrado=$produtos->cadastrar($attributes);

	$toJson = new app\classes\toJson();
	$jsonProdutos = $toJson->simpleJson($produtoCadastrado);
	echo $jsonProdutos;

});