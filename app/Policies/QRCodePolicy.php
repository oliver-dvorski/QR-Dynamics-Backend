<?php

namespace App\Policies;

use Auth;
use App\User;
use App\QRCode;
use Illuminate\Auth\Access\HandlesAuthorization;

class QRCodePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the q r code.
     *
     * @param  \App\User  $user
     * @param  \App\QRCode  $qRCode
     * @return mixed
     */
    public function update(User $user, QRCode $qRCode)
    {
        return $qRCode->user_id === $user->id;
    }
}
