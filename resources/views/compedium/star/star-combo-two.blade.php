@extends('layouts.admin')

@section('header')
    The Heavenly {{$star->name}}
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/star/combo/two')}}">Star with Door and Gua Evidential Occurrences</a></li>
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
            <star-combo-two id="{{$star->id}}"></star-combo-two>
        </div>
    </div>
</div>
@endsection
