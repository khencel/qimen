@extends('layouts.admin')

@section('header')
    The Ten Stem Formation
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/home')}}">Dashboard</a></li>
        <li class="breadcrumb-item active">The Ten Stem Formation</li>
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
            <th>Stem</th>
            <th>Action</th>
        </thead>
        <tbody>
            @foreach ($stem as $item)
                <tr>
                    <td>{{$item->value}}({{$item->name}})</td>
                    <td>
                        <a href="{{ url('/stem/formation-list/'.$item->id) }}">
                            <span class="badge button-success p-2 text-dark cursor-pointer">Attributes</span>
                        </a>
                    </td>
                </tr>
            @endforeach 
        </tbody>
    </table>
</div>
@endsection
