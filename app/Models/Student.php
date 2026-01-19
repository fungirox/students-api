<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'student';

    protected $fillable = [
        'last_name',
        'middle_name',
        'first_name',
        'gender'
    ];
}
