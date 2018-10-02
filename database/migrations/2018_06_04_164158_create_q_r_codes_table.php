<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQRCodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('q_r_codes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');

            $table->string('name');
            $table->text('description')->nullable();

            $table->string('link')->unique();
            $table->text('redirect');

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
        Schema::dropIfExists('q_r_codes');
    }
}
