<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TravelPlan extends Model
{
    use HasFactory;
    protected $fillable = [
        'destination',
        'start_date',
        'end_date',

        
    ];
    public function daily_plans()
    {
        return $this->hasMany(DailyPlan::class);
    }
    public function users(){
        return $this->belogsTo(User::class);
    }
}

