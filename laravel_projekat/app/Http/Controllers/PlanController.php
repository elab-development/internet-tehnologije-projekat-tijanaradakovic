<?php

namespace App\Http\Controllers;

use App\Models\Plan;
//use App\Models\Activity;
use App\Models\Activity;

use Illuminate\Http\Request;
//use App\Http\Controllers\Redirect;
use Illuminate\Support\Facades\Redirect;


class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plans = Plan::all();
        return $plans;
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
        
        $plan=new Plan;
        $plan->dan=$request->dan;
        $plan->user_id=$request->user_id;
        $randomActivities = Activity::inRandomOrder()->limit(1)->get();
        $plan->putovanje_id=$request->putovanje_id;
        $plan->save();
        $plan->activities()->saveMany($randomActivities);
        //$plan->aktivnost_id=$request->aktivnost_id;
        //$plan->putovanje_id=$request->putovanje_id;
        $plan->save();
    
        //return Redirect::back()->with('message','Operation Successful !');
        return response()->json(['message'=>'Uspesno']);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $plan =Plan::find($id);
        return $plan;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plan $plan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $plan = Plan::find($id);
        $plan->dan = $request->dan;
        $plan->putovanje_id= $request->putovanje_id;
        $plan->user_id= $request->user_id;
        $activityName=$request->naziv;

        $aktivnosti = Activity::all();
        
        foreach ($aktivnosti as $activity) {
            $exactivity = Activity::where('naziv',$activityName)->first();                

            if ($exactivity) {
                $existingActivityId = $exactivity->id;

                //$plan->activities()->save($exactivity);
                //$plan->activities()->syncWithoutDetaching($exactivity);
                //$plan->activities()->syncWithoutDetaching($exactivity);
                $plan->activities()->sync($exactivity);
                break;
                
               // response()->json(['message'=>"aktivnost promenjena!"]);
            } else {
               return response()->json(['message'=>"ta aktivnost ne postoji!"],401);
            }

                
            
           // }
    }
        $plan->save();
        return response()->json(['message'=>'Aktivnost uspesno promenjena']);


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $plan= Plan::find($id);
        $plan->delete();
        return response()->json(['message'=>'Uspesno ste obrisali!']);
    }
}
