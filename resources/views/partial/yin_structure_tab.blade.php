<ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link {{request()->is('chart/day/yin_structure/upper_cycle')?'active':''}}" href="/chart/day/yin_structure/upper_cycle">Upper Cycle</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('chart/day/yin_structure/middle_cycle')?'active':''}}" href="/chart/day/yin_structure/middle_cycle">Middle Cycle</a>
    </li>
    <li class="nav-item">
        <a class="nav-link {{request()->is('chart/day/yin_structure/lower_cycle')?'active':''}}" href="/chart/day/yin_structure/lower_cycle">Lower Cycle</a>
    </li>
  </ul>