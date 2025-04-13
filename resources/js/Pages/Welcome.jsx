import { Head, Link } from "@inertiajs/react";
import Navigation from "./Navigation";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
                                Featured Products
                            </h2>
                            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                                {/* Product 1 */}
                                <div className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1585386959984-a4155224a1a7"
                                        alt="Vintage Camera"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold">
                                            Vintage Camera
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Capture timeless moments in style.
                                        </p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-lg font-bold text-red-600">
                                                $120
                                            </span>
                                            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 2 */}
                                <div className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1606813909027-cc3c5c202dc0"
                                        alt="Stylish Headphones"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold">
                                            Stylish Headphones
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Immerse in premium sound quality.
                                        </p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-lg font-bold text-red-600">
                                                $89
                                            </span>
                                            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 3 */}
                                <div className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
                                    <img
                                        src="https://images.unsplash.com/photo-1610465292132-9b3c1b8b5414"
                                        alt="Minimalist Watch"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold">
                                            Minimalist Watch
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Elegance meets functionality.
                                        </p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-lg font-bold text-red-600">
                                                $199
                                            </span>
                                            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
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
