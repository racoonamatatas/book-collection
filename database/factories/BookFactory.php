<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Faker\Provider\BookProvider;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Register custom faker provider.
        $this->faker->addProvider(new BookProvider($this->faker));

        return [
            'title' => $this->faker->title(),
            'summary' => $this->faker->paragraph(),
            'isbn' => $this->faker->ISBN(),
        ];
    }
}
