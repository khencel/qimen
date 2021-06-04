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
        <chart-generate-point 
            jiabranch="{{$chart->hourBranch->name}}" 
            jiaformation="{{$jiaFormation}}" 
            palace="SE" 
            text='Zun Wood' 
            day="{{$day}}" 
            type="{{$type}}" 
            stem="{{$chart->hourStem->value}}" 
            structure="{{$structure}}" 
            chart_numb="{{$category}}" 
            id="{{$id}}" 
            center="{{$chart->center->value}}" 
            image="{{$chart->center->photo}}"
            chart="{{$chart->day1Stem->value}},{{$chart->day2Stem->value}}"
            >
        </chart-generate-point>
    </div>
</div>

@endsection
