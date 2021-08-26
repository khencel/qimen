@extends('layouts.admin')

@section('header')
    User Management <span class="text-capitalize">{{$t}}</span> 
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active">User Management</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif 
    @if ($t == "qimen")
        <div class="ml-2 mr-2 top-border">
            <user-list type="{{$t}}"></user-list>
        </div>
    @endif

    @if ($t == "forecast")
        <div class="ml-2 mr-2 top-border">
            <user-list type="{{$t}}"></user-list>
        </div>
    @endif
    
</div>
@endsection
