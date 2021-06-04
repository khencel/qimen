<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('value');
            $table->string('chinese')->nullable();
            $table->string('photo');
            $table->string('deity');
            $table->string('element');
            $table->string('quality');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deities');
    }
}
