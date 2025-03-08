<?php
// created by BcInstaller
return [
    'Datasources.default' => [
        'className' => 'Cake\\Database\\Connection',
        'driver' => 'Cake\\Database\\Driver\\Mysql',
        'host' => 'cu-db',
        'port' => '3306',
        'username' => 'root',
        'password' => 'root',
        'database' => 'baser-astro',
        'prefix' => '',
        'schema' => '',
        'encoding' => 'utf8mb4',
        'persistent' => '',
        'log' => filter_var(env('SQL_LOG', false), FILTER_VALIDATE_BOOLEAN)
    ],
    'Datasources.test' => [
        'className' => 'Cake\\Database\\Connection',
        'driver' => 'Cake\\Database\\Driver\\Mysql',
        'host' => 'cu-db',
        'port' => '3306',
        'username' => 'root',
        'password' => 'root',
        'database' => 'test_baser-astro',
        'prefix' => '',
        'schema' => '',
        'encoding' => 'utf8mb4',
        'persistent' => '',
        'log' => filter_var(env('SQL_LOG', false), FILTER_VALIDATE_BOOLEAN)
    ]
];