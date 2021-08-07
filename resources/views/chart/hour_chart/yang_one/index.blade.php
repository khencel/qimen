@extends('layouts.admin')

@section('header')
    <span class="text-capitalize">{{$basename}} {{$structure}} Structure</span>
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active">Chart Management</li>
    </ol>
@endsection

@section('content')
<div>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <div>

    </div>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Day [1]</th>
                <th>Day [2]</th>
                <th>Hour Stem</th>
                <th>Hour Branch</th>
                <th>Hour Element</th>
                <th>Hour English</th>
                <th>Interval</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
                @foreach ($charts as $key => $chart)
                    
                    <tr>
                        <td>{{$key+1}}</td>
                        <td class="">{{$chart->id}}</td>
                        <td class="text-capitalize">
                            {{$chart->day1stem->value}}
                            <br>
                            {{$chart->day_1_structure}} {{$chart->element1->name}}
                        </td>
                        <td class="text-capitalize">
                            {{$chart->day2stem->value}}
                            <br>
                            {{$chart->day_2_structure}} {{$chart->element2->name}}
                        </td>
                        <td>
                            {{$chart->hourStem->value}}
                        </td>
                        <td>
                            {{$chart->hourBranch->name}}
                        </td>
                        <td>
                            {{$chart->hourElement->name}}
                        </td>
                        <td>
                            {{$chart->hourEnglish->name}}
                        </td>
                        <td>
                            {{$chart->interval}}
                        </td>
                        <td>
                            <a href="{{ url('hour/'.$basename.'/'.$structure.'/'.'preview/'.$chart->id) }}">
                                <button class="btn btn-info"><i class="fas fa-eye"></i> View</button>
                            </a>
                        </td>
                    </tr>
                
            @endforeach
            
        </tbody>
        <tfoot>
            <tr>
                <th>Day [1]</th>
                <th>Day [2]</th>
                <th>Hour Stem</th>
                <th>Hour Branch</th>
                <th>Hour Element</th>
                <th>Hour English</th>
                <th>From</th>
                <th>To</th>
                <th>Action</th>
            </tr>
        </tfoot>
    </table>
</div>

@endsection
