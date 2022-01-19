@extends('layouts.admin')

@section('header')
{{$pillar}} Day
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item">Personalised Forecast Management</li>
        <li class="breadcrumb-item active">{{$pillar}}</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif  
    @include('best_year_ever.partial.pillar')
    <pillar-show-luck id="{{$id}}"></pillar-show-luck>  
</div>
@endsection