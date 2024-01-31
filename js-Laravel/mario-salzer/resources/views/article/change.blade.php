@extends("layout")
@section("main")
    @parent
    <h3>{{$title}}</h3>
    <!--pre>{{--print_r(get_defined_vars())--}}</pre-->

    <form action="{{$action}}" method="POST" enctype="multipart/form-data" accept-charset="UTF-8">

        @isset($article->id)
        {{ method_field('PUT')}}
        @endisset

        @csrf

        <div><label>Titel<br> <input type="text" size=60 name="title" value="{{$article->title ?: old("title")}}"></label></div>

        <div><label>Beschreibung<br> <textarea name="desc" cols=80 rows=12>{{$article->desc ?: old("desc")}}</textarea></label></div>

        <div><label>Bild <input type="text" size=50 name="img" value="{{$article->img ?: old("img")}}"></label></div>

        <div><label>Thumbnail <input type="text" size=50 name="img_thumb" value="{{$article->img_thumb ?: old("img_thumb")}}"></label></div>


        <div><label>Kategorie:

            <x-select class="x-html-attribute" name="catid" :options="$cats" :default="$article->catid" />

            {{--
            <select name="catid">
            @foreach ($cats as $l)
            <option value="{{$l->id}}"
            @if($l->id == $article->catid)
                selected
            @endif
            >{{$l->name}}</option>
            @endforeach
            </select>
            --}}
        </label></div>




        <div><input type="submit" value="{{$button ?? 'Speichern'}}"></div>

        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{!!$error!!}</li>
                @endforeach
            </ul>
        </div>
        @endif

    </form>

   <form action="/article/{{$article->id}}" method="POST">
        @csrf
        @method("DELETE")
        <input type="submit" value="PRODUKT LÖSCHEN" class="warning">
   </form>

    <!--
    <a href="https://stackoverflow.com/questions/22844022/laravel-use-same-form-for-create-and-edit">https://stackoverflow.com/questions/22844022/laravel-use-same-form-for-create-and-edit</a>
    -->

@endsection
