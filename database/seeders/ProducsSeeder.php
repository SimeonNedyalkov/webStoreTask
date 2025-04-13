<?php

namespace Database\Seeders;

use App\Models\Producs;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProducsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Red T-Shirt',
                'description' => 'A vibrant red t-shirt made of 100% cotton.',
                'price' => 19.99,
                'category_id' => 1,
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/red-t-shirt-free-png.webp',
            ],
            [
                'name' => 'Black T-Shirt',
                'description' => 'A vibrant black t-shirt made of 100% cotton.',
                'price' => 29.99,
                'category_id' => 1,
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/T-shirts__Ts007_Suitsupply_Online_Store_1.jpg',
            ],
            [
                'name' => 'Orange Shoes',
                'description' => 'Bright and stylish orange shoes perfect for casual wear.',
                'price' => 59.99,
                'category_id' => 2,
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/R.png',
            ],
           
            [
                'name' => 'Blue Pink Shoes',
                'description' => 'Trendy blue and pink shoes combining style and comfort.',
                'price' => 64.99,
                'category_id' => 2,
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/OIP.jfif',
            ],
            // [
            //     'name' => 'Notebook',
            //     'description' => 'Lined notebook for notes and journaling.',
            //     'price' => 5.99,
            //     'categorie' => 'Stationery',
            //     'created_by' => 1,
            //     'updated_by' => 1,
            //     'imagePath' => 'products/notebook.jpg',
            // ],
            // [
            //     'name' => 'Headphones',
            //     'description' => 'Noise-canceling over-ear headphones.',
            //     'price' => 99.99,
            //     'categorie' => 'Electronics',
            //     'created_by' => 1,
            //     'updated_by' => 1,
            //     'imagePath' => 'products/headphones.jpg',
            // ],
            // [
            //     'name' => 'Sneakers',
            //     'description' => 'Comfortable everyday sneakers.',
            //     'price' => 59.99,
            //     'categorie' => 'Footwear',
            //     'created_by' => 1,
            //     'updated_by' => 1,
            //     'imagePath' => 'products/sneakers.jpg',
            // ],
            // [
            //     'name' => 'Backpack',
            //     'description' => 'Durable backpack with laptop compartment.',
            //     'price' => 39.99,
            //     'categorie' => 'Accessories',
            //     'created_by' => 1,
            //     'updated_by' => 1,
            //     'imagePath' => 'products/backpack.jpg',
            // ],
            // [
            //     'name' => 'Smartwatch',
            //     'description' => 'Track your fitness and receive notifications.',
            //     'price' => 129.99,
            //     'categorie' => 'Electronics',
            //     'created_by' => 1,
            //     'updated_by' => 1,
            //     'imagePath' => 'products/smartwatch.jpg',
            // ],
        ];

        foreach ($products as $product) {
            Producs::create($product);
        }
    }
}
