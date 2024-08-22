<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{

    
    
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'email'=>'required|string|email|max:255|unique:users',
            'password'=> 'required|string|min:8',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }
        //dd($request->all());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        
        if (method_exists($user, 'createToken')) {
            $token = $user->createToken('auth_token')->plainTextToken;
        } else {
            return response()->json(['message' => 'Method createToken not found'], 500);
        }
       // $token =$user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => 'Korisnik uspesno registrovan','data'=>$user,'token'=>$token,'password'=>$request->password]);

    }
    public function login(Request $request)

    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        if(!Auth::attempt($request->only('email','password')))
        {
            return response()->json(['message'=>'Unauthorized']);
        }
        $user = User::where('email',$request['email'])->firstOrFail();

        $token =$user->createToken('auth_token')->plainTextToken;


        return response()->json(['message'=>'Uspesno ste se prijavili']);
       
    

    }
}
