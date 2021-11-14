<template>
    <div>
        <div class="content-body">
				<!-- row -->
				<div class="container-fluid">
					<div class="row">			
						<div class="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
							<div class="card profile-tab">
								<div class="card-header">
                                    <span><router-link to="create-product" class="btn btn-primary">Add Product</router-link></span>
									<input v-model="searchTerm" class="form-control" type="search" placeholder="Search" aria-label="Search">
								</div>
								<div class="card-body custom-tab-1">
									<div class="tab-content">
										<div id="my-posts" class="tab-pane fade active show">
											<div class="table-responsive">
												<table class="table table-responsive-md">
													<thead>
														<tr>
                                                        <th>Product Name</th>
                                                        <th>Product Image</th>
                                                        <th>Product Category</th>
                                                        <th>Product Price</th>
                                                        <th>Product Quantity</th>
                                                        <th>Action</th>
                                                        </tr>
													</thead>
													<tbody>
														<tr v-for="product in filtersearch" :key="product._id">
                                                        <td> {{ product.productName }}</td>
                                                        <th><img :src="product.productImgs[0]" alt="product image" style="width:40;height:40px;" /></th>
                                                        <th> {{ product.categoriesId}} </th>
                                                        <th> {{ product.sellingPrice}} </th>
                                                        <th> {{ product.productQty}} </th>
                                                        <td>
                                                            <router-link :to="{ name: 'view-product', params: {id:product._id}}" class="btn btn-sm btn-primary">View</router-link>
                                                            <router-link :to="{ name: 'edit-product', params: {id: product._id}}" class="btn btn-sm btn-primary"><font color="white">Edit</font></router-link>
                                                            <a @click="deleteUser(product._id)" class="btn btn-sm btn-danger"><font color="white">Delete</font></a>
                                                        </td>
                                                         </tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
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
    created() {
        if (!User.loggedIn()) {
            this.$router.push({ name: '/admin/login' })
        }
        this.allProduct();
    },
    computed:{
        filtersearch(){
            return this.products.filter(product => {
                return product.productName.match(this.searchTerm);
            })
        }
    },
    data() {
        return {
            products: [],
            searchTerm: ''
        }
    },
    methods: {
        allProduct(){
            axios.get('https://elnic-api.herokuapp.com/api/product')
                .then( ({data}) => {(this.products = data);})
                .catch()
        },
        deleteUser(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('/api/user/'+id)
                        .then( () => {
                            this.users = this.users.filter(user => {
                                return user.id != id ;
                            })
                        })
                        .catch( () => {
                            this.$router.push({ name: 'category' })
                        })
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

        }
    }

}
</script>

<style scoped>

</style>
