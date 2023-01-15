<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimeStarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_stars', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('value_1')->nullable();
            $table->string('value_2')->nullable();
            $table->string('value_3')->nullable();
            $table->string('value_4')->nullable();
            $table->string('value_5')->nullable();
            $table->string('value_6')->nullable();
            $table->string('value_7')->nullable();
            $table->string('value_8')->nullable();
            $table->string('value_9')->nullable();
            $table->string('value_10')->nullable();
            $table->string('value_11')->nullable();
            $table->string('value_12')->nullable();
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
        Schema::dropIfExists('time_stars');
    }
}
