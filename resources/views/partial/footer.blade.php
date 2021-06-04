<footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row m-0">
      <div class="col-12 col-md">
        <img class="mb-2" src="/img/logo.png" alt="" style="width: 30%">
        <small class="d-block mb-3 text-muted">&copy; 2020-2021</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">3 victory days (qi men dun jia)</a></li>
          <li><a class="text-muted" href="#">Generate Personalized Tong Shu Calendar</a></li>
          <li><a class="text-muted" href="#">Generate your personalized BaZi Chart</a></li>
          <li><a class="text-muted" href="#">Calculate your personalized Qi Men Destiny Palace</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Navigation</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="{{ asset('/') }}">Home</a></li>
          @guest
            <li><a class="text-muted" href="{{ asset('/login') }}">Sign In</a></li>
            <li><a class="text-muted" href="{{ asset('/register') }}">Sign Up</a></li>
          @endguest
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="{{asset('/privacy')}}">Data Privacy</a></li>
          <li><a class="text-muted" href="{{asset('/copyright')}}">Copyright Notice</a></li>
          <li><a class="text-muted" href="{{asset('/#about')}}">About Us</a></li>
        </ul>
      </div>
    </div>
<div class="footer-copyright text-center py-3">© 2020 Copyright:
  <a href="https://mdbootstrap.com/"> jennelcheng.com</a>
</div>
</footer>