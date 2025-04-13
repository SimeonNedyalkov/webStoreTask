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
                'categorie' => 'Clothing',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/red-tshirt.jpg',
            ],
            [
                'name' => 'Blue Jeans',
                'description' => 'Classic blue denim jeans with a comfortable fit.',
                'price' => 49.99,
                'categorie' => 'Clothing',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/blue-jeans.jpg',
            ],
            [
                'name' => 'Wireless Mouse',
                'description' => 'Ergonomic wireless mouse with long battery life.',
                'price' => 25.50,
                'categorie' => 'Electronics',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/wireless-mouse.jpg',
            ],
            [
                'name' => 'Gaming Keyboard',
                'description' => 'Mechanical keyboard with customizable RGB lighting.',
                'price' => 79.00,
                'categorie' => 'Electronics',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/gaming-keyboard.jpg',
            ],
            [
                'name' => 'Coffee Mug',
                'description' => 'Ceramic coffee mug with a cool design.',
                'price' => 9.99,
                'categorie' => 'Home',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/coffee-mug.jpg',
            ],
            [
                'name' => 'Notebook',
                'description' => 'Lined notebook for notes and journaling.',
                'price' => 5.99,
                'categorie' => 'Stationery',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/notebook.jpg',
            ],
            [
                'name' => 'Headphones',
                'description' => 'Noise-canceling over-ear headphones.',
                'price' => 99.99,
                'categorie' => 'Electronics',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/headphones.jpg',
            ],
            [
                'name' => 'Sneakers',
                'description' => 'Comfortable everyday sneakers.',
                'price' => 59.99,
                'categorie' => 'Footwear',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/sneakers.jpg',
            ],
            [
                'name' => 'Backpack',
                'description' => 'Durable backpack with laptop compartment.',
                'price' => 39.99,
                'categorie' => 'Accessories',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/backpack.jpg',
            ],
            [
                'name' => 'Smartwatch',
                'description' => 'Track your fitness and receive notifications.',
                'price' => 129.99,
                'categorie' => 'Electronics',
                'created_by' => 1,
                'updated_by' => 1,
                'imagePath' => 'products/smartwatch.jpg',
            ],
        ];

        foreach ($products as $product) {
            Producs::create($product);
        }
    }
}
