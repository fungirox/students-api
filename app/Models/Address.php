<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = 'address';

    protected $fillable = [
        'address_line',
        'city',
        'zip_postcode',
        'student_id'
    ];
}
