<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::first();

        $categories = [
            [
                'name' => 'Electronics',
                'description' => 'Electronic devices and accessories',
            ],
            [
                'name' => 'Clothing',
                'description' => 'Fashion items and accessories',
            ],
            [
                'name' => 'Books',
                'description' => 'Books and educational materials',
            ],
        ];

        foreach ($categories as $category) {
            Category::create([
                ...$category,
                'created_by' => $admin->id,
                'updated_by' => $admin->id,
            ]);
        }
    }
} 