<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $filable =[
        'dan',
        'aktivnost',
    ];

    public function aktivnost()
    {
        return $this->belongsTo(Aktivnost::class);
        
        
    }
}
