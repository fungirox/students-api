<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    protected $table = 'email';

    protected $fillable = [
        'email',
        'email_type',
        'student_id'
    ];
}
