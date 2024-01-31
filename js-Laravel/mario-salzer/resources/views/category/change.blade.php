@extends("layout")
@section("main")
    @parent
    <h3>{{$title}}</h3>

    <form action="{{$action}}" method="POST" enctype="multipart/form-data" accept-charset="UTF-8">

        @isset($category->id)
        {{ method_field('PUT')}}
        @endisset

        @csrf

        <div><label>Name<br> <input type="text" size=60 name="name" value="{{$category->name ?: old("name")}}"></label></div>

        <div><label>Beschreibung<br> <input type="text" size=60 name="desc" value="{{$category->desc ?: old("desc")}}"></label></div>

        <div><label>Icon<br> <input type="text" size=10 name="icon" value="{{$category->icon ?: old("icon")}}"></label></div>

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

   <form action="/category/{{$category->id}}" method="POST">
        @csrf
        @method("DELETE")
        <input type="submit" value="KATEGORIE LÖSCHEN" class="warning">
   </form>


@endsection
