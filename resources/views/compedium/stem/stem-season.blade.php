@extends('layouts.admin')

@section('header')
    {{$stem->value}}({{$stem->name}}) Attributes
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/stem/list')}}">Stem Attributes Management</a></li>
        <li class="breadcrumb-item active">{{$stem->value}}({{$stem->name}})</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <h2>{{$stem->name}} Attributes</h2>
    <div class="row mt-1">
        <div class="col-md-1 pt-2 pb-2" style="writing-mode: vertical-lr;transform: rotate(180deg);">
            @include('partial.stem-tabs')
        </div>
        <div class="col-md-11 mt-2">
            <single-attributes-stem attribute="Season" id="{{$stem->id}}"></single-attributes-stem>
        </div>
    </div>
</div>
@endsection
