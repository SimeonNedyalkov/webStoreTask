<?php

namespace App\Http\Controllers;

use App\Models\Producs;
use App\Http\Requests\StoreProducsRequest;
use App\Http\Requests\UpdateProducsRequest;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Producs::query();
        $products = $query->paginate(10)->onEachSide(1);
        return inertia('Products/Index',[]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProducsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Producs $producs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producs $producs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProducsRequest $request, Producs $producs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producs $producs)
    {
        //
    }
}
