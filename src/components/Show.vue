<template>
   <table class="table">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">AGE</th>
      <th scope="col">Gender</th>
      <th scope="col">School</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
       <tr v-for="G_Student in Table" :key="G_Student.id">
         <th scope="row">{{G_Student.id}}</th>
         <td scope="row">{{G_Student.Name}}</td>
         <td scope="row">{{G_Student.Age}}</td>
         <td scope="row">{{G_Student.Gender}}</td>
         <td scope="row">{{G_Student.School}}</td>
         <td><button type="button"  class="btn btn-primary"  @click="this.$emit('edit',G_Student.id)">Edit</button></td>
         <td><button type="button"  class="btn btn-danger" @click="Delete(G_Student.id)">Delete</button></td>
      </tr>
  </tbody>
</table>
</template>
<script>
export default {
  props:["Table"],
  data(){
    return {
      url:"",
    }
  },
  methods:{
    Delete(id){
      console.log("delete")
      this.url=`http://localhost:3000/Student/${id}`
      fetch(this.url,{method:'DELETE'})
          .catch(error => console.log(error))
          this.$emit('delete',id)
      },
      
    }
  }
</script>
<style>
  
</style>