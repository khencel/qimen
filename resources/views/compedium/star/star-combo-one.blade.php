@extends('layouts.admin')

@section('header')
    The Heavenly {{$star->name}}
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/star/combo/one')}}">Star with Hour Evidential Occurrences</a></li>
        <li class="breadcrumb-item active">The Heavenly {{$star->name}}</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    
    <div class="row mt-1">
        <div class="w-100 p-2">
            <star-combo-one id="{{$star->id}}"></star-combo-one>
        </div>
    </div>
</div>
@endsection
