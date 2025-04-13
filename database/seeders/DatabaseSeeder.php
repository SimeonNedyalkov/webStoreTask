<?php

namespace Database\Seeders;

use App\Models\Producs;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            "id"=>"1",
            'name' => 'sami',
            'email' => 'sami@gmail.com',
            "password"=>bcrypt('123456ww')
        ]);
        // Producs::factory()->count(30)->create(); 
        $this->call([
            CategoriesSeeder::class,
            ProducsSeeder::class,
        ]);
    }
}
