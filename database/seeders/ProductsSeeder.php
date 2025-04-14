<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure the storage directory exists
        if (!Storage::disk('public')->exists('products')) {
            Storage::disk('public')->makeDirectory('products');
        }

        // Copy seed images to storage
        $seedImagesPath = database_path('seeders/images/products');
        $files = [
            'red-t-shirt-free-png.webp',
            'T-shirts__Ts007_Suitsupply_Online_Store_1.jpg',
            'R.png',
            'OIP.jfif'
        ];

        foreach ($files as $file) {
            $sourcePath = $seedImagesPath . '/' . $file;
            $targetPath = 'products/' . $file;
            
            Log::info('Copying image', [
                'source' => $sourcePath,
                'target' => $targetPath,
                'exists' => File::exists($sourcePath)
            ]);

            if (File::exists($sourcePath)) {
                $contents = File::get($sourcePath);
                Storage::disk('public')->put($targetPath, $contents);
                
                Log::info('Image copied successfully', [
                    'file' => $file,
                    'stored' => Storage::disk('public')->exists($targetPath)
                ]);
            } else {
                Log::error('Image file not found', ['file' => $file]);
            }
        }

        $products = [
            [
                'name' => 'Red T-Shirt',
                'description' => 'A vibrant red t-shirt made of 100% cotton.',
                'price' => 19.99,
                'category_id' => 1,
                'created_by' => 1,
                'updated_by' => 1,
                'image_path' => 'products/red-t-shirt-free-png.webp',
            ],
            [
                'name' => 'Black T-Shirt',
                'description' => 'A vibrant black t-shirt made of 100% cotton.',
                'price' => 29.99,
                'category_id' => 1,
                'created_by' => 1,
                'updated_by' => 1,
                'image_path' => 'products/T-shirts__Ts007_Suitsupply_Online_Store_1.jpg',
            ],
            [
                'name' => 'Orange Shoes',
                'description' => 'Bright and stylish orange shoes perfect for casual wear.',
                'price' => 59.99,
                'category_id' => 2,
                'created_by' => 1,
                'updated_by' => 1,
                'image_path' => 'products/R.png',
            ],
            [
                'name' => 'Blue Pink Shoes',
                'description' => 'Trendy blue and pink shoes combining style and comfort.',
                'price' => 64.99,
                'category_id' => 2,
                'created_by' => 1,
                'updated_by' => 1,
                'image_path' => 'products/OIP.jfif',
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
            Product::create($product);
        }
    }
}
