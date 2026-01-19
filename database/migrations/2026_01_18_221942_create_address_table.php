<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('address', function (Blueprint $table) {
            $table->id();
            $table->string('address_line', length: 100);
            $table->string('city', length: 45);
            $table->string('zip_postcode', length: 45);
            $table->string('state', length: 45);
            $table->bigInteger('student_id')->unsigned()->index()->nullable();
            $table->foreign('student_id')->references('id')->on('student')->onDelete('cascade');
            // $table->timestamps();
        });

        Schema::table('address', function (Blueprint $table){
            $table->index(['address_line','student_id'], 'address_student_FK_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('address');
    }
};
