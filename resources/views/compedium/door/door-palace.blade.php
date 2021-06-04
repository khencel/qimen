@extends('layouts.admin')

@section('header')
    {{$door->name}} Door Formation
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/door/palace')}}">The Door and the 8 Palaces</a></li>
        <li class="breadcrumb-item active">{{$door->name}} Door Formation</li>
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
        <div class="w-100 p-2">
            <door-formation id="{{$door->id}}"></door-formation>
        </div>
    </div>
</div>
@endsection
