<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDayChartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('day_charts', function (Blueprint $table) {
            $table->id();
            $table->string('structure_type');
            $table->integer('number');
            $table->string('cycle_type');
            $table->integer('stem_id');
            $table->integer('branch_id');
            $table->integer('element_id');
            $table->integer('english_id');
            $table->string('photo');
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
        Schema::dropIfExists('day_charts');
    }
}
