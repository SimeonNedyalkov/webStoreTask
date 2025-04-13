<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=>$this->id,
            "description"=>$this->description,
            "name"=>$this->name,
            "price"=>$this->price,
            "categorie"=>$this->categorie,
            "imagePath"=>$this->imagePath,
            'createdBy'=>new UserResource($this->createdBy),
            'updatedBy'=>new UserResource($this->updatedBy),
        ];
    }
}
