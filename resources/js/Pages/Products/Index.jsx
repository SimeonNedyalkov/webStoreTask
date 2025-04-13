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
import { Input } from "@/components/ui/input";
import { Label } from "../../Components/ui/label";
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
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Categories</Label>
                <Select>
                    <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="next">T-shirts</SelectItem>
                        <SelectItem value="sveltekit">Shoes</SelectItem>
                        <SelectItem value="astro">Jackets</SelectItem>
                        <SelectItem value="nuxt">Gloves</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {products.data.map((product) => {
                                return (
                                    <Card
                                        className="w-[350px]"
                                        key={product.id}
                                    >
                                        <CardHeader>
                                            <CardTitle>
                                                {product.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {product.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <form>
                                                <div className="grid w-full items-center gap-4">
                                                    <div className="flex flex-col space-y-1.5">
                                                        <img
                                                            src={
                                                                product.imageUrl
                                                            }
                                                            alt={product.name}
                                                            className="w-full h-48 object-cover rounded-t-lg"
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <Button variant="outline">
                                                Cancel
                                            </Button>
                                            <Button>Deploy</Button>
                                        </CardFooter>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
