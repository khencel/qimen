<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHourChartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hour_charts', function (Blueprint $table) {
            $table->id();
            $table->string('is_yang');
            $table->string('structure');
            $table->integer('day_1_stem');
            $table->string('day_1_structure');
            $table->integer('day_1_element');
            $table->integer('day_2_stem');
            $table->string('day_2_structure');
            $table->integer('day_2_element');
            $table->integer('hour_stem_id');
            $table->integer('hour_branch_id');
            $table->integer('hour_element_id');
            $table->integer('hour_english_id');
            $table->integer('center_id');
            $table->string('start_hour');
            $table->string('end_hour');
            $table->string('interval')->nullable();
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
        Schema::dropIfExists('hour_charts');
    }
}
