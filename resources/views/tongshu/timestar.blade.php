@extends('layouts.admin')

@section('header')
    Time Star
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active">Time Star</li>
    </ol>
@endsection

@section('content')
<div> 
    <time-star-index></time-star-index>
</div>
@endsection
