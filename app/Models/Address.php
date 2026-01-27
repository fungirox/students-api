<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = 'address';

    public $timestamps = false;

    protected $fillable = [
        'address_line',
        'city',
        'state',
        'zip_postcode',
        'student_id'
    ];
}
