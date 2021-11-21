<template>
    <div>
        <div class="content-body">
            <!-- row -->
            <div class="container-fluid">
				    
                <div class="row page-titles mx-0">
                    <div class="col-sm-6 p-md-0">
                        <div class="welcome-text">
                            <h4>Update Category</h4>
                        </div>
                    </div>
                    <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/admin/home">Home</router-link></li>
                            <li class="breadcrumb-item active"><router-link to="/admin/category">Category</router-link></li>
                            <li class="breadcrumb-item active"><span>Update</span></li>
                        </ol>
                    </div>
                </div>
				
				<div class="row">
					<div class="col-xl-12 col-xxl-12 col-sm-12">
                        <div class="card">
                            <div class="card-header">
								<h5 class="card-title">Category Info</h5>
							</div>
							<div class="card-body">
                                <form @submit.prevent="categoryUpdate">
									<div class="row">
										<div class="col-lg-6 col-md-6 col-sm-12">
											<div class="form-group">
												<label class="form-label">Category Name</label>
												<input type="text" v-model="form.categoryName" class="form-control">
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-sm-12">
											<div class="form-group">
												<label class="form-label">Icon Name</label>
												<input type="text" class="form-control" v-model="form.categoryIcon">
											</div>
										</div>
										<div class="col-lg-12 col-md-12 col-sm-12">
											<button type="submit" class="btn btn-primary">Submit</button>
										</div>
									</div>
								</form>
                            </div>
                        </div>
                    </div>
				</div>
				
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import axios from 'axios';
export default {
    name: "edit-category",
    created() {
        if (!User.loggedIn()) {
            this.$router.push({ name: '/admin/login' })
        }
        let id =  this.$route.params.id
        axios.get('https://elnic-api.herokuapp.com/api/categories/'+id)
            .then( ({data}) => (this.form = data))
            .catch( error => {
                console.log(error)
            })
    },
    data(){
        return{
            form:{
                categoryName : '',
                catgoryIcon : '',
            },
            errors: {}
        }
    },
    methods: {
        categoryUpdate(){
            let id =  this.$route.params.id
            axios.put('https://elnic-api.herokuapp.com/api/categories/'+id,this.form)
                .then( () => {
                    this.$router.push({ name: 'category'});
                    Toast.fire({
                         icon: 'success',
                        title: 'Update Category Successfully'
                    });
                })
                .catch(error => this.errors = error.response.data.errors);
        }
    }
}
</script>

<style scoped>

</style>
