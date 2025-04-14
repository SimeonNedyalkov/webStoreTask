import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useCart } from "@/Contexts/CartContext";
import { useEffect } from "react";

export default function Checkout({ auth, errors: serverErrors }) {
    const { cart, total, clearCart } = useCart();
    const { data, setData, post, processing, errors, reset } = useForm({
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        customer_address: "",
    });

    useEffect(() => {
        if (serverErrors) {
            console.error("Server errors:", serverErrors);
        }
    }, [serverErrors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", data);
        console.log("Cart contents:", cart);

        post(
            route("orders.store"),
            {
                ...data,
                cart: cart.map((item) => ({
                    id: item.id,
                    quantity: item.quantity,
                    price: item.price,
                })),
            },
            {
                onSuccess: () => {
                    console.log("Order submitted successfully");
                    clearCart();
                },
                onError: (errors) => {
                    console.error("Order submission failed:", errors);
                },
            }
        );
    };

    if (cart.length === 0) {
        return (
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Checkout
                    </h2>
                }
            >
                <Head title="Checkout" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <Card>
                            <CardContent className="pt-6">
                                <p className="text-center text-gray-500">
                                    Your cart is empty
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Checkout
                </h2>
            }
        >
            <Head title="Checkout" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {cart.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center"
                                        >
                                            <div>
                                                <p className="font-medium">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Quantity: {item.quantity}
                                                </p>
                                            </div>
                                            <p className="font-medium">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold">
                                                Total
                                            </p>
                                            <p className="font-semibold">
                                                ${total.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Customer Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div>
                                        <Label htmlFor="customer_name">
                                            Name
                                        </Label>
                                        <Input
                                            id="customer_name"
                                            value={data.customer_name}
                                            onChange={(e) =>
                                                setData(
                                                    "customer_name",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        {errors.customer_name && (
                                            <p className="text-sm text-red-500">
                                                {errors.customer_name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="customer_email">
                                            Email
                                        </Label>
                                        <Input
                                            id="customer_email"
                                            type="email"
                                            value={data.customer_email}
                                            onChange={(e) =>
                                                setData(
                                                    "customer_email",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        {errors.customer_email && (
                                            <p className="text-sm text-red-500">
                                                {errors.customer_email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="customer_phone">
                                            Phone
                                        </Label>
                                        <Input
                                            id="customer_phone"
                                            type="tel"
                                            value={data.customer_phone}
                                            onChange={(e) =>
                                                setData(
                                                    "customer_phone",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        {errors.customer_phone && (
                                            <p className="text-sm text-red-500">
                                                {errors.customer_phone}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="customer_address">
                                            Address
                                        </Label>
                                        <textarea
                                            id="customer_address"
                                            value={data.customer_address}
                                            onChange={(e) =>
                                                setData(
                                                    "customer_address",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                        {errors.customer_address && (
                                            <p className="text-sm text-red-500">
                                                {errors.customer_address}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Processing..."
                                            : "Place Order"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
