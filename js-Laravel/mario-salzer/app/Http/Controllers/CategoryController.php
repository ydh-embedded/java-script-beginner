<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view("category.index", [
            "categories" => Category::orderBy("name")->get(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category) #
    {
        return view("article.index", [
            "articles" => \App\Models\Article::select("*")->where("catid", "=", $category->id)->orderByDesc("created_at")->get(),
            "title" => "Artikel in Rubrik: $category->name ",
            "addendum" => "<mark class=category-head>$category->icon</mark>  <p>$category->desc</p>"
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return $this->edit(new Category());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        $id = $category->id;
        return view("category.change", [
            "action" => $id ? "/category/$category->id" : "/category",
            "id" => $id,
            "category" => $category,
            "title" => $id ? "Kategorie Ändern" : "Neue KAt",
            "button" => "Speichern",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->save_req(new Category(), $request);
        return redirect("category")->withSuccess('Kategorie angelegt');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->save_req(Category::find($id), $request);
        return redirect("/category/$id")->withSuccess('Kategorie geändert');
    }

    /**
     * combines ->store and ->update handling
     * #@doc: https://laravel.com/api/7.x/Illuminate/Database/Eloquent/Model.html#method_fill
     */
    function save_req($category, $request)
    {
        $category->fill($request->all());
        $category->save();
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return redirect("/category")->withSuccess('Kategorie gelöscht');
    }
}
