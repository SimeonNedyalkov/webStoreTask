<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'sami',
            'email' => 'sami@gmail.com',
            'password' => bcrypt('123456ww')
        ]);
    }
} 