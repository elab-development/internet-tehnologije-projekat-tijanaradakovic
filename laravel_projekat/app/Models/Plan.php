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

<<<<<<< HEAD
    public function aktivnosts()
    {
        return $this->hasMany(Aktivnost::class);
        
        
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
=======
    public function aktivnost()
    {
        return $this->belongsTo(Aktivnost::class);
        
        
    }
>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004
}
