<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Qi-Men</title>
    <meta name="user-token" content="{{ auth()->check() ? auth()->user()->api_token: '' }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{asset('css/canvas.css')}}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <script
      src="https://www.paypal.com/sdk/js?client-id=ARLhScrYo37z8zu3gUfU1V2jk_LgI0-IYTmToryoiS3mizO_pmySiKQsqRg-y1RZxgSbYovZKh08XFIY"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
    </script>
    <style scoped>
        .sidenav {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #111;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
            text-align:center;
            }

            .sidenav a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;

            }

            .sidenav a:hover{
            color: #f1f1f1;
            }

            .sidenav .closebtn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
            }

            @media screen and (max-height: 450px) {
            .sidenav {padding-top: 15px;}
            .sidenav a {font-size: 18px;}
            }
    </style>
</head>
<body>
    <div id="particle-canvas" style="max-height:780px;">
        <div style="height: auto;width: 100%;position: absolute;z-index:9999;">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" style="z-index: 1" href="#"><img src="{{asset('img/logo.png')}}" class="logo" alt=""></a>
                        {{-- <button class="navbar-toggler" style="z-index: 1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button> --}}
                        <button class="navbar-toggler" style="z-index: 1" type="button" onclick="openNav()" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" style="z-index:1" id="navbarSupportedContent">
                                @include('partial.user_navigation')
                        </div>
                </nav>
            </div>
        </div>
    </div>
    <div id="app">
        @yield('content')
        <div class="w-100" style="position: absolute;z-index:9999;">
            <landing-page-clock></landing-page-clock>
            <landing-page type="day"></landing-page>
            <div class="aboutUs mt-5 row justify-content-center m-0">
                <div id="about" class="col-md-7 text-center wow animate__animated animate__backInLeft" style="margin-top:15%;">
                    <h2 class="mb-5" style="font-size:40px;font-style:bold;">"About Us"</h2>
                    <p>
                        Period 9 Strategic Management is a consulting firm that focuses on business strategies, legal or lawsuit strategies, personal development, investments, property selection guide, date selection for major decision making, and making the most out of life using Chinese Metaphysics tools like Feng Shui, BaZi (8 Characters), Qi Men Dun Jia, Yi Jing and Date Selection. The Company believes that if anything or something of great importance is done timely, then the result is the amazingly awesome!
                    </p>
                </div>
            </div> 
            @can('not_subscriber')
                <div class="mt-4">
                    <subscription-page></subscription-page>
                </div>
            @endcan
            @include('partial.footer')
           
        </div>

        <div id="mySidenav" class="sidenav" style="z-index:9999">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            @include('partial.user_navigation')
        </div>
    </div>
    
    <script src="{{ asset('js/canvas.js') }}"></script>
    <script src="{{asset('js/app.js')}}" defer></script>
    <script src="{{ asset('js/wow.min.js')}}"></script>
    <script>
        new WOW().init();
        function openNav() {
          document.getElementById("mySidenav").style.width = "100%";
        }
        
        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }
        </script>
</body>
</html>