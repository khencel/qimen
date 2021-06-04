@extends('layouts.admin')

@section('header')
    {{$deitie->name}} Attributes
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/deitie/list')}}">The Eight Doors</a></li>
        <li class="breadcrumb-item active">{{$deitie->name}} Attributes</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <div class="row mt-1">
        <div class="col-md-1 pt-2 pb-2" style="writing-mode: vertical-lr;transform: rotate(180deg);">
            @include('partial.deitie-tabs')
        </div>
        <div class="col-md-11 mt-2">
            @php
                $url = url()->current();
                $path = dirname($url) . PHP_EOL;
                $basename = basename($path);
            @endphp
            <multiple-attributes attribute="{{ucfirst($basename)}}" id="{{$deitie->id}}"></multiple-attributes>
        </div>
    </div>
</div>
@endsection
