<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Models\Putovanje;
=======
>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004
use Illuminate\Http\Request;

class PutovanjeController extends Controller
{
<<<<<<< HEAD
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $putovanja = Putovanje::all();
        return response()->json($putovanja);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $putovanje = new Putovanje();
        $putovanje->destinacija = $request->destinacija;
        $putovanje->datumPolaska = $request->datumPolaska;
        $putovanje->datumDolaska = $request->datumDolaska;

        $putovanje->save();

        //return redirect()->with('success','Putovanje uspesno kreirano');
    }

    /**
     * Display the specified resource.
     */
    public function show(Putovanje $putovanje)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Putovanje $putovanje)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Putovanje $putovanje)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $putovanje=Putovanje::find($id);
        $putovanje->delete();
    }
=======
    //
>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004
}
