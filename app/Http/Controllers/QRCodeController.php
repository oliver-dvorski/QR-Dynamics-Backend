<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QRCodeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function new()
    {
        return 'tets-link';
    }
}
