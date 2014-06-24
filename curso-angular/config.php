<?php
session_start();
ini_set('display_errors', 1);

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
require ROOT.'vendor/autoload.php';
require ROOT.'autoload.php';
require ROOT.'connection.php';

$app = new \Slim\Slim();