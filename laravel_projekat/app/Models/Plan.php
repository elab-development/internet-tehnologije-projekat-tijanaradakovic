<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $fillable =[
        'dan',
        'aktivnost',
    ];

    public function aktivnosts()
    {
        return $this->hasMany(Aktivnost::class);
        
        
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
