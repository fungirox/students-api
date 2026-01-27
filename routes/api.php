<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\api\StudentController;
use App\Http\Controllers\api\EmailController;
use App\Http\Controllers\api\PhoneController;
use App\Http\Controllers\api\AddressController;

/** R O U T E S
 * Students 𐙚 ‧₊˚ ⋅
 */

// Read : show list 
Route::get('/students', [StudentController::class, 'index']); 
// Read : show total 
Route::get('/students/total', [StudentController::class, 'totalStudents']); 
// Read : show element
Route::get('/students/show/{id}', [StudentController::class, 'show']); 
// Create : Store
Route::post('/students', [StudentController::class, 'store']); 
// Update : put
Route::put('students/{id}', [StudentController::class, 'update']); 
// Update : patch
Route::patch('students/{id}', [StudentController::class, 'update_partial']); 
// Delete
Route::delete('students/{id}', [StudentController::class, 'delete']); 

/**
 * Phone ₊˚⊹ ᰔ
 */

// Read : show list 
Route::get('/phone', [PhoneController::class, 'index']);
// Read : show item
Route::get('/phone/show/{id}', [PhoneController::class, 'show']);
// Create : Store
Route::post('/phone', [PhoneController::class, 'store']);
// Update : put
Route::put('phone/{id}', [PhoneController::class, 'update']);
// Update : patch
Route::patch('phone/{id}', [PhoneController::class, 'update_partial']);
// Delete
Route::delete('phone/{id}', [PhoneController::class, 'delete']);

/**
 * Email ₊˚⊹ ᰔ
 */

// Read : show list
Route::get('/email', [EmailController::class, 'index']);
// Read : show item
Route::get('/email/show/{id}', [EmailController::class, 'show']);
// Create : Store
Route::post('/email', [EmailController::class, 'store']);
// Update : put
Route::put('email/{id}', [EmailController::class, 'update']);
// Update : patch
Route::patch('email/{id}', [EmailController::class, 'update_partial']);
// Delete
Route::delete('email/{id}', [EmailController::class, 'delete']);

/**
 * Address ₊˚⊹ ᰔ
 */

// Read : show list 
Route::get('/address', [AddressController::class, 'index']);
// Read : show item
Route::get('/address/show/{id}', [AddressController::class, 'show']);
// Create : Store
Route::post('/address', [AddressController::class, 'store']);
// Update : put
Route::put('address/{id}', [AddressController::class, 'update']);
// Update : patch
Route::patch('address/{id}', [AddressController::class, 'update_partial']);
// Delete
Route::delete('address/{id}', [AddressController::class, 'delete']);
