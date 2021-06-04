@extends('layouts.admin')

@section('header')
{{$stem->value}}({{$stem->name}}) Formation
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/stem/formation')}}">The Ten Stem Formation</a></li>
        <li class="breadcrumb-item active">{{$stem->value}}({{$stem->name}}) Formation</li>
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
            <stem-formation id="{{$stem->id}}"></stem-formation>
        </div>
    </div>
</div>
@endsection
