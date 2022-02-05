@extends('layouts.admin')

@section('header')
<span class="text-capitalize">
    {{$name}}
</span>
    
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{ url('/best-year/notification/index') }}">Notification</a></li>
        <li class="breadcrumb-item active"><a href="#" class="text-capitalize">{{$name}}</a></li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif   
    <notification-show id="{{$id}}"></notification-show>
</div>
@endsection
