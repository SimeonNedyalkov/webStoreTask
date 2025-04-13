<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Categories extends JsonResource
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
            'createdBy'=>new UserResource($this->createdBy),
            'updatedBy'=>new UserResource($this->updatedBy),
        ];
    }
}
