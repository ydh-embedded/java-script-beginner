@extends("layout")
@section("main")

    <article class=full>
        <!--ID={{$article->id}}-->

        <!-- Titel -->
        <h2 class="article-title">{{$article->title}}</h2>

        <!-- Bild -->
        <img src="{{$article->img}}" alt="🖼 placeholder" class="article-img">

        <!-- Text -->
        <p class="article-desc">

          <!-- Basket -->
          <form action="/basket?title={{$article->title}}" method="POST" style="display: inline; float: right">
             <input type=submit value="🛒"> @csrf @method("PUT")
          </form>

          {!!$article->desc!!}
        </p>
    </article>

    <div class="bonus-infos">
        <dl>
        @isset($category->name)
            <dt>Kategorie</dt>
            <dd><a href="/category/{{$category->id}}">{{$category->icon}} {{$category->name}}</a></dd>
        @endisset
            <dt>Erhältlich seit</dt>
            <dd>{{$article->created_at}}</dd>
            <!-- id oder updated_at brauchen wir nicht anzeigen -->
        </dl>
    </div>

   <!-- Actions -->
   <form action="/article/{{$article->id}}/edit" method="GET">
        <input type="submit" value="EDIT">
   </form>

   <form action="/article/{{$article->id}}" method="POST">
        @csrf
        @method("DELETE")
        <input type="submit" value="DELETE" class="warning">
   </form>

@endsection
