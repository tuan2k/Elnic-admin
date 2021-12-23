
<template>
  <div>
  <div class="content-body">
      <div class="container-fluid">
        <div class="form-group">
        <label><strong>Chọn năm: </strong></label>
        <select v-model="nam" v-on:change="selectYear()" class="form-control">
            <option :value="y" v-for="y in year" :key="y">{{ y }}</option>
        </select>
        </div>
        <br />
        <div class="form-group">
        <label><strong>Chọn Loại thống kê</strong></label>
        <select v-model="ty" v-on:change="selectType()">
            <option :value="t.id" v-for="t in type" :key="t.id">{{ t.name }}</option>
        </select>
        </div>
        <br/> <br/>
        <div class="small">
              <column-chart :data="chart"></column-chart>
        </div>
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
      this.$router.push({ name: "login" });
    }
    this.$store.dispatch("getProducts");
    this.allOrder();
    this.products = this.$store.state.products;
    console.log(this.products);
  },
   mounted() {
    this.$store.dispatch("getProducts");
  },
  data() {
    return {
      orders: [],
      year: [2019,2020,2021],
      chart: [],
      type: [{id: 0, name: 'doanh thu'},{ id: 1, name: 'số lượng'}],
      nam: 2021,
      ty: 0,
      products: [],
    };
  },
  methods: {
    allOrder() {
      axios
        .get("https://elnic-api.herokuapp.com/api/orders")
        .then(({ data }) => {
          this.orders = data.data;
          let obj1 = [1,0],obj2 =[2,0],obj3 = [3,0],obj4 = [4,0],obj5 = [5,0],obj6 = [6,0],obj7 = [7,0],
          obj8 = [8,0],obj9 = [9,0],obj10 = [10,0],obj11 = [11,0],obj12 = [12,0];
          for (let i=0;i<this.orders.length;i++){
              let dt = new Date(this.orders[i].createdAt);
              if (this.nam === dt.getFullYear()){
                  if (dt.getMonth() === 1) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj1[1] += this.orders[i].amount;
                      }     
                  }
                  if (dt.getMonth() === 2) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj2[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 3) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj3[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 4) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj4[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 5) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj5[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 6) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj6[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 7) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj7[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 8) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj8[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 9) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj9[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 10) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj10[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 11) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj11[1] += this.orders[i].amount;
                      }     
                  }
                  if (dt.getMonth() === 12) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj12[1] += this.orders[i].amount;
                      }     
                  }
              }
          this.chart.push(obj1);this.chart.push(obj2);this.chart.push(obj3);this.chart.push(obj4);
          this.chart.push(obj5);this.chart.push(obj6);this.chart.push(obj7);this.chart.push(obj8);
          this.chart.push(obj9);this.chart.push(obj10);this.chart.push(obj11);this.chart.push(obj12);
          }
       })
        .catch();
    },
    selectType(){
        console.log(this.orders);
        this.chart = [];
        let obj1 = [1,0],obj2 =[2,0],obj3 = [3,0],obj4 = [4,0],obj5 = [5,0],obj6 = [6,0],obj7 = [7,0],
          obj8 = [8,0],obj9 = [9,0],obj10 = [10,0],obj11 = [11,0],obj12 = [12,0];
        if (this.ty === 0) {
            for (let i=0;i<this.orders.length;i++){
              let dt = new Date(this.orders[i].createdAt);
              if (this.nam === dt.getFullYear()){
                  if (dt.getMonth() === 1) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj1[1] += this.orders[i].amount;
                      }     
                  }
                  if (dt.getMonth() === 2) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj2[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 3) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj3[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 4) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj4[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 5) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj5[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 6) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj6[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 7) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj7[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 8) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj8[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 9) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj9[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 10) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj10[1] += this.orders[i].amount;
                      }     
                  }if (dt.getMonth() === 11) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj11[1] += this.orders[i].amount;
                      }     
                  }
                  if (dt.getMonth() === 12) {
                      if (this.orders[i].amount !== undefined && this.orders[i].amount !== NaN && this.orders[i].amount !== 0){
                          obj12[1] += this.orders[i].amount;
                      }     
                  }
              }
          }
          this.chart.push(obj1);this.chart.push(obj2);this.chart.push(obj3);this.chart.push(obj4);
          this.chart.push(obj5);this.chart.push(obj6);this.chart.push(obj7);this.chart.push(obj8);
          this.chart.push(obj9);this.chart.push(obj10);this.chart.push(obj11);this.chart.push(obj12);
          
        } else {
           let obj = [0,0];
           this.chart = [];
           for (let j=0;j<this.orders.length;j++){
              let dtt = new Date(this.orders[j].createdAt);
              if (this.nam === dtt.getFullYear()) {
                  for (let k=0;k<this.orders[j].productList.length; k++){
                      obj[0] = this.orders[j].productList[k]._id;
                      obj[1] = this.orders[j].productList[k].userQuantity;
                      if (this.chart.length === 0){
                        this.chart.push(obj);
                      } else {
                         this.chart.push(obj);
                        //   for (let h=0;h<this.chart.length;h++){
                        //       if (this.chart[h][0] === obj[0]){
                        //           console.log(obj[1]+"-"+this.chart[h][0]);
                        //           console.log("trung");
                        //           this.chart[h][1] += obj[1];
                        //       } else {
                        //           this.chart.push(obj);
                        //       }
                        //   }
                      }
                      obj = [0,0];
                  }
              }
           }
           for (let g=0;g<this.chart.length;g++){
               for (let u=0;u<this.products.length;u++){
                   if (this.products[u]._id == this.chart[g][0]) {
                       console.log(this.chart[g][0]);
                       this.chart[g][0] = this.products[u].productName;
                   }
               }
           }
           console.log(this.chart);
        }
    },
  }
};
</script>
<style scoped>
.chart {
  margin-left:300px;
}
.content-body{
    height: 1000px;
}
</style>
