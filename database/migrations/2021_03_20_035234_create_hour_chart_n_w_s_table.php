<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHourChartNWSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hour_chart_n_w_s', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->integer('chart_id');
            $table->integer('door_id');
            $table->integer('relationship_id')->nullable();
            $table->integer('star_id');
            $table->integer('heaven_stem_id')->nullable();
            $table->integer('earth_stem_id')->nullable();
            $table->integer('number_id');
            $table->integer('deitie_id');
            $table->string('formation')->nullable();
            $table->text('explanation')->nullable();
            $table->string('top_bottom')->nullable();
            $table->string('left_right')->nullable();
            $table->integer('heaven')->nullable();
            $table->integer('earth')->nullable();
            $table->integer('other')->nullable();
            $table->integer('formation_1')->nullable();
            $table->integer('formation_2')->nullable();
            $table->integer('formation_3')->nullable();
            $table->integer('formation_4')->nullable();
            $table->integer('formation_5')->nullable();
            $table->integer('formation_6')->nullable();
            $table->integer('formation_7')->nullable();
            $table->string('tag');
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
        Schema::dropIfExists('hour_chart_n_w_s');
    }
}
