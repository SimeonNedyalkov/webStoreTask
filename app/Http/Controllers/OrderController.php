<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function checkout()
    {
        return Inertia::render('Orders/Checkout');
    }

    public function store(Request $request)
    {
        try {
            Log::info('Order submission started', ['request' => $request->all()]);

            $request->validate([
                'customer_name' => 'required|string|max:255',
                'customer_email' => 'required|email|max:255',
                'customer_phone' => 'required|string|max:20',
                'customer_address' => 'required|string',
                'cart' => 'required|array',
                'cart.*.id' => 'required|exists:products,id',
                'cart.*.quantity' => 'required|integer|min:1',
                'cart.*.price' => 'required|numeric|min:0',
            ]);

            $cart = $request->cart;
            Log::info('Cart contents', ['cart' => $cart]);
            
            if (empty($cart)) {
                Log::warning('Empty cart attempted checkout');
                return redirect()->back()->with('error', 'Your cart is empty');
            }

            $totalAmount = 0;
            foreach ($cart as $item) {
                $totalAmount += $item['price'] * $item['quantity'];
            }

            Log::info('Creating order', [
                'total_amount' => $totalAmount,
                'customer_name' => $request->customer_name
            ]);

            // Create order
            $order = Order::create([
                'customer_name' => $request->customer_name,
                'customer_email' => $request->customer_email,
                'customer_phone' => $request->customer_phone,
                'customer_address' => $request->customer_address,
                'total_amount' => $totalAmount,
                'status' => 'pending',
            ]);

            Log::info('Order created', ['order_id' => $order->id]);

            // Create order items
            foreach ($cart as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);
            }

            Log::info('Order items created');

            // Save order details to a file
            $orderData = [
                'order_id' => $order->id,
                'customer_name' => $order->customer_name,
                'customer_email' => $order->customer_email,
                'customer_phone' => $order->customer_phone,
                'customer_address' => $order->customer_address,
                'total_amount' => $order->total_amount,
                'items' => $order->items()->with('product')->get()->map(function ($item) {
                    return [
                        'product_name' => $item->product->name,
                        'quantity' => $item->quantity,
                        'price' => $item->price,
                        'subtotal' => $item->quantity * $item->price,
                    ];
                }),
                'created_at' => $order->created_at,
            ];

            // Ensure the orders directory exists
            Storage::makeDirectory('public/orders');

            // Save order details to a JSON file
            Storage::put(
                "public/orders/order_{$order->id}.json",
                json_encode($orderData, JSON_PRETTY_PRINT)
            );

            Log::info('Order file saved');

            Log::info('Order process completed successfully');

            return redirect()->route('orders.success', $order)->with('success', 'Order placed successfully!');
        } catch (\Exception $e) {
            Log::error('Order processing failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return redirect()->back()->with('error', 'An error occurred while processing your order. Please try again.');
        }
    }

    public function success(Order $order)
    {
        return Inertia::render('Orders/Success', [
            'order' => $order->load('items.product')
        ]);
    }
} 