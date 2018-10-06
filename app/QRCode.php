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

    public function setRedirectAttribute($value) {
        $url = '@(http)?(s)?(://)?(([a-zA-Z])([-\w]+\.)+([^\s\.]+[^\s]*)+[^,.\s])@';
        $this->attributes['redirect'] =  preg_replace($url, 'http$2://$4', $value);
    }
}
