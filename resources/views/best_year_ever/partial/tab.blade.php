<ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link {{$page == 'main'?'active':''}}" href="{{route('main',['animal' => $animal,'id' => $id, 'page' => 'main'])}}">{{$animal}}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{$page == 'aspect'?'active':''}}" href="{{route('aspects',['animal' => $animal,'id' => $id, 'page' => 'aspect'])}}">The Forecast for Individual Aspects of the Year
    </a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{$page == 'luck'?'active':''}}" href="{{route('luck',['animal' => $animal,'id' => $id, 'page' => 'luck'])}}">Monthly Luck</a>
    </li>
</ul> 