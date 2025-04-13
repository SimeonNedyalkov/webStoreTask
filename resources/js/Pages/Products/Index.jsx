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
    console.log(products);
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

            {/* Select Dropdown with spacing */}
            <div className="py-6 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col space-y-2 w-60">
                    <Label htmlFor="categories">Categories</Label>
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

            {/* Grid of Products */}
            <div className="py-6 px-6 max-w-7xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {products.data.map((product) => (
                        <Card key={product.id} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription>
                                    {product.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src={`http://127.0.0.1:8000/${product.imagePath}`}
                                    alt={product.name}
                                    height="5px"
                                    width="5px"
                                    className="w-full h-48"
                                />
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancel</Button>
                                <Button>Buy</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
