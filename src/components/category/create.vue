<template>
    <div class="content-body">
        <div class="container-fluid">
                <div class="row page-titles mx-0">
                    <div class="col-sm-6 p-md-0">
                        <div class="welcome-text">
                            <h4>Add Category</h4>
                        </div>
                    </div>
                    <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/admin/home">Home</router-link></li>
                            <li class="breadcrumb-item active"><router-link to="/admin/categoy">Categories</router-link></li>
                            <li class="breadcrumb-item active"><router-link to="/admin/create-category">Add Category</router-link></li>
                        </ol>
                    </div>
                </div>
				
				<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-body">
								<form  @submit.prevent="addCategory">
									<div class="row">
										<div class="col-lg-6 col-md-6 col-sm-12">
											<div class="form-group">
												<label class="form-label">Category Name</label>
												<input v-model="form.categoryName" type="text" class="form-control">
											</div>
										</div>
                                        <div class="col-lg-6 col-md-6 col-sm-12">
											<div class="form-group">
												<label class="form-label">Category Icon</label>
												<input v-model="form.categoryIcon" type="text" class="form-control">
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
</template>
<script type="text/javascript">
import axios from 'axios';
export default {
    name : "create-category",
    created() {
        if (!User.loggedIn()) {
            this.$router.push({ name: '/admin/login' })
        }
    },
    data() {
        return {
            form: {
                categoryName: '',
                categoryIcon: '',
            },
            errors : {}
        }
    },
    methods: {
        addCategory(){
            axios.post('https://elnic-api.herokuapp.com/api/categories',this.form)
                .then( () => {
                    this.$router.push({ name: 'category'});
                     Toast.fire({
                         icon: 'success',
                        title: 'Add Category Successfully'
                    });
                })
                .catch(error => { this.errors = error; console.log(this.errors) });
        }
    }

}
</script>