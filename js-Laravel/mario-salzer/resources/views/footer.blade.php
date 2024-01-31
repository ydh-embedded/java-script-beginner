
{{-- gesetzt nur in view.index --}}
@isset($footer_cat)
<p class="categories">
  Kategorien:
  @foreach($footer_cat as $c)
    <a href="/category/{{$c->id}}">{{$c->icon}}{{$c->name}}</a> |
  @endforeach
</p>
@endisset

  
<hr>
<p>
&copy; Sabine Beispielhaft, Versand und Quality-Management vom Laravel Horror Shop Inc.
</p>
