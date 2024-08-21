<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Putovanje extends Model
{
    use HasFactory;
    protected $fillable = [
        'destinacija',
        'datumPolaska',
        'datumDolaska',
        
    ];
    public function plans()
    {
        return $this->hasMany(Plan::class);
    }
}

