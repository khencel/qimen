@extends('layouts.admin')

@section('header')
Stem and Stem Combination Summary Table 
@endsection

@section('breadcrum')
    <ol class="breadcrumb float-sm-right">
        <li class="breadcrumb-item"><a href="{{url('/home')}}">Dashboard</a></li>
        <li class="breadcrumb-item active">Stem and Stem Combination Summary Table 
        </li>
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
        <div class="row">
            <div class="col-1 border">
                Heaven Plate
                <hr>
                Earth Plate
            </div>
            <div class="col-11 border p-0 text-center bg-success">
                @foreach ($stem as $item)
                    <div class="float-left border" style="width: 10%;height:100%">
                        {{$item->stemList->value}}
                    </div>
                @endforeach
            </div>
        </div>
        @foreach ($stem as $item)
        <div class="row">
            <div class="col-1 border bg-primary">
                {{$item->stemList->value}}
            </div>
            <div class="col-11 border p-0 text-center">
                @foreach ($stemList as $item1)
                    @if ($item->stem_id==$item1->earthly_stem)
                    <div class="float-left border-right p-1" style="width: 10%;height:100%">
                        {{$item1->english_term}}
                    </div>
                    @endif
                @endforeach
            </div>
            
        </div>  
        @endforeach
            
        
    </div>
</div>
@endsection
