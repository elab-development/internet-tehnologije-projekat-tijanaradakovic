<?php

namespace App\Http\Controllers;

use App\Models\Putovanje;
use Illuminate\Http\Request;

class PutovanjeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $putovanja = Putovanja::all();
        return $putovanja;
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
        //
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
    public function destroy(Putovanje $putovanje)
    {
        //
    }
}
