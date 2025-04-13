import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Products({ auth, products }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Products
                </h2>
            }
        >
            <Head title="Products" />

            {/* Category Selector */}
            <div className="py-6 px-6 max-w-7xl mx-auto">
                <div className="w-full max-w-xs">
                    <Label htmlFor="categories" className="mb-2 block">
                        Filter by Category
                    </Label>
                    <Select>
                        <SelectTrigger id="categories">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="tshirts">T-shirts</SelectItem>
                            <SelectItem value="shoes">Shoes</SelectItem>
                            <SelectItem value="jackets">Jackets</SelectItem>
                            <SelectItem value="gloves">Gloves</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Products Grid */}
            <div className="py-6 px-6 max-w-7xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.data.map((product) => (
                        <Card key={product.id} className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="truncate">
                                    {product.name}
                                </CardTitle>
                                <CardDescription className="text-sm text-muted-foreground">
                                    {product.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src={`/${product.imagePath}`}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-md border"
                                    loading="lazy"
                                />
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button className="w-full" variant="default">
                                    Add to cart - ${product.price}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
