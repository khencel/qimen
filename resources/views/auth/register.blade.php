@extends('layouts.landing')

@section('content')
<div class="text-white rounded" style="width: 100%;position: absolute;z-index:9999;top:30%;width:400px;height:auto;left:10%">
    <div>
        <p style="font-weight: bold;font-size:40px;">
            We're a Results Driven digital agency.
        </p>
        
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo temporibus, aut corrupti perferendis cupiditate. Fuga laborum, ab aspernatur dolorem natus aliquam repudiandae fugit a nesciunt alias tenetur eos voluptatibus.
        </p>
        <div>
            <div class="cus-botton from-left">Sign Up</div>
        </div>
    </div>
    
</div>
<div class=" text-center rounded bg-white pb-4" style="position: absolute;z-index:9999;top:20%;width:600px;right:10%;height:auto">
    <h2 class="mt-2 mb-4 font-weight-bold">Sign Up</h2>
    <user-registration></user-registration>
</div>

@endsection
