<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LaravelQRCode\Facades\QRCode as QRCodeRenderer;

class QRCodeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function new()
    {
        return QRCodeRenderer::text('Test link')->svg();
    }
}
