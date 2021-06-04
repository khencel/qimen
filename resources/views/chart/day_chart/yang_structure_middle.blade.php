@extends('layouts.admin')

@section('header')
    Yang Structure Middle
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
    @include('partial.yang_structure_tab')   
    <day-chart-list structure_type="Yang Structure" cycle="Middle Cycle"></day-chart-list>
</div>
@endsection
