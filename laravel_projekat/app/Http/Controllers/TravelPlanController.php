<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Auth;
use App\Models\TravelPlan;
use Illuminate\Http\Request;

class TravelPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $travels = TravelPlan::all();
        return response()->json($travels);
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
        $travel = new TravelPlan();
        //$travel->user_id=1;
        $travel->user_id= auth()->id();;
        $travel->destination = $request->destination;
        $travel->start_date = $request->start_date;
        $travel->end_date = $request->end_date;

        $travel->save();
        return response()->json(['message'=>'Travel saved successfully']);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $travel =TravelPlan::find($id);
        
        return response()->json($travel);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TravelPlan $putovanje)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $travel = TravelPlan::find($id);
        $travel->user_id=auth()->id();
        $travel->destination = $request->destination;
        $travel->start_date = $request->start_date;
        $travel->end_date = $request->end_date;

        $travel->save();
        return response()->json(['message'=>'Travel updated successfully!','data'=>$travel]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $travel=TravelPlan::find($id);
        $travel->delete();
        return response(['message'=>'Travel deleted successfully!']);
    }
    public function search(Request $request)
    {
        $searchTerm = $request->input('query');


        $travels = TravelPlan::where('destination', 'LIKE', "%{$searchTerm}%")->get();
        
        return response()->json(['message'=>'Uspesno','data'=>$travels]);
    }
}
