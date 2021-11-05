@extends('layouts.admin')

@section('header')
<div id="chartContent">
    {{$chart->chart->stem->value}} {{$chart->chart->branch->name}} ({{$chart->chart->element->name}} {{$chart->chart->english->name}})
    @php
        $month = array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
    @endphp
    @if ($index == 0)
        {{$month[$chart->chart->yearChart->month-11-1]}} {{$chart->chart->yearChart->year+1}}
    @else
        {{$month[$chart->chart->yearChart->month-1]}} {{$chart->chart->yearChart->year}}
    @endif
</div>
    
    
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/monthChart')}}">Month chart in the current year</a></li>
        <li class="breadcrumb-item active">{{$chart->chart->stem->value}} {{$chart->chart->branch->name}} ({{$chart->chart->element->name}} {{$chart->chart->english->name}})</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <month-chart-show id="{{$id}}"/>
</div>
@endsection
