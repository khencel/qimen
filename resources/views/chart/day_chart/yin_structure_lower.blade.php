@extends('layouts.admin')

@section('header')
    Yin Structure
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
    @include('partial.yin_structure_tab')   
    <day-chart-list-yin structure_type="Yin Structure" cycle="Lower Cycle"></day-chart-list-yin>
</div>
@endsection
