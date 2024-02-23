<template>
    <div class="container">
     <form> 
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputEmail4">Name</label>
           <input type="text" class="form-control" v-model="Student.Name" placeholder="Zakaria Fahim" required>
         </div>
         <div class="form-group col-md-6">
           <label for="inputPassword4">Age</label>
           <input type="number" v-model="Student.Age" class="form-control" placeholder="23"  required>
         </div>
         <div class="form-group col-md-12">
           <label for="inputPassword4">School</label>
           <input type="text" v-model="Student.School" class="form-control" placeholder="Lycee Abdelmalek Saadi"  required>
         </div>
         <div class="mb-4">
           <div class="form-check form-check-inline">
             <input class="form-check-input" v-model="Student.Gender" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male">
             <label class="form-check-label" for="inlineRadio1">Male</label>
           </div>
           <div class="form-check form-check-inline">
             <input class="form-check-input" type="radio" v-model="Student.Gender" name="inlineRadioOptions" id="inlineRadio2" value="Female" >
             <label class="form-check-label" for="inlineRadio2">Female</label>
           </div>
         </div>
       </div>
       <button type="submit" v-if="!btn_update" @click.prevent="AddStudent" class="btn btn-primary">Add</button>
       <button type="submit" v-if="btn_update" @click.prevent="UpdateStudent(Student.id)" class="btn btn-danger">Update</button>
     </form>
     <Show :Table="G_Student" style="margin-top:20px" @delete="deleteid($event)"  @edit="editid($event)"/>
    </div>
 </template>
 
 <script>
   import Show from './components/Show.vue';
 export default {
   components:{
      Show
   },
     data(){
       return {
         btn_update:false,
         btn_id:"",
         Student:{
             id:'',
             Name:'',
             Age:'',
             Gender:'',
             School:''
         },
         url:"http://localhost:3000/Student/",
         G_Student:[]
       }
     },
     methods:{
        deleteid(id){
            const N_Student=this.G_Student
            this.G_Student=this.G_Student.filter(N_Student => N_Student.id != id);
        },
        editid(id){
          let url_id = `http://localhost:3000/Student/${id}`;
          fetch(url_id)
           .then(res => res.json())
           .then(data =>{
               this.Student.id=data.id,
               this.Student.Name=data.Name,
               this.Student.Age=data.Age,
               this.Student.Gender=data.Gender,
               this.Student.School=data.School,
               this.btn_update=true
           })
           .catch(error => console.log(error))
       },
       UpdateStudent(id){
        let url_id = `http://localhost:3000/Student/${id}`
        this.Student.id=String(id)
        alert(this.Student)
        fetch(url_id,{method:'PUT',headers:{'Content-Type':'applicatio/json'},body:JSON.stringify(this.Student)})
            .then(()=> {
              this.G_Student.push(this.Student)
              console.table(this.G_Student)
            })
            .catch(error => console.log(error))
        this.btn_update=false
       },
       AddStudent(){
        this.Student.id=String(this.G_Student.length+1),
        fetch(this.url,{method:'post',headers:{'Content-Type':'applicatio/json'},body:JSON.stringify(this.Student)})
            .then(()=> this.$router.push("/"))
            .catch(error => console.log(error))
       },
        },
     mounted(){
        fetch(this.url)
           .then(res => res.json())
           .then(data =>this.G_Student = data)
           .catch(error => console.log(error))   
     },
}
 </script>
 <style scoped>
     .container{
       width:65%;
       margin-top:20px;
     }
 </style>