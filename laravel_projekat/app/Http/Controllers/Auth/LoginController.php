<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    public function register(Request $request)
    {

    }
    public function login(Request $request)

    {
        
        // if(!Auth::attempt($request->only('email','password')))
        // {
        //     return response()->json(['message'=>'Unauthorized']);
        // }
        // $user = User::where('email',$request['email'])->firstOrFail();

        // return response()->json(['message'=>'Uspesno ste se prijavili']);
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password],$request->remember)){
            return redirect()->intended(route('admin.dashboard'));
        }

        return redirect()->back()->withInput($request->only('email','remember'));
    

    }
}
