<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index', [
        "articles" => \App\Models\Article::select("*")->orderByDesc("created_at")->get(),
        "footer_cat" => \App\Models\Category::select("id", "name")->orderBy("name")->get(),
    ]);
});

Route::resource(
    "article",
    \App\Http\Controllers\ArticleController::class
);

Route::resource(
    "category",
    \App\Http\Controllers\CategoryController::class
);

Route::get("basket", function () {
    return view("basket", [
        "basket" => session()->get("basket", []),
        #        "basket" => ["Neuer Artikel" => 2]
    ]);
});
Route::put("basket", function () {
    if ($title = request()->get("title")) {
        session()->increment("basket.$title");
    }
    return redirect("/basket")->withSuccess("Artikel hinzugefügt. Seele vorgemerkt.");
});
