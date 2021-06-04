@extends('layouts.landing')

@section('content')
<div class="text-white rounded d-none d-sm-block" style="width: 100%;position: absolute;z-index:9999;top:30%;width:400px;height:auto;left:10%">
    <div>
        <p style="font-weight: bold;font-size:40px;">
            We're a Results Driven digital agency.
        </p>
        
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo temporibus, aut corrupti perferendis cupiditate. Fuga laborum, ab aspernatur dolorem natus aliquam repudiandae fugit a nesciunt alias tenetur eos voluptatibus.
        </p>
        <div>
            <div class="cus-botton from-left">Sign Up</div>
        </div>
    </div>
    
</div>
<div class="bg-white p-5 rounded" style="width: 100%;position: absolute;z-index:9999;top:30%;width:400px;height:auto;right:10%">
    <form method="POST" action="{{ route('login') }}" class="form-signin">
        @csrf
        <div class="text-center">
            <h1 class="h3 mb-3 font-weight-bold">Please sign in</h1>
        </div>
        <div class="form-label-group">
        <input type="email" id="email" style="height: 50px;background-color:#F3F3F3" class="bg-linen form-control mb-3 @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" autocomplete="email" placeholder="Email address" required autofocus>
        @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        </div>
        <div class="form-label-group">
        <input type="password" id="password" style="height: 50px;background-color:#F3F3F3" class=" form-control mb-3 @error('password') is-invalid @enderror" name="password" autocomplete="current-password" placeholder="Password" required>
        @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        </div>
        
        <div class="checkbox">
        <label>
            <input type="checkbox" value="remember-me" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}> Remember me
        </label>
        </div>
        <div class="mb-3">
            @if (Route::has('password.request'))
                <a class="btn btn-link" href="{{ route('password.request') }}">
                    {{ __('Forgot Your Password?') }}
                </a>
            @endif
        </div>
        <button class="buttonSuccess btn-block text-white mb-5" type="submit">Sign in</button>
    </form>
</div>
    
@endsection

