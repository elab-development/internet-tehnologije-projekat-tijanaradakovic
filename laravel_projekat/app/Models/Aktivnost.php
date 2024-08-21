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

<<<<<<< HEAD
    public function plans()
    {
        return $this->belongsToMany(Plan::class);
    }
    public function putovanjes()
    {
        return $this->belongsTo(Putovanje::class);
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
=======
    public function plan()
    {
        return $this->hasMany(Plan::class);
    }
    
>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004
}
