@extends("layout")
@section("main")
<h2>{{$title ?? "Mit Flüchen belegte Artikel"}}</h2>
@isset($addendum)
    {!!$addendum!!}
@endisset
<section class=shopping-grid>

   @foreach ($articles as $a)
    <article class=preview>
        <a href="/article/{{$a->id}}">
           <h5 class="preview-title">{{$a->title}}</h5>
           <img src="{{$a->img_thumb}}" alt="🖼 placeholder" class="preview-img">
        </a>
    </article>
   @endforeach

</section>
@endsection
