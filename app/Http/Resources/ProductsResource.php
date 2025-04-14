<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'image_path' => $this->image_path,
            'category_id' => $this->category_id,
            'category' => $this->whenLoaded('category'),
            'created_by' => $this->created_by,
            'createdBy' => $this->whenLoaded('createdBy'),
            'updated_by' => $this->updated_by,
            'updatedBy' => $this->whenLoaded('updatedBy'),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
} 