<template>
    <div>
        <div class="row">
            <div class="col-md-5">
                
                <div class="mt-5">
                    <table>
                        <tr>
                            <td><strong>Name:</strong></td><td class="text-capitalize">{{users.name}}</td>
                        </tr>
                        <tr>
                            <td><strong>Email:</strong></td><td>{{users.email}}</td>
                        </tr>
                        <tr>
                            <td><strong>Contact No.:</strong></td><td>{{users.mobile != null?users.mobile:'none'}}</td>
                        </tr>
                        <tr>
                            <td><strong>Country:</strong></td><td>{{users.country}}</td>
                        </tr>
                    </table>
                </div>
                <div class="mt-3">
                    <strong>
                        <label for="">Message:</label>
                    </strong>
                    <p>{{users.message}}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-6">
                        <a href="/best-year/notification/index" class="btn btn-primary w-100">Back To Inbox</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-danger w-100" @click="deletenotif">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2'
    export default {
        props:['id'],
        data(){
            return{
                users:{}
            }
        },
        methods: {
            async show(){
                const res = await axios.get(window.besteverLive+'/api/contact/show/'+this.id);
                this.users = res.data;
            },
            deletenotif(){
                 Swal.fire({
                    icon: 'question',
                    title: 'Oops...',
                    text: 'Are you sure? You want to delete this message?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        const res = axios.get(window.besteverLive+'/api/contact/delete/'+this.id);
                        window.location = '/best-year/notification/index';    
                    }
                })
                
            }
        },
        mounted() {
            this.show();
        }
    }
</script>
