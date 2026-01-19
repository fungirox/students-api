<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * Students 𐙚 ‧₊˚ ⋅
 */

Route::get('/students', function (){
    // Read : show list 
    return "show list of students (´▽`ʃ♡ƪ)";
});
Route::get('/students/show/{id}', function (){
    // Read : show element
    return "show one student (＠＾０＾)";
});
Route::get('/students/create', function (){ // 
    // Create : Form
    return "form create student";
});
Route::post('/students', function (Request $request){
    // Create : Store

});
Route::get('students/edit/{id}', function () { // 
    // Edit : Form
    return "form edit student";
});
Route::put('students/{id}', function (Request $request){
    // Edit : put

});
Route::patch('students/{id}', function (Request $request){
    // Edit : patch
    
});
Route::delete('students/{id}', function (){
    // Edit : put

});

/**
 * Phone ₊˚⊹ ᰔ
 */
Route::get('/phone', function (){
    // Read : show list 
    return "show list of phones (´▽`ʃ♡ƪ)";
});
Route::get('/phone/show/{id}', function (){
    // Read : show element
    return "show one phone (＠＾０＾)";
});
Route::get('/phone/create', function (){ // 
    // Create : Form
    return "form create phone";
});
Route::post('/phone', function (Request $request){
    // Create : Store

});
Route::get('phone/edit/{id}', function () { // 
    // Edit : Form
    return "form edit phone";
});
Route::put('phone/{id}', function (Request $request){
    // Edit : put

});
Route::patch('phone/{id}', function (Request $request){
    // Edit : patch
    
});
Route::delete('phone/{id}', function (){
    // Edit : put

});


/**
 * Email ₊˚⊹ ᰔ
 */
Route::get('/email', function (){
    // Read : show list 
    return "show list of email (´▽`ʃ♡ƪ)";
});
Route::get('/email/show/{id}', function (){
    // Read : show element
    return "show one email (＠＾０＾)";
});
Route::get('/email/create', function (){ // 
    // Create : Form
    return "form create email";
});
Route::post('/email', function (Request $request){
    // Create : Store

});
Route::get('email/edit/{id}', function () { // 
    // Edit : Form
    return "form edit email";
});
Route::put('email/{id}', function (Request $request){
    // Edit : put

});
Route::patch('email/{id}', function (Request $request){
    // Edit : patch
    
});
Route::delete('email/{id}', function (){
    // Edit : put

});


/**
 * Address ₊˚⊹ ᰔ
 */
Route::get('/address', function (){
    // Read : show list 
    return "show list of address (´▽`ʃ♡ƪ)";
});
Route::get('/address/show/{id}', function (){
    // Read : show element
    return "show one student (＠＾０＾)";
});
Route::get('/address/create', function (){ // 
    // Create : Form
    return "form create student";
});
Route::post('/address', function (Request $request){
    // Create : Store

});
Route::get('address/edit/{id}', function () { // 
    // Edit : Form
    return "form edit student";
});
Route::put('address/{id}', function (Request $request){
    // Edit : put

});
Route::patch('address/{id}', function (Request $request){
    // Edit : patch
    
});
Route::delete('address/{id}', function (){
    // Edit : put

});


// Routes