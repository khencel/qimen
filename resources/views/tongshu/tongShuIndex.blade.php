@extends('layouts.admin')

@section('header')
    Suit and Avoid Management
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active">Suit and Avoid Management</li>
    </ol>
@endsection

@section('content')
<div> 
    <suit-avoid-index></suit-avoid-index>
</div>
@endsection
