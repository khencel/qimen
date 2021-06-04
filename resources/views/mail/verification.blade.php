@component('mail::message')
Hello {{$data['first_name']}} {{$data['last_name']}}

Please click the button to verify your email.

@component('mail::button', ['url' => 'http://localhost:3000/email/verify/'.$data['id']])
Verify Now!!!
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
