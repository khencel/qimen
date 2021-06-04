@extends('layouts.admin')

@section('header')
    {{$door->name}} Door
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="/door/door/stem">The Eight Door with Stem</a></li>
        <li class="breadcrumb-item active">{{$door->name}} Door</li>
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
            <door-stem id="{{$door->id}}"></door-stem>
        </div>
    </div>
</div>
@endsection
