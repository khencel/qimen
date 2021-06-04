@extends('layouts.admin')

@section('header')
    Eight Trigrams
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="/home">Dashboard</a></li>
        <li class="breadcrumb-item active">Palace Management</li>
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
            <th>Palace</th>
            <th>Action</th>
        </thead>
        <tbody>
            @foreach ($trigram as $item)
                <tr>
                    <td>{{$item->name}}</td>
                    <td>
                        <a href="{{ url('/trigram/palace/'.$item->id) }}">
                            <span class="badge button-success p-2 text-dark cursor-pointer">Attributes</span>
                        </a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    
        
    
</div>
@endsection
