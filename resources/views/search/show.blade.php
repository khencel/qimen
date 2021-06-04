@extends('layouts.main')

@section('content')
<div class="mt-5">
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif   
    @php
        $url = url()->current();
        $path = explode("/", $url);
    @endphp
    <show-search id="{{$path[4]}}" keyword="{{$path[5]}}" category="{{$path[6]}}"></show-search>
</div>
@endsection
