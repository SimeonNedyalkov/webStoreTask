<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Clothing',
                'description' => 'All types of clothing items',
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'Footwear',
                'description' => 'All types of shoes and footwear',
                'created_by' => 1,
                'updated_by' => 1,
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
} 