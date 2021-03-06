<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('chinese')->nullable;
            $table->string('photo');
            $table->string('star_name');
            $table->string('polarity');
            $table->string('gua');
            $table->string('palace');
            $table->string('direction');
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
        Schema::dropIfExists('stars');
    }
}
