<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'products' => \App\Http\Resources\ProductsResource::collection(\App\Models\Product::with('category')->get())->resolve()
    ]);
});

Route::get('/products', [ProductsController::class, 'index'])->name('products.index');

Route::middleware(['auth','verified'])->group(function(){
    Route::get('/dashboard', fn()=>Inertia::render('Dashboard'))->name('dashboard');
    Route::prefix('dashboard')->name('dashboard.')->group(function() {
        Route::resource('categories', CategoryController::class);
        Route::resource('products', ProductsController::class);
        Route::get('users/{user}/checkout', [OrderController::class, 'checkout'])->name('users.checkout');
        Route::post('users/{user}/orders', [OrderController::class, 'store'])->name('users.orders.store');
        Route::get('users/{user}/orders/{order}/success', [OrderController::class, 'success'])->name('users.orders.success');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
