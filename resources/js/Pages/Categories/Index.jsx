import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ auth, categories }) {
    const [processing, setProcessing] = useState(false);

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this category?")) {
            setProcessing(true);
            router.delete(route("categories.destroy", id), {
                onFinish: () => setProcessing(false),
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Categories
                </h2>
            }
        >
            <Head title="Categories" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold">
                                    Category List
                                </h3>
                                <a
                                    href={route("categories.create")}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                >
                                    Add Category
                                </a>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 border-b text-left">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 border-b text-left">
                                                Description
                                            </th>
                                            <th className="px-6 py-3 border-b text-left">
                                                Created At
                                            </th>
                                            <th className="px-6 py-3 border-b text-right">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.data.map((category) => (
                                            <tr key={category.id}>
                                                <td className="px-6 py-4 border-b">
                                                    {category.name}
                                                </td>
                                                <td className="px-6 py-4 border-b">
                                                    {category.description}
                                                </td>
                                                <td className="px-6 py-4 border-b">
                                                    {new Date(
                                                        category.created_at
                                                    ).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 border-b text-right">
                                                    <a
                                                        href={route(
                                                            "categories.edit",
                                                            category.id
                                                        )}
                                                        className="text-blue-600 hover:text-blue-800 mr-4"
                                                    >
                                                        Edit
                                                    </a>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                category.id
                                                            )
                                                        }
                                                        disabled={processing}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination Links */}
                            {categories.links && (
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
