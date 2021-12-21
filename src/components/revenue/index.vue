
<template>
  <div class="content-body">
      <div class="container-fluid">
        <div>
        <label>Chọn Loại thống kê</label>
        <select v-model="ty" v-on:change="selectType()">
            <option :value="y" v-for="t in type" :key="t">{{ t }}</option>
        </select>
        </div>
        <br/>
        <div>
        <label>Chọn năm: </label>
        <select v-model="nam" v-on:change="selectYear()">
            <option :value="y" v-for="y in year" :key="y">{{ y }}</option>
        </select>
        </div>
        <br/> <br/>
        <div class="small">
              <column-chart :data="[['1', 32], ['2', 46], ['3', 28],['4', 32], ['5', 46], ['6', 28],['7', 32], ['8', 46], ['9', 28],['10', 32], ['11', 46], ['12', 28]]"></column-chart>
        </div>
      </div>
  </div>
</template>
<script type="text/javascript">
import axios from "axios";

export default {
  name: "revenue",
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "/admin/login" });
    }
    this.allOrder();
  },
  data() {
    return {
      orders: [],
      year: [2019,2020,2021],
      type: ['doanh thu','số lượng'],
      items: [],
      rows: 0,
      perPage: 5,
      currentPage: 1,
      fields: [
        "userId",
        "email",
        "phone",
        { key: "actions", label: "Actions" }
      ],
      searchTerm: "",
      nam: 2021,
      ty: ''
    };
  },
  methods: {
    allOrder() {
      axios
        .get("https://elnic-api.herokuapp.com/api/orders")
        .then(({ data }) => {
          this.orders = data;
          console.log(data);
          let arr = [];
          for (let i = 0; i <= 10; i++) {
            arr.push(this.orders[i]);
          }
          this.orders = arr;
          this.rows = this.orders.length;
        })
        .catch();
    },
    selectType(){

    },
    selectYear(){
      
    }

  }
};
</script>
<style scoped>
.chart {
  margin-left:300px;
}
</style>
