@extends("layout")
@section("main")
<h2>Fake Warenkorb</h2>
<table>
    <tr>
        <th>Artikel</th>
        <th>Preis</th>
        <th>Anzahl</th>
    </tr>
    @foreach ($basket as $art_title => $count)
    <tr>
        <td>{{$art_title}}</td>
        <td>{{sprintf("%3.2f", rand(5,200))}}€</td>
        <td>{{$count}}</td>
    </tr>
    @endforeach
</table>
<button>Jetzt bestellen...</button>

@endsection