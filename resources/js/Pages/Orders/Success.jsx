import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function Success({ auth, order }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Order Confirmation
                </h2>
            }
        >
            <Head title="Order Confirmation" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Thank you for your order!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Order Details
                                    </h3>
                                    <p className="text-gray-600">
                                        Order ID: #{order.id}
                                    </p>
                                    <p className="text-gray-600">
                                        Status: {order.status}
                                    </p>
                                    <p className="text-gray-600">
                                        Total Amount: ${order.total_amount}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Customer Information
                                    </h3>
                                    <p className="text-gray-600">
                                        Name: {order.customer_name}
                                    </p>
                                    <p className="text-gray-600">
                                        Email: {order.customer_email}
                                    </p>
                                    <p className="text-gray-600">
                                        Phone: {order.customer_phone}
                                    </p>
                                    <p className="text-gray-600">
                                        Address: {order.customer_address}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Order Items
                                    </h3>
                                    <div className="space-y-2">
                                        {order.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex justify-between items-center"
                                            >
                                                <div>
                                                    <p className="font-medium">
                                                        {item.product.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        Quantity:{" "}
                                                        {item.quantity}
                                                    </p>
                                                </div>
                                                <p className="font-medium">
                                                    $
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Link href={route("products.index")}>
                                        <Button>Continue Shopping</Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
