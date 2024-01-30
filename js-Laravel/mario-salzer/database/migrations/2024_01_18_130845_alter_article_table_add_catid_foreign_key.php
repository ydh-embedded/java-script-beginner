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
        //
        Schema::table("articles", function (Blueprint $table) {
            $table->foreignId("catid")->default(1)->references('id')->on('categories')->default(1);
            #
            # * DEFAULT war notwending für SQLite
            #
            # ->onDelete("CASCADE") wäre zum Löschen von bestehenden Kategorien notwendig,
            # aber machen wir hier nicht. Siehe Doku wegen Vorwand.
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
