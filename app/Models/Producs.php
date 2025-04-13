<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producs extends Model
{
    /** @use HasFactory<\Database\Factories\ProducsFactory> */
    use HasFactory;
    public function createdBy() {
        return $this->belongsTo(User::class,'created_by');
    }
    public function updatedBy() {
        return $this->belongsTo(User::class,'updated_by');
    }
    public function categorie() {
        return $this->belongsTo(Categories::class,'categorie');
    }
}
