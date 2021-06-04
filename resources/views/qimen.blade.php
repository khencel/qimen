@extends('layouts.landing')

@section('content')
    <div class="text-white text-center" style="position: absolute;z-index:9999;top:30%;width:60%;left:50%;margin-left:-30%;height:auto">
        <h1 class="font-weight-bold" style="font-size:60px;">
            Qimen
        </h1>
        <p>
            It was recorded that Oracle Methods had been used in ancient China
            since the time of the Warring States Period in 700 BC some 3,000
            years ago. According to some sources, it dates back further to the
            Yellow Emperor period, 5,000 years ago. These methods are collectively
            known as the Three Sacred Methods or Three Styles (San Shi),
            China’s premier metaphysical art, which are used mainly to forecast
            or calculate the outcomes or luck in relation to the aspects of time
            and space (direction). The Three Sacred Methods are Tai Yi Shen Shu
            , Liu Ren Shen Ke and Qi Men Dun Jia. 
        </p>
        <a href="{{ asset('/register') }}" style="text-decoration: none;:none;">
            <div class="cus-botton from-left">Sign Up</div>
        </a>
    </div>
@endsection



