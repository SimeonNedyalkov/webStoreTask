import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { useCart } from "@/Contexts/CartContext";

export default function Show({ auth, product }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Product Details
                </h2>
            }
        >
            <Head title={product.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    {product.image && (
                                        <img
                                            src={`/storage/${product.image}`}
                                            alt={product.name}
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                    )}
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            Description
                                        </h3>
                                        <p className="text-gray-600">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            Price
                                        </h3>
                                        <p className="text-2xl font-bold">
                                            ${product.price.toFixed(2)}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            Category
                                        </h3>
                                        <p className="text-gray-600">
                                            {product.category?.name}
                                        </p>
                                    </div>
                                    <Button
                                        onClick={handleAddToCart}
                                        className="w-full"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
