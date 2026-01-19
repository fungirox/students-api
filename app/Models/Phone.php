<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    protected $table = 'phone';

    protected $fillable = [
        'phone',
        'phone_type',
        'contry_code',
        'area_code',
        'student_id'
    ];
}
