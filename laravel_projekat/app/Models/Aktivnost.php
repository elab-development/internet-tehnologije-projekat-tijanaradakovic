<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aktivnost extends Model
{
    use HasFactory;
    protected $fillable = [
        'naziv',
        'lokacija',
        'tip',
        
         
    ];

    public function plan()
    {
        return $this->hasMany(Plan::class);
    }
    
}
