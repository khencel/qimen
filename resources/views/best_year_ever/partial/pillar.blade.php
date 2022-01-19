<ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link {{$page == 'main'?'active':''}}" href="{{route('main',['pillar' => $pillar,'id' => $id, 'page' => 'main'])}}">{{$pillar}}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{$page == 'aspect'?'active':''}}" href="{{route('aspects',['pillar' => $pillar,'id' => $id, 'page' => 'aspect'])}}">Aspect for Day Pillar
    </a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{$page == 'luck'?'active':''}}" href="{{route('luck',['pillar' => $pillar,'id' => $id, 'page' => 'luck'])}}">Monthly Luck</a>
    </li>
</ul> 