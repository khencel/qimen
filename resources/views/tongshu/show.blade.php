@extends('layouts.admin')

@section('header')
    {{$month}}
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="#">Dong Gong Management</a></li>
        <li class="breadcrumb-item active">{{$month}}</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif   
    
    <tong-shu-show id="{{$id}}"></tong-shu-show>
</div>
@endsection
