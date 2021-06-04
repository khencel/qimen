<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldToDeitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('deities', function (Blueprint $table) {
            $table->string('deity');
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
        Schema::table('deities', function (Blueprint $table) {
            $table->dropColumn('deity');
            $table->dropColumn('element');
            $table->dropColumn('quality');
        });
    }
}
