<?php

namespace App\Http\Controllers;

use App\QRCode;
use App\User;
use Illuminate\Http\Request;
use LaravelQRCode\Facades\QRCode as QRCodeRenderer;

class QRCodeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(User $user) {
        return $user->codes;
    }

    public function tempCode(User $user)
    {
        return QRCodeRenderer::text('Test link')->svg();
    }

    public function new(User $user)
    {
        request()->validate([
            'name'      => 'required',
            'redirect'  => 'required'
        ]);

        $qrCode = $user->codes()->create([
            'name'          => request()->name,
            'description'   => request()->description,
            'redirect'      => request()->redirect,
            'link'          => str_random(5),
        ]);

        return $qrCode;
    }

    public function update(User $user, QRCode $code) {
        $code->update(request()->all());
        return $code;
    }

    public function delete(USer $user, QRCode $code) {
        $code->delete();
        return $code;
    }
}
