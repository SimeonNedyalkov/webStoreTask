<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_by' => $this->whenLoaded('createdBy', function() {
                return $this->createdBy ? $this->createdBy->name : 'Unknown';
            }, 'Unknown'),
            'updated_by' => $this->whenLoaded('updatedBy', function() {
                return $this->updatedBy ? $this->updatedBy->name : 'Unknown';
            }, 'Unknown'),
            'created_at' => $this->created_at?->format('Y-m-d H:i:s') ?? 'Unknown',
            'updated_at' => $this->updated_at?->format('Y-m-d H:i:s') ?? 'Unknown',
        ];
    }
} 