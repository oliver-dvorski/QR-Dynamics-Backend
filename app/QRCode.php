<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QRCode extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'description',
        'redirect',
        'link',
    ];
}
