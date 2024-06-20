<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aktivnost extends Model
{
    use HasFactory;
    protected $filable = [
        'naziv',
        'lokacija',
        'tip',
        'opis',
        'cenaAktivnosti',
    ];
}
