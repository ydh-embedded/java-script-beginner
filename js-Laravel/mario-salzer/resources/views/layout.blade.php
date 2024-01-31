<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel Horror Shop</title>
    <meta name="description" content="Verfluchte Gegenstände">
    @include("__simplecss__")
</head>
<body>

<header>
@include("nav")
</header>

{{-- ->withSucess("...") messages --}}
@if(session()->has('message'))
    <div class="alert alert-success">
        {{session('message')}}
    </div>
@endif
@if(session()->has('success'))
    <div class="alert alert-success">
        {{session('success')}}
    </div>
@endif

<main>
@section("main")
@show
</main>

<footer>
@include("footer")
</footer>

</body>
</html>
