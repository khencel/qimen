@extends('layouts.admin')

@section('header')
    Chart South East
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="/chart/list">Chart Management</a></li>
        <li class="breadcrumb-item active">Chart</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif   
    <div class="card">
        <div class="card-header">South Chart</div>

        <div class="card-body">
            <chart-tab chart_id="{{$id}}" type="{{$type}}"></chart-tab>
            <chart-s chart_id="{{$id}}" type="{{$type}}"></chart-s>
        </div>
    </div>
        
</div>
@endsection
