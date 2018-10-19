<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\User;
use Socialite;
use Google_Client;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->redirectTo = env('FRONTEND_URL') . '/web';
        $this->middleware('guest')->except('logout');
    }

    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback($provider)
    {
        $cloudUser = Socialite::driver($provider)->user();
        $localUser = User::where('email', $cloudUser->email)->first();

        if (!$localUser) {
            $localUser = User::create([
                'name' => $cloudUser->name,
                'email' => $cloudUser->email,
                'avatar' => $cloudUser->avatar,
                `{$provider}_id` => $cloudUser->id
            ]);
        }

        $localUser->{$provider . '_id'} = $cloudUser->id;
        $localUser->save();

        Auth::login($localUser);

        return redirect($this->redirectTo);
    }
}
