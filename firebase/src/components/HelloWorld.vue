<template>
  <div class="wrap">
    <h1>Hi, Alex</h1>
    <p>Bestellungen</p>

    <pre>{{orders}}</pre>

    <!-- <div v-for="order in orders">
      <pre>{{order}}</pre>
    </div> -->

  </div>
</template>

<script>
import { db } from '../firebase'

export default {
  name: 'HelloWorld',
  data () {
    return {
      orders: undefined,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    // db.collection('orders').get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc)
    //   })
    // })

    db.collection('orders').doc('NOJS5ANY4p3Yb9y9xkXX')
      .onSnapshot(function (doc) {
        console.log(doc.data())
        this.orders = doc.data()
      })

    // db.collection('orders').add({priceTotal: '12', createdAt})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
