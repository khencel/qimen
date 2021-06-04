<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateYinChartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yin_charts', function (Blueprint $table) {
            $table->id();
            $table->string('yin_type');
            $table->string('start_date');
            $table->string('end_date');
            $table->integer('stem_id');
            $table->integer('branch_id');
            $table->integer('element_id');
            $table->integer('english_id');
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
        Schema::dropIfExists('yin_charts');
    }
}
