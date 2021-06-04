@extends('layouts.landing')


@section('content')
    <form method="POST" action="{{ route('login') }}" class="form-signin">
        @csrf
        <div class="text-center mb-4">
        <img class="mb-4" src="{{ asset('img/qimen-logo.png') }}" alt="" width="72" height="72">
        </div>
        <h1 class="h3 mb-3 font-weight-normal text-muted">Please sign in</h1>
        <div class="form-label-group">
        <input type="email" id="email" class="text-center form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" autocomplete="email" placeholder="Email address" required autofocus>
        <label for="email">Email address</label>
        @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        </div>

        <div class="form-label-group">
        <input type="password" id="password" class="text-center form-control @error('password') is-invalid @enderror" name="password" autocomplete="current-password" placeholder="Password" required>
        <label for="password">Password</label>
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
        <button class="btn btn-lg btn-block text-white" style="background: #64AD2F" type="submit">Sign in</button>
    </form>
@endsection
