<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['category', 'createdBy', 'updatedBy'])
            ->latest()
            ->paginate(10);

        return Inertia::render('Products/Index', [
            'products' => ProductResource::collection($products),
            'auth' => [
                'user' => Auth::user()
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image_path' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $product = Product::create([
            ...$validated,
            'created_by' => Auth::id(),
            'updated_by' => Auth::id(),
        ]);

        return redirect()->route('products.index')
            ->with('success', 'Product created successfully.');
    }

    public function show(Product $product)
    {
        $product->load(['category', 'createdBy', 'updatedBy']);
        
        return Inertia::render('Products/Show', [
            'product' => new ProductResource($product)
        ]);
    }

    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', [
            'product' => new ProductResource($product)
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'image_path' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $product->update([
            ...$validated,
            'updated_by' => Auth::id(),
        ]);

        return redirect()->route('products.index')
            ->with('success', 'Product updated successfully.');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('products.index')
            ->with('success', 'Product deleted successfully.');
    }
} 