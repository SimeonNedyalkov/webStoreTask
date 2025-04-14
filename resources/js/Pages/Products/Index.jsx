import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { useCart } from "@/Contexts/CartContext";
import Cart from "@/Components/Cart";
import { ShoppingCart } from "lucide-react";

export default function Index({ auth, products, categories, filters }) {
    const [processing, setProcessing] = useState(false);
    const { addToCart } = useCart();

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            setProcessing(true);
            router.delete(route("products.destroy", id), {
                onFinish: () => setProcessing(false),
            });
        }
    };

    const handleCategoryChange = (value) => {
        // If "all" is selected, don't send category_id parameter
        const params = value === "all" ? {} : { category_id: value };

        router.get(route("products.index"), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Products
                    </h2>
                    <Cart />
                </div>
            }
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4">
                                    <h3 className="text-lg font-semibold">
                                        Product List
                                    </h3>
                                    <Select
                                        value={filters.category_id || "all"}
                                        onValueChange={handleCategoryChange}
                                    >
                                        <SelectTrigger className="w-[200px]">
                                            <SelectValue placeholder="Filter by category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">
                                                All Categories
                                            </SelectItem>
                                            {categories.map((category) => (
                                                <SelectItem
                                                    key={category.id}
                                                    value={category.id.toString()}
                                                >
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button
                                    onClick={() =>
                                        router.visit(route("products.create"))
                                    }
                                    className="bg-blue-500 hover:bg-blue-600"
                                >
                                    Add Product
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {products.data.map((product) => (
                                    <Card
                                        key={product.id}
                                        className="flex flex-col"
                                    >
                                        {product.image_path && (
                                            <div className="relative h-48 w-full">
                                                <img
                                                    src={`/storage/${product.image_path}`}
                                                    alt={product.name}
                                                    className="absolute inset-0 h-full w-full rounded-t-lg"
                                                />
                                            </div>
                                        )}
                                        <CardHeader>
                                            <CardTitle>
                                                {product.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {product.category
                                                    ? product.category.name
                                                    : "No Category"}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-gray-600 mb-2">
                                                {product.description}
                                            </p>
                                            <p className="text-lg font-semibold text-blue-600">
                                                ${product.price}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex flex-col gap-2">
                                            <div className="flex justify-between w-full gap-2">
                                                <Button
                                                    className="flex-1 bg-blue-500 hover:bg-blue-600"
                                                    onClick={() =>
                                                        addToCart(product)
                                                    }
                                                >
                                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                                    Add to Cart
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="flex-1"
                                                    onClick={() =>
                                                        router.visit(
                                                            route(
                                                                "products.show",
                                                                product.id
                                                            )
                                                        )
                                                    }
                                                >
                                                    View
                                                </Button>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <Button
                                                    variant="outline"
                                                    className="flex-1"
                                                    onClick={() =>
                                                        router.visit(
                                                            route(
                                                                "products.edit",
                                                                product.id
                                                            )
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 ml-2"
                                                    onClick={() =>
                                                        handleDelete(product.id)
                                                    }
                                                    disabled={processing}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>

                            {products.data.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    No products found.
                                </div>
                            )}

                            {/* Pagination Links */}
                            {products.links && (
                                <div className="mt-6">
                                    {/* Add your pagination component here */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
