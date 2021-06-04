@extends('layouts.main')

@section('header')
    Change Password
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
    <user-change-password></user-change-password>
</div>
@endsection
