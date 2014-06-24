<?php

function autoloader($classe){
	$path=str_replace('\\', '/', $classe);
	require $path.'.php';
}
spl_autoload_register('autoloader');