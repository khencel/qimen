@extends('layouts.admin')

@section('header')
    Star with Hour Evidential Occurrences
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/home')}}">Dashboard</a></li>
        <li class="breadcrumb-item active">Star with Hour Evidential Occurrences</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <table class="table table-hover">
        <thead class="thead-dark">
            <th>Star</th>
            <th>Action</th>
        </thead>
        <tbody>
            @foreach ($star as $item)
                <tr>
                    <td>The Heavenly {{$item->name}}</td>
                    <td>
                        <a href="{{ url('/star/combo/one/'.$item->id) }}">
                            <span class="badge button-success p-2 text-dark cursor-pointer">Attributes</span>
                        </a>
                    </td>
                </tr>
            @endforeach 
        </tbody>
    </table>
</div>
@endsection
