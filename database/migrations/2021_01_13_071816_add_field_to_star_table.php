<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldToStarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('stars', function (Blueprint $table) {
            $table->string('star_name');
            $table->string('polarity');
            $table->string('gua');
            $table->integer('palace');
            $table->string('direction');
            $table->string('element');
            $table->string('quality');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('stars', function (Blueprint $table) {
            $table->dropColumn('star_name');
            $table->dropColumn('polarity');
            $table->dropColumn('gua');
            $table->dropColumn('palace');
            $table->dropColumn('direction');
            $table->dropColumn('element');
            $table->dropColumn('quality');
        });
    }
}
