<template>
    <div>
        <div class="content-body">
				<div class="container-fluid">
					<div class="row">			
						<div class="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
							<div class="card profile-tab">
                                <span><router-link to="create-category" class="btn btn-primary heo">Add Category</router-link></span>
								<input v-model="searchTerm" class="form-control heosearch" type="search" placeholder="Search" aria-label="Search">
								<div class="card-body custom-tab-1">
									<div class="tab-content">
										<div id="my-posts" class="tab-pane fade active show">
											<div class="table-responsive">
												<b-table class="table table-responsive-md" id="my-table"
                                                        :items="filtersearch"
                                                        :per-page="perPage"
                                                        :fields="fields"
                                                        :current-page="currentPage"
                                                        small>
                                                    <template #cell(actions)="row">
                                                        <router-link :to="{ name: 'edit-category', params: {id: row.item._id}}" class="btn btn-sm btn-primary"><font color="white">Edit</font></router-link>
                                                        <a @click="deleteCategory(row.item._id)" class="btn btn-sm btn-danger"><font color="white">Delete</font></a>
                                                    </template>
												</b-table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    <div class="overflow-auto">
                        <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        first-text="First"
                        prev-text="Prev"
                        next-text="Next"
                        last-text="Last"
                        ></b-pagination>
                    </div>
				</div>
			</div>
    </div>
</template>

<script type="text/javascript">
import axios from 'axios';
export default {
    name: 'category',
    created() {
        if (!User.loggedIn()) {
            this.$router.push({ name: '/admin/login' })
        }
        this.allCategory();
    },
    computed:{
        filtersearch(){
            return this.categories.filter(category => {
                return category.categoryName.match(this.searchTerm);
            })
        },
    },
    data() {
        return {
            categories: [],
            items: [],
            rows: 0,
            perPage: 5,
            currentPage: 1,
            fields: [
                'categoryName',
                { key: 'actions', label: 'Actions' }
            ],
            searchTerm: ''
        }
    },
    methods: {
        allCategory(){
            axios.get('https://elnic-api.herokuapp.com/api/categories')
                .then( ({data}) => {(this.categories = data); this.rows = this.categories.length})
                .catch()
        },
        deleteCategory(id){
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
                    axios.delete('https://elnic-api.herokuapp.com/api/categories/'+id)
                        .then( () => {
                            this.categories = this.categories.filter(cat => {
                                return cat._id != id ;
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
.heo {
    margin-top: 20px;
    margin-left: 20px;
}

.heosearch {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 170px;
}
</style>
