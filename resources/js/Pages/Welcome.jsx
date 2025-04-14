import { Head, Link } from "@inertiajs/react";
import Navigation from "./Navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    products,
}) {
    return (
        <>
            <Head title="Welcome to Our Store" />
            <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                <div className="min-h-screen flex flex-col">
                    {/* Navigation */}
                    <header className="border-b border-gray-200 dark:border-gray-700">
                        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                            <div className="text-2xl font-bold text-red-600">
                                webStoreTask
                            </div>
                            <Navigation auth={auth} />
                        </div>
                    </header>

                    {/* Hero Section */}
                    <section className="bg-gray-50 dark:bg-gray-800 py-20 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Discover Your Style
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Handpicked products just for you. Affordable.
                            Trendy. Essential.
                        </p>
                        <Link
                            href="#products"
                            className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-500 transition"
                        >
                            Shop Now
                        </Link>
                    </section>

                    {/* Product Grid */}
                    <section
                        id="products"
                        className="py-20 bg-white dark:bg-gray-900"
                    >
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-3xl font-semibold mb-10 text-center">
                                Our Products
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {products &&
                                    products.map((product) => (
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
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                    {product.description}
                                                </p>
                                                <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                                                    ${product.price}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
                        Built with Laravel v{laravelVersion} & PHP v{phpVersion}
                    </footer>
                </div>
            </div>
        </>
    );
}
