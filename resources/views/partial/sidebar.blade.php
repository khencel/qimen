<div class="p-3">
    <h5>Setting</h5>
    <div style="line-height:10px;">
        <p>
            <a class="" href="{{ route('logout') }}"
                onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </p>
        <p>
            <a href="{{ url('profile') }}">
                Profile
            </a>
        </p>
        <p>
            <a href="{{ url('change-password') }}">
                Change Password
            </a>
        </p>
    </div>
    
  </div>