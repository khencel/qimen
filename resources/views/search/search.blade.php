@extends('layouts.main')

@section('content')
<div class="mt-5">
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif   
    <user-search></user-search>
</div>
@endsection
