<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 't-shirts',
                'description' => 'Categorie that shows only Tshirts',
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'shoes',
                'description' => 'Categorie that shows only Shoes',
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'jackets',
                'description' => 'Categorie that shows only Jackets',
                'created_by' => 1,
                'updated_by' => 1,
            ],
            [
                'name' => 'gloves',
                'description' => 'Categorie that shows only Gloves',
                'created_by' => 1,
                'updated_by' => 1,
            ],
        ];
            foreach ($categories as $categorie) {
                Categories::create($categorie);
            }
    }
}
