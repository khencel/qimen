@extends('layouts.admin')

@section('header')
    {{$animal}}
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item">Animal Sign Management</li>
        <li class="breadcrumb-item active">{{$animal}}</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif  
    @include('best_year_ever.partial.tab')
    <best-year-show-luck id="{{$id}}"></best-year-show-luck>  
</div>
@endsection
