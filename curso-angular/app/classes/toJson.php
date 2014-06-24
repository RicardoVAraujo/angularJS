<?php

namespace app\classes;

class toJson{
	
	private $dataArray = array();
		
	public function multipleJson($returnedData){
		foreach ($returnedData as $data):
			array_push($this->dataArray, $data->to_array());
		endforeach;
		return json_encode($this->dataArray);
	}

	public function simpleJson($returnedData){
		return json_encode($returnedData->to_array());
	}

}