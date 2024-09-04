<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{

    use HasFactory;
    protected $table = 'activities';
    protected $fillable = [
        'naziv',
        'lokacija',
        'tip',
        
         
    ];

    public function plans()
    {
        return $this->belongsToMany(Plan::class,'plan_activity');
    }
    
    
}
