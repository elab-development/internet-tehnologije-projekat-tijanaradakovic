<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DailyPlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'day'=>$this->day,
            'description'=>$this->destination,
            'activity'=>$this->start_date,
            'travel'=>new TravelPlanResource($this->whenLoaded('travel_plans')),
            
        ];
    }
}
