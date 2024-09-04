<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PutovanjeController; 
use App\Http\Controllers\AktivnostController; 
use App\Http\Controllers\PlanController; 
use App\Http\Controllers\Auth\LoginController; 
 

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', [UserController::class,'index']); //uradjeno
Route::get('/users/{id}', [UserController::class,'show']); //uradjeno
Route::get('/putovanje', [PutovanjeController::class,'index']); //uradjeno
//Route::get('/aktivnosts', [AktivnostController::class,'index']);
//Route::get('/plan', [PlanController::class,'index']); //uradjeno

Route::resource('aktivnost',AktivnostController::class)->only('show','index');
Route::post('register',[LoginController::class,'register']);

Route::post('login',[LoginController::class,'login']); //uradjeno
Route::group(['middleware'=>['auth:sanctum']],function (){
    Route::get('/profile', function (Request $request){
        return auth()->user();
    });
    Route::post('putovanje',[PutovanjeController::class,'store']); //uradjeno
    //Route::put('plan/{plan}',[PlanController::class,'update']);
    Route::delete('/putovanje/{id}',[PutovanjeController::class,'destroy']);  //uradjeno
    Route::resource('aktivnost',AktivnostController::class)->only('destroy','store');

    Route::post('logout',[LoginController::class,'logout']);

});



//REST API

Route::get('/plans',[PlanController::class,'index']);
Route::get('/plans/{id}',[PlanController::class,'show']);
Route::post('/plans',[PlanController::class,'store']);
Route::put('/plans/{id}',[PlanController::class,'update']);
Route::delete('/plans/{id}',[PlanController::class,'destroy']);

