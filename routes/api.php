<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function() {
    if (Auth::check()) {
        return request()->user();
    }
    return response('Not logged in', 200);
});

Route::resource('codes', 'QRCodeController');

