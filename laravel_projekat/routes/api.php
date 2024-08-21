<<<<<<< HEAD
=======


>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
<<<<<<< HEAD
use App\Http\Controllers\UserController;
use App\Http\Controllers\PutovanjeController; 
use App\Http\Controllers\AktivnostController; 
use App\Http\Controllers\PlanController; 

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', [UserController::class,'index']); //uradjeno
Route::get('/putovanjes', [PutovanjeController::class,'index']); //uradjeno
//Route::get('/aktivnosts', [AktivnostController::class,'index']);
Route::get('/plans', [PlanController::class,'index']); //uradjeno

Route::resource('aktivnosts',AktivnostController::class);

Route::post('login',[LoginController::class,'login']);

Route::post('putovanje',[PutovanjeController::class,'store']); //uradjeno
Route::put('plan/{plan}',[PlanController::class,'update']);
Route::delete('/putovanje/{id}',[PutovanjeController::class,'destroy']); 


//REST API
=======



>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004




<<<<<<< HEAD
=======
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004
