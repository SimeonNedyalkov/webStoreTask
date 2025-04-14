import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function SingleProduct({ auth, product }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Single Product
                </h2>
            }
        >
            <Head title="SingleProduct" />

            {/* Category Selector */}
            <div className="max-w-4xl mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <img
                    src={`/${product.imagePath}`}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded"
                />
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                    {product.description}
                </p>
                <p className="mt-2 text-xl font-semibold text-amber-600">
                    ${product.price}
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
