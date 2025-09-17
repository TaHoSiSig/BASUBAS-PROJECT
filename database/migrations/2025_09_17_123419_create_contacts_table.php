<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    public function up() {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('age');
            $table->string('email');
            $table->date('birthday');
            $table->string('sex');
            $table->string('contact_number');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('contacts');
    }
}
