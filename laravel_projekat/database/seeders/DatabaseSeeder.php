<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Activity;
use App\Models\Plan;
use App\Models\Trip;
use Carbon\Carbon;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        User::factory(10)->create();
        $akt = Activity::create(['naziv'=>'Obilazak Koloseuma','destinacija'=>'Rim','tip'=>'kultura']);
        $akt2 = Activity::create(['naziv'=>'zurka u Rimu','destinacija'=>'Rim','tip'=>'zabava']);
        $akt3 = Activity::create(['naziv'=>'Vatikan','destinacija'=>'Rim','tip'=>'kultura']);
        $putovanje = Trip::create(['destinacija'=>'Rim','datumPolaska' => Carbon::createFromFormat('d.m.Y', '23.04.2025'),
     'datumDolaska' => Carbon::createFromFormat('d.m.Y', '30.04.2025')]);
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        // $this->call(PutovanjeSeeder::class);
        // $this->call(PlanSeeder::class);
       //  $this->call(AktivnostSeeder::class);


    }
}
