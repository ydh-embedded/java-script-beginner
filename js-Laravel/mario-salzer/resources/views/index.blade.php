{{-- verwendet article/index, aber füllt footer-variable $categories --}}
{{--
   wird jetzt stattdessen in routes/web:index gesetzt
@php
   // ansonsten wäre ein view()-Argument in jedem Controller notwendig
   $footer_cat = \App\Models\Category::select("id", "name")->orderBy("name")->get();
@endphp
--}}

{{--@include("article.index")--}}



@extends("layout")
@section("main")
<h2>Laravel Horror Shop</h2>
<section class=shopping-grid>

   @foreach ($articles as $a)
    <article class=preview>
        <a href="article/{{$a->id}}">
           <h5 class="preview-title">{{$a->title}}</h5>
           <img src="{{$a->img_thumb}}" alt="🖼 placeholder" class="preview-img">
        </a>
    </article>
   @endforeach

</section>
@endsection
