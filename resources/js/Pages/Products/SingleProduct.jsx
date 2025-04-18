import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

export default function SingleProduct({ auth, product }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Product Details
                </h2>
            }
        >
            <Head title="Product Details" />

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
                                            className="w-full h-auto rounded-lg"
                                        />
                                    )}
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Description
                                        </h3>
                                        <p className="text-gray-600">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Price
                                        </h3>
                                        <p className="text-gray-600">
                                            ${product.price}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Category
                                        </h3>
                                        <p className="text-gray-600">
                                            {product.category?.name}
                                        </p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <Link
                                            href={route(
                                                "products.edit",
                                                product.id
                                            )}
                                        >
                                            <Button variant="outline">
                                                Edit
                                            </Button>
                                        </Link>
                                        <Link href={route("products.index")}>
                                            <Button variant="secondary">
                                                Back to List
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
