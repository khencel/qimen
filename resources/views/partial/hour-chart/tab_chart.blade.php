<ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/preview/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/preview'.'/'.$chart->id) }}">Preview</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Chart Details</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/se/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/se'.'/'.$chart->id) }}">SE</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/s/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/s'.'/'.$chart->id) }}">S</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/sw/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/sw'.'/'.$chart->id) }}">SW</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/e/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/e'.'/'.$chart->id) }}">E</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/w/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/w'.'/'.$chart->id) }}">W</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/ne/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/ne'.'/'.$chart->id) }}">NE</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/n/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/n'.'/'.$chart->id) }}">N</a>
    </li>
    <li class="nav-item">
      <a class="nav-link {{request()->is('hour/*/*/nw/*')?'active':''}}" href="{{ url('hour/'.$chart->is_yang.'/'.$chart->structure.'/nw'.'/'.$chart->id) }}">NW</a>
    </li>
</ul>