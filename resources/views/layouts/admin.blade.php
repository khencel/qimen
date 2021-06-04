
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="user-token" content="{{ auth()->check() ? auth()->user()->api_token: '' }}">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Qi Men</title>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  
  <style>
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
    }

    .sidenav a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 15px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }

    .sidenav a:hover {
      color: #f1f1f1;
    }

    .sidenav .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 17px;
      margin-left: 50px;
    }

    @media screen and (max-height: 450px) {
      .sidenav {padding-top: 15px;}
      .sidenav a {font-size: 17px;}
    }
    .tabs-format{
      border-left: 1px solid gray;
      cursor: pointer;
      color: black;
    }
    
    .tab-active{
      border-left: none !important;
      border: 1px solid gray;
      font-weight: bold;
      background-image: linear-gradient(#9CD946, #F77925);
    }

    .tabs-format:hover {
      background-image: linear-gradient(#9CD946, #F77925);
      color: white;
    }

  .cursor-pointer{
    cursor: pointer;
  }

  .v-ring1{
    margin: 20% auto;
  }
  .v-ring2{
    height: 100px !important;
    widows: 100px !important;
    border: 6px solid rgb(246,123,38) !important;
  }
  .v-ring3{
    height: 100px !important;
    widows: 100px !important;
    border: 6px solid rgb(157,216,70) !important;
  }

  .v-pulse1{
    background-color: rgb(246,123,38) !important;
  }
  .v-pulse2{
    background-color: rgb(199,172,55) !important;
  }
  .v-pulse3{
    background-color: rgb(157,216,70) !important;
  }
  </style>
</head>
<body class="hold-transition sidebar-mini sidebar-collapse">
<div class="wrapper" id="app">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
            class="fas fa-th-large"></i></a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-light-primary elevation-4" style="background-image:url({{asset('img/bg-sidebar.png')}});background-size:300px 600px;background-repeat: no-repeat;">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="{{ asset('img/qimen-logo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3 bg-white"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Qimen JC</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{ asset('img/user.png') }}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{Auth::user()->first_name}} {{Auth::user()->last_name}}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      @include('partial.navigation')
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">@yield('header')</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            @yield('breadcrum')
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="pl-3 pr-3" style="border-top:5px solid;border-color:violet">
         @yield('content')
      </div>
          
     
        
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    @include('partial.sidebar')
  </aside>

  <div id="mySidenav" class="sidenav" style="z-index: 9999;">
      @include('partial.hour-chart.yang-sidebar')
  </div>

  <div id="mySidenavYin" class="sidenav" style="z-index: 9999;">
    @include('partial.hour-chart.yin-sidebar')
</div>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Qi-Men
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2020 <a href="/">Period 9 Strategic Management Services</a>.</strong> All rights reserved.
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="{{asset('js/app.js')}}"></script>
<script>
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openNavYin() {
    document.getElementById("mySidenavYin").style.width = "250px";
  }
  
  function closeNavYin() {
    document.getElementById("mySidenavYin").style.width = "0";
  }
</script>
</body>
</html>
