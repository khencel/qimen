@extends('layouts.admin')

@section('header')
    The Eight Door with Stem
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/home')}}">Dashboard</a></li>
        <li class="breadcrumb-item active">The Eight Door with Stem</li>
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
            <th>Door</th>
            <th>Action</th>
        </thead>
        <tbody>
            @foreach ($door as $item)
                <tr>
                    <td>{{$item->name}} Door</td>
                    <td>
                        <a href="{{ url('/door/door/stem/'.$item->id) }}">
                            <span class="badge button-success p-2 text-dark cursor-pointer">Attributes</span>
                        </a>
                    </td>
                </tr>
            @endforeach 
        </tbody>
    </table>
</div>
@endsection
