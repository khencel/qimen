<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('n_s', function (Blueprint $table) {
            $table->id();
            $table->string('chart_type');
            $table->integer('yin_chart_id');
            $table->integer('stem_top_id')->nullable();
            $table->integer('star_id')->nullable();
            $table->integer('deitie_id')->nullable();
            $table->integer('stem_bottom_id')->nullable();
            $table->integer('door_id')->nullable();
            $table->integer('number')->nullable();
            $table->integer('stem_1')->nullable();
            $table->integer('stem_2')->nullable();
            $table->integer('stem_3')->nullable();
            $table->integer('stem_4')->nullable();
            $table->integer('position_1')->nullable();
            $table->integer('position_2')->nullable();
            $table->integer('position_3')->nullable();
            $table->integer('position_4')->nullable();
            $table->integer('position_5')->nullable();
            $table->integer('position_6')->nullable();
            $table->integer('position_7')->nullable();
            $table->string('nBottom')->nullable();
            $table->integer('bird_2')->nullable();
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
        Schema::dropIfExists('n_s');
    }
}
