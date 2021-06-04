<a href="{{ url('/trigram/palace/'.$trigram->id) }}">
    <div class="float-right pt-3 pb-3 tabs-format {{request()->is('trigram/palace/*')?'tab-active':''}}">
        Element
    </div>
</a>
<a href="{{ url('/trigram/number/'.$trigram->id) }}">
    <div class="float-right pt-3 pb-3 tabs-format {{request()->is('trigram/number/*')?'tab-active':''}}">
        Number
    </div>
</a>
<a href="{{ url('/trigram/people/'.$trigram->id) }}">
    <div class="float-right pt-3 pb-3 tabs-format {{request()->is('trigram/people/*')?'tab-active':''}}">
        People
    </div>
</a>
<a href="{{ url('/trigram/parts/'.$trigram->id) }}">
    <div class="float-right pt-3 pb-3 tabs-format {{request()->is('trigram/parts/*')?'tab-active':''}}">
        Body Parts
    </div>
</a>
<a href="{{ url('/trigram/animals/'.$trigram->id) }}">
    <div class="float-right pt-3 pb-3 tabs-format {{request()->is('trigram/animals/*')?'tab-active':''}}">
        Animals
    </div>
</a>
<a href="{{ url('/trigram/sickness/'.$trigram->id) }}">
    <div class="float-right pt-3 pb-3 tabs-format {{request()->is('trigram/sickness/*')?'tab-active':''}}">
        Sickness
    </div>
</a>
<a href="{{ url('/trigram/colour/'.$trigram->id) }}">
    <div class="float-right pt-3 pb-3 tabs-format {{request()->is('trigram/colour/*')?'tab-active':''}}">
        Colour
    </div>
</a>