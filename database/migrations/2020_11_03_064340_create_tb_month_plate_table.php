<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbMonthPlateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_month_plate', function (Blueprint $table) {
            $table->id();
            $table->string('yin_type')->nullable();
            $table->integer('stem_id')->nullable();
            $table->integer('branch_id')->nullable();
            $table->integer('element_id')->nullable();
            $table->integer('english_id')->nullable();
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
        Schema::dropIfExists('tb_month_plate');
    }
}
