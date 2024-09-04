<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $fillable =[
        'dan',
        //'aktivnost',
    ];

    public function activities()
    {
        return $this->belongsToMany(Activity::class,'plan_activity');
        
        
    }
    public function trips()
    {
        return $this->belongsTo(Trip::class);
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
