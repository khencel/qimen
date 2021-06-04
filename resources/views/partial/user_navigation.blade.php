<ul class="navbar-nav ml-auto">
    @guest
    <li class="nav-item mr-4">
      <a class="nav-link font-weight-bold text-white nav-label {{request()->is('/')?'navactive':''}}" href="/">
        Home
      </a>
    </li>
    <li class="nav-item mr-4">
      <a class="nav-link font-weight-bold text-white nav-label {{request()->is('login')?'navactive':''}}" href="{{ url('login') }}">
        Sign In
      </a>
    </li>
    <li class="nav-item mr-4">
      <a class="nav-link font-weight-bold text-white nav-label {{request()->is('register')?'navactive':''}}" href="{{ url('register') }}">Sign Up</a>
    </li>
    <li class="nav-item mr-4">
      <a class="nav-link font-weight-bold text-white nav-label {{request()->is('privacy')?'navactive':''}}" href="{{ url('privacy') }}">Data Privacy<span class="sr-only"></span></a>
    </li>
    <li class="nav-item mr-4">
      <a class="nav-link font-weight-bold text-white nav-label {{request()->is('copyright')?'navactive':''}}" href="{{ url('copyright') }}">Copyright Notice<span class="sr-only"></span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link font-weight-bold text-white nav-label" href="/#about">About Us <span class="sr-only"></span></a>
    </li>
    @else
    <li class="nav-item mr-4">
      <a class="nav-link font-weight-bold text-white nav-label {{request()->is('home')?'navactive':''}}" href="/">Home <span class="sr-only">(current)</span></a>
    </li>
    @if (Auth::user()->is_subscribed != null)
      {{-- <li class="nav-item">
        <a class="nav-link font-weight-bold text-white" href="{{url('victory-day')}}">Victory Day <span class="sr-only"></span></a>
      </li> --}}
      <li class="nav-item dropdown mr-4">
            <a id="navbarDropdown" class="nav-link dropdown-toggle font-weight-bold text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                Victory Day<span class="caret"></span>
            </a>

            <div class="dropdown-menu dropdown-menu-right" 
            style="border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 0px;" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="{{url('victory-day')}}">
                  My Victory Day
                </a>
                <a class="dropdown-item" href="{{url('victory-day-guest')}}">
                  Guest Victory Day
                </a>
            </div>
        </li>

        <li class="nav-item mr-4">
          <a class="nav-link font-weight-bold text-white nav-label {{request()->is('/search')?'navactive':''}}" href="{{url('/search')}}">
            Search
          </a>
        </li>
    @else
      <li class="nav-item mr-4 position-relative">
        <svg style="width:24px;height:24px;position:absolute;left:0;right:0;margin-left:auto;margin-right: auto;top:5px; " viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
        </svg>
        <span class="nav-link font-weight-bold text-white">Victory Day</span>
    </li>
    @endif
    
    
    
    <li class="nav-item dropdown">
        <a id="navbarDropdown" class="nav-link dropdown-toggle font-weight-bold text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
            {{ Auth::user()->first_name }} {{ Auth::user()->last_name }}<span class="caret"></span>
        </a>

        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="{{ route('logout') }}"
              onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
            <a class="dropdown-item" href="{{url('user/change-password')}}">
              Change Password
            </a>
            <a class="dropdown-item" href="{{url('user/profile')}}">
              Profile
            </a>
        </div>
    </li>
    @endguest
  </ul>
