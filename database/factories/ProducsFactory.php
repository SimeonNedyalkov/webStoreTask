<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Database\Seeders\ProducsSeeder;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producs>
 */
class ProducsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>fake()->name(),
            'description'=>fake()->realText(),
            'price'=>fake()->randomFloat(2, 10, 500),
            'categorie'=>fake()->word(),
            'created_by' => 1,
            'updated_by' => 1,
            'imagePath' => fake()->imageUrl(),
        ];
    }
}
