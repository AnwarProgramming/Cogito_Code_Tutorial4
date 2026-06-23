// Every single-File Component(SFC) file have these three tags script, template and style
// Data Interpolation and data binding using {{}}
// Attribute binding with v-bind
// Conditional rendering with v-if, v-else-if, v-else
// Invoking events/methods with v-on:click
// Using v-show to conditionally display an element
// v-model for two way binding

// script is used to write js
<script setup>
  import {ref} from 'vue'
  //It simply imports Vue's function for creating reactive state that Vue can track and automatically reflect in the UI.

  const name = ref('Henry Ford')
  console.log(name)
  const url = 'src/assets/logo.svg'

  function changeName(){
    name.value = "Vue.js Developer"
  }

  const response = ref([
    {id:1, name:'Product_1', price:100},
    {id:2, name:'Product_2', price:200},
    {id:3, name:'Product_3', price:300}
  ])

  const product_cred = {
    name:"",
    price:""
  }

  function addProduct(){
    response.value.push(product_cred)
  }


  const isAuthenticated = ref(false)

  const role = ref('admin')
</script>


// template is used to write html
<template>
  <div>
    <h1>Welcome to my Vue App!</h1>
    <p>This is a simple Vue.js application</p>

    <p>Hello World!!! form {{ name }} !!!</p>

    <!-- <img src="@/assets/logo.svg" alt = "Vue Logo" width = "100" height="100"> -->
    <img v-bind:src="url" alt = "Vue Logo" width = "100" height="100">
    <img :src="url" alt = "Vue Logo" width = "100" height="100">
    <!--we can use ':' instead of 'v-bind:'-->


    <!-- <div v-if="isAuthenticated">
      <p> Response  = {{ response }}</p>
    </div> -->
    <div v-if="role === 'admin'">
      <p> Response  = {{ response }}</p>
    </div>
    <div v-else-if="role === 'manager'">
      <p>You have access to the product details</p>
    </div>
    <div v-else>
      <p>You are not authorized to view this content</p>
    </div>


    <p v-show="isAuthenticated">You are logged in.</p>
    <p v-if="isAuthenticated">You are logged in.</p>


    <!-- <input type="button" value="Change Name" v-on:click="changeName"> -->
    <input type="button" value="Change Name" @click="changeName">

    <input type="button" value="Change IsAuthenticated" v-on:click="()=>{isAuthenticated = true}">


    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in response" v-bind:key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>

    <div>
      <form @submit.prevent="addProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="product_cred.name">
        <label for="email">Price:</label>
        <input type="number" id="price" v-model="product_cred.price">
      <button type="submit"  >Submit</button>
      </form>
    </div>



  </div>
</template>


// style is used to write css
<style scoped>
</style>