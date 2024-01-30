<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("article.index", [
            "articles" =>
            Article::orderByDesc("created_at")->get()
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(Article $article) # $id)
    {
        return view(
            "article.show",
            [
                "article" => $article, #Article::findOrFail($id),
                "category" => \App\Models\Category::select("*")->where("id", "=", $article->catid)->first(),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return $this->edit(0); // 0 for new Article()
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $ls = DB::table("categories")->select("id", "name")->get();
        return view("article.change", [
            "cats" => $ls,
            "cats_opt" => array_column($ls->toArray(), "name", "id"),
            "action" => $id ? "/article/$id" : "/article",
            "id" => $id,
            "article" => $id ? Article::find($id) : new Article(),
            "title" => $id ? "Artikel Ändern" : "Neuer Artikel",
            "button" => "Speichern",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->save_req(new Article(), $request);
        return redirect("article")->withSuccess("Produktlisting angelegt");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->save_req(Article::find($id), $request);
        return redirect("/article/$id")->withSuccess("Produktdetails gespeichert und so");;
    }

    /**
     * combines ->store and ->update handling
     * #@doc: https://laravel.com/api/7.x/Illuminate/Database/Eloquent/Model.html#method_fill
     */
    function save_req($article, $request)
    {
        $article->forceFill($validated = $request->validate([
            "title" => "required|min:2",
            "desc" => "required|min:10",
            "img" => "required",
            "img_thumb" => "required",
            "catid" => "required|int",
        ])); //! forceFill erübrigt die manuelle Zuweisung bei foreignIds (catid)
        #$article->catid = $validated["catid"];
        $article->save();
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Article::find($id)->delete();
        return redirect("/article")->withSuccess("This won't be sold no more");;
    }
}
