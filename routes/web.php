<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'api', 'middleware' => ['api', 'throttle:80,1']], function() {
    Route::get('/user', function() {
        if (Auth::check()) {
            return request()->user();
        }
        return response('Not logged in', 200);
    });

    Route::get('/codes', 'QRCodeController@index');
    Route::post('/codes', 'QRCodeController@new');
    Route::patch('/codes/{code}', 'QRCodeController@update');
    Route::delete('/codes/{code}', 'QRCodeController@delete');

    Route::get('/user/{user}/temp-code', 'QRCodeController@tempCode');
});

// Auth::routes();

Route::get('login/github', 'Auth\LoginController@redirectToProvider');
Route::get('login/github/callback', 'Auth\LoginController@handleProviderCallback');


