<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('birth_date')->nullable();
            $table->string('birth_time')->nullable();
            $table->string('email')->unique();
            $table->string('country')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->text('api_token');
            $table->string('password');
            $table->integer('is_admin');
            $table->timestamps('is_subscribe')->nullable();
            $table->timestamps('end_subscribe')->nullable();
            $table->integer('no_of_terms')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
