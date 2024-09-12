<?php

namespace App\Http\Controllers;

use App\Models\DailyPlan;
use App\Models\TravelPlan;
//use App\Models\Activity;
use App\Models\Activity;

use Illuminate\Http\Request;
//use App\Http\Controllers\Redirect;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Http\Services\OpenAIService;


class DailyPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    protected $openAIService;

    public function __construct(OpenAIService $openAIService)
    {
        $this->openAIService = $openAIService;
    }
    public function index()
    {
        $plans = DB::table('daily_plans')
        ->join('activities','daily_plans.activity_id','=','activities.id')
        ->select('daily_plans.day')
        ->get();
        $activityList =Activity::select('id','name')->get();


        return compact('plans','activityList');
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
        
        $plan=new DailyPlan();
        $plan->day=$request->day;
        $plan->travel_plan_id=$request->travel_plan_id;
        $randomActivity = Activity::inRandomOrder()->limit(1)->first();
        $activityid = $randomActivity->id;
        $plan->description=$request->description;
        $plan->activity_id=$activityid;
        $plan->save();
    
        return response()->json(['message'=>'Plan is saved successfully!']);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $plan =DailyPlan::find($id);
        return response()->json($plan);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DailyPlan $plan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $plan = DailyPlan::findOrFail($id);
        $plan->day = $request->day;
        $plan->travel_plan_id= $request->travel_plan_id;
        $randomActivity = Activity::inRandomOrder()->limit(1)->first();
        $activityid = $randomActivity->id;
        $plan->activity_id=$activityid;       
        $plan->description=$request->description;


        $plan->save();
        return response()->json(['message'=>'Plan updated successfully!']);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $plan= DailyPlan::findOrFail($id);
        $plan->delete();
        return response()->json(['message'=>'Deleted plan!']);
    }
    public function generateTravelPlan(TravelPlan $travelPlan,$usersInput)
    {
        $generetedPlan = $this->OpenAIService->generateTravelPlan($usersInput);

    }
}
