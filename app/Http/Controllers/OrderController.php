<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function checkout($user)
    {
        return Inertia::render('Orders/Checkout', [
            'user' => $user
        ]);
    }

    public function store(Request $request, $user)
    {
        try {
            Log::info('Order submission started', ['request' => $request->all(), 'user' => $user]);

            if (!$request->has('cart') || !is_array($request->cart) || empty($request->cart)) {
                throw ValidationException::withMessages([
                    'cart' => ['The cart field is required and must not be empty.']
                ]);
            }

            $validated = $request->validate([
                'customer_name' => 'required|string|max:255',
                'customer_email' => 'required|email|max:255',
                'customer_phone' => 'required|string|max:20',
                'customer_address' => 'required|string|max:500',
                'cart' => 'required|array|min:1',
                'cart.*.id' => 'required|exists:products,id',
                'cart.*.quantity' => 'required|integer|min:1',
                'cart.*.price' => 'required|numeric|min:0',
            ]);

            Log::info('Order validation passed', ['validated' => $validated]);

            // Calculate total amount
            $totalAmount = collect($validated['cart'])->sum(function ($item) {
                return $item['quantity'] * $item['price'];
            });

            Log::info('Total amount calculated', ['total' => $totalAmount]);

            // Create order
            $order = Order::create([
                'user_id' => $user,
                'customer_name' => $validated['customer_name'],
                'customer_email' => $validated['customer_email'],
                'customer_phone' => $validated['customer_phone'],
                'customer_address' => $validated['customer_address'],
                'total_amount' => $totalAmount,
                'status' => 'pending',
            ]);

            Log::info('Order created', ['order' => $order->toArray()]);

            // Create order items
            foreach ($validated['cart'] as $item) {
                $order->items()->create([
                    'product_id' => $item['id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);
            }

            Log::info('Order items created', ['items' => $order->items->toArray()]);

            // Save order details to file
            $orderDetails = [
                'order' => $order->toArray(),
                'items' => $order->items->toArray(),
                'timestamp' => now()->toIso8601String(),
            ];

            $filename = 'order_' . $order->id . '_' . time() . '.json';
            $path = storage_path('app/public/orders/' . $filename);
            
            if (!file_exists(storage_path('app/public/orders'))) {
                mkdir(storage_path('app/public/orders'), 0755, true);
            }

            file_put_contents($path, json_encode($orderDetails, JSON_PRETTY_PRINT));
            Log::info('Order details saved to file', ['path' => $path]);

            return redirect()->route('dashboard.users.orders.success', ['user' => $user, 'order' => $order])
                ->with('success', 'Order placed successfully!');

        } catch (ValidationException $e) {
            Log::error('Order validation failed', [
                'errors' => $e->errors(),
                'request' => $request->all()
            ]);

            return back()->withErrors($e->errors())
                ->withInput();

        } catch (\Exception $e) {
            Log::error('Order submission failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'request' => $request->all()
            ]);

            return back()->withErrors(['error' => 'Failed to place order. Please try again.'])
                ->withInput();
        }
    }

    public function success($user, Order $order)
    {
        return Inertia::render('Orders/Success', [
            'order' => $order->load('items.product'),
            'user' => $user
        ]);
    }
} 