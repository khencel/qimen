<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <meta name="user-token" content="{{ auth()->check() ? auth()->user()->api_token: '' }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{asset('css/canvas.css')}}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script
      src="https://www.paypal.com/sdk/js?client-id=ARLhScrYo37z8zu3gUfU1V2jk_LgI0-IYTmToryoiS3mizO_pmySiKQsqRg-y1RZxgSbYovZKh08XFIY"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
    </script>
    <style scoped>
        canvas{
          background-color: rgba(0, 0, 0, 0.6);
          height: 150px !important;
          overflow-x: hidden;
          width: 100% !important;
        }
    </style>
</head>
<body>
    <div id="particle-canvas" style="max-height:150px;">
        <div style="height: auto;width: 100%;position: absolute;z-index:9999;">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" style="z-index: 1" href="#"><img src="{{asset('img/logo.png')}}" class="logo" alt=""></a>
                        <button class="navbar-toggler" style="z-index: 1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
      <div class="container">
        @yield('content')
      </div>
      
    </div>
    @include('partial.footer')
    
    <script src="{{ asset('js/canvas.js') }}"></script>
    <script src="{{asset('js/app.js')}}" defer></script>
</body>
</html>