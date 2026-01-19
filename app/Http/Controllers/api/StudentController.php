<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index() { // get
        return "show list of students (´▽`ʃ♡ƪ)";
    }

    public function show() { // get { id } 
        return "show one student (＠＾０＾)";
    }

    public function store() { // post
        
    }

    public function update() { // put
        
    }

    public function update_partial(){ // patch

    }

    public function delete() { // delete

    }
}
