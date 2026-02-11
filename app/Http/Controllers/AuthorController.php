<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return AuthorResource::collection(Author::all());
    }

    public function store(StoreAuthorRequest $request)
    {
        $author = Author::create($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function update(StoreAuthorRequest $request, Author $author)
    {
        $author->update($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function destroy(Author $author)
    {
        if ($author->books()->exists()) {
            return response()->json([
                'success' => false,
                'message' => 'Cannot delete author. They have associated books.'
            ], 422);
        }

        $author->delete();

        return response()->json([
            'success' => true,
            'message' => 'Author deleted successfully.'
        ]);
    }
}
