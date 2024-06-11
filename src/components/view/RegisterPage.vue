<template>
    <div style="height: 100vh; background-image: linear-gradient(180deg, rgba(255,0,0,0), rgba(255,0,0,1));" class="d-flex justify-content-center align-items-center">
<div class="container">
    <span class="close-icon" @click="closeForm"><i class="fa fa-close"></i></span>
    <form  @submit.prevent="Register">
    <h2>Register New Account</h2>
    <label > Email:</label>
    <input type="email" required v-model="email">

    <label > Password:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{passwordError}}</div>

    <label> Confirm Password</label>
    <input type="password" required v-model="ConfirmPassword" @input="validateForm">
    <div v-if="passwordError" class="error">{{passwordError}}</div>

    <div class="submit">
        <button>Register</button>
    </div>
  </form>
</div>
<FooterView />
</div>

</template>
  
  <script>
  import FooterView from './FooterView.vue';
  //import axios from 'axios'
  export default {
    name: 'RegisterPage',
    components:{
        FooterView,
    },
    data()
    {
        return{
            email:'',
            password: '',
            passwordError: '',
            ConfirmPassword:''
        }
    },
    methods:{
        closeForm(){
            this.$router.go(-1);
        },
        Register(){
            this.passwordError = this.password.length > 4  ? 
            '' : 'Password must be more than 5 word'
            const user = { email: this.email, password: this.password }
            // Store user data in localStorage
            localStorage.setItem('UserData', JSON.stringify(user));
            // Optionally, you can redirect the user to another page after registration
            this.$router.push('/login');

        },
            validateForm(){    
            this.passwordError = this.password.length > 5 ? 
            '' : 'Password must be more than 5 word'

                if (this.password !== this.ConfirmPassword){
                    this.passwordError = 'Passwords do not match';
                    return false;
                }else{
                    this.passwordError ='';
                    return true;
                }
        }
    }
  }
  </script>
  
  <style>

.container {
  position: relative;
  max-width: 420px;
  
}

  form{
    margin: auto auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    border: 2px solid #000; /* Add a border with desired color */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
    
    
}
h2{
    font-size: 24px;
    text-align: center;
    padding-bottom: 20px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    
}
input{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing:border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;

}

button{
    background: #0b6dff;
    border: 10px;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
.error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
.close-icon {
  position: absolute;
  top: -50px;
  right: -30px;
  cursor: pointer;
  color: black;
  font-size: 40px;
}
  </style>