<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Book::factory()->count(50)->create()->each(function ($book)
        {
            // Attach 1-3 random authors to each book
            $book->authors()->attach(
                Author::inRandomOrder()->limit(rand(1, 3))->pluck('id')
            );
        });
    }
}
