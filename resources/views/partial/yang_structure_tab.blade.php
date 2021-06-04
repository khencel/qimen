<ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link {{request()->is('chart/day/yang_structure/upper_cycle')?'active':''}}" href="/chart/day/yang_structure/upper_cycle">Upper Cycle</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('chart/day/yang_structure/middle_cycle')?'active':''}}" href="/chart/day/yang_structure/middle_cycle">Middle Cycle</a>
    </li>
    <li class="nav-item">
        <a class="nav-link {{request()->is('chart/day/yang_structure/lower_cycle')?'active':''}}" href="/chart/day/yang_structure/lower_cycle">Lower Cycle</a>
    </li>
  </ul>