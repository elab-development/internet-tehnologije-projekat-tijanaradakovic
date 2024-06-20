<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Putovanje extends Model
{
    use HasFactory;
    protected $filable = [
        'destinacija',
        'datumPolaska',
        'datumDolaska',
        'cena',
    ];
}
