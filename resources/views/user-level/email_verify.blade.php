@extends('layouts.verify_email')

@section('content')
    <div class="center bg-white shadow p-4">
        <div class="text-center">
            <div style="width: 10%" class="m-auto">
                <img src="/img/qimen-logo.png" class="img-fluid" alt="">
            </div>
            <div class="h2 mt-3">
                Verify your email address
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint! Natus iure dolor vel, ipsa nobis quia aperiam. Quae repudiandae molestias fuga architecto eligendi sapiente dolor assumenda beatae asperiores aliquid.
                </p>
            </div>
            <div>
                <a href="/">
                    <button class="btn button-success">Back to Qimen Page</button>
                </a>
            </div>
        </div>
        
    </div>
@endsection

<style>
    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
    }
</style>



