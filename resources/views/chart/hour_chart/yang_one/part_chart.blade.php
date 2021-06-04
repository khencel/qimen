@extends('layouts.admin')

@section('header')
    <span class="text-capitalize">{{$chart->hourStem->value}} {{$chart->hourBranch->name}} {{$chart->hourElement->name}} {{$chart->hourEnglish->name}}</span>
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active">Chart Management</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <div class="mt-2">
        @include('partial.hour-chart.tab_chart')
            <part-hour-chart label="{{$label}}" type="{{$type}}" structure="{{$structure}}" center="{{$chart->center->value}}" id="{{$id}}" category="{{$category}}"></part-hour-chart>
        </div>
    </div>
</div>

@endsection
