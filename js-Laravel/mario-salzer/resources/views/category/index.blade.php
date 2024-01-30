@extends("layout")
@section("main")
<h2>Kategorien</h2>
<table>
@foreach ($categories as $c)
<tr>
    <td></td>
    <td>{{$c->icon}}</td>
    <td><a href="category/{{$c->id}}">{{$c->name}}</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><a href="category/{{$c->id}}/edit">📝</a></td>
</tr>
@endforeach
</table>

@endsection