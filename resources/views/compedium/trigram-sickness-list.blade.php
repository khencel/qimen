@extends('layouts.admin')

@section('header')
    {{$trigram->name}}
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="/trigram/list">Palace Management</a></li>
        <li class="breadcrumb-item active">{{$trigram->name}} Palace</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <h2>{{$trigram->name}} Attributes</h2>
    <div class="row mt-1">
        <div class="col-md-1 pt-2 pb-2" style="writing-mode: vertical-lr;transform: rotate(180deg);">
            @include('partial.trigram-tabs')
        </div>
        <div class="col-md-11 mt-2">
            <attributes-list attribute="Sickness" id="{{$trigram->id}}"></attributes-list>
        </div>
    </div>
</div>
@endsection
