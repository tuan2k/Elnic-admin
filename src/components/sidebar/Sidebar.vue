<template>
    <div>
        <div class="deznav">
            <div class="deznav-scroll">
                <ul class="metismenu" id="menu">
                    <li class="nav-label first">Main Menu</li>
                    <li><router-link  href="javascript:void()" aria-expanded="false" to="/admin/home">
							<i class="la la-home"></i>
							<span class="nav-text color_text">Home</span>
						</router-link>
                    </li>
                    <li><router-link  href="javascript:void()" aria-expanded="false" to="/admin/user">
							<i class="la la-user"></i>
							<span>User</span>
						</router-link>
                    </li>
                     <li><router-link  href="javascript:void()" aria-expanded="false" to="/admin/product">
							<i class="la la-user"></i>
							<span>Product</span>
						</router-link>
                    </li>
				</ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Sidebar'
}
</script>
<style scoped>
.deznav {
    background-color:  whitesmoke;
}
.color_text {
    text-decoration-color: white;
}
</style>