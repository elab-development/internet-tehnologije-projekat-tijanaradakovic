<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Aktivnost;
use App\Models\Plan;
use App\Models\Putovanje;
use Carbon\Carbon;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        User::factory(10)->create();
      //  $akt = Aktivnost::create(['naziv'=>'Obilazak Koloseuma','lokacija'=>'Rim','tip'=>'kultura']);
        //$akt2 = Aktivnost::create(['naziv'=>'zurka u Rimu','lokacija'=>'Rim','tip'=>'zabava']);
        //$akt3 = Aktivnost::create(['naziv'=>'Vatikan','Lokacija'=>'Rim','tip'=>'kultura']);
        $put = Putovanje:: create(['destinacija'=>'Rim','datumPolaska' => Carbon::createFromFormat('d.m.Y', '23.04.2025'),
    'datumDolaska' => Carbon::createFromFormat('d.m.Y', '30.04.2025')]);
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        //$this->call(PutovanjeSeeder::class);
        //$this->call(PlanSeeder::class);
       // $this->call(AktivnostSeeder::class);


    }
}
