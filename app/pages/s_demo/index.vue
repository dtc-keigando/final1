<template>
<section class="container">
  <div>
    <h1 style="text-align: center">New York Time API を利用した新聞記事検索</h1>
    <ul>
      <li>検索する年代と月を入力してください</li>

      <p>年代 : <input type="number" placeholder="ex)2010" v-model.number="newEvent.year"></p>
      <p>月　 :
      <input type="number" placeholder="ex)11"  v-model="newEvent.month"/></p>
      <button v-on:click="doSearch">記事の検索</button><br><br>
      <ul class="errors">
        <li v-show="!validation.name">Year and month cannot be empty.</li>
        <li v-show="!validation.email">Please provide a valid number.</li>
      </ul>
      <li v-for="item in this.article" :key="item.id">
        <h4>
          <span>{{item.headline.main}}</span>
          <small> (Public Date {{item.pub_date.slice(0,9)}})</small>
        </h4>
        <div>{{item.snippet}}</div>
        <p><a :href="item.web_url">{{item.web_url}}</a></p>
      </li>
    </ul>
  </div>
</section>
</template>
<script>
var yearRE = /180[0-9]|18[1-9][0-9]|19[0-9]{2}|200[0-9]|201[0-9]/;
var monthRE = /[1-9]|1[0-2]/;
export default {
  async mounted(){
    // console.log(
    //   JSON.stringify(await this.$axios.$get('https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=EELcfN8de6V7ZJx9c8dJxTCgXy7e1WGY'))
    // )
    // this.article = await this.$axios.$get(this.buildurl())
  },
  // async asyncData() {
  //   const items = await this.$axios.$get('https://api.nytimes.com/svc/archive/v1/2018/1/.json?api-key=EELcfN8de6V7ZJx9c8dJxTCgXy7e1WGY')
  //   return {
  //     items
  //   }
  // },
  data: function() {
    return {
      Act_baseURL: 'https://api.nytimes.com/svc/archive/v1/',
      Seach_baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q',
      Top_baseURL: 'https://api.nytimes.com/svc/topstories/v2/',
      API_key: 'EELcfN8de6V7ZJx9c8dJxTCgXy7e1WGY',
      newEvent: {
        month: '',
        year: ''
      },
      article: {},
      validation: {
        year: false,
        month: false,
      }
    }
  },
  methods: {
    buildurl: function() {
      return this.Act_baseURL + this.year +"/"+ this.month + ".json?api-key=" + this.API_key
    },
    async doSearch() {
      if (this.isValid) {
        var items = await this.$axios.$get(this.buildurl())
        this.article = items.response.docs
        console.log(this.article)
      }
    },
    addEvent: function (e) {
      e.preventDefault()
      if (this.isValid) {
        console.log("success")
      }else{
        console.log("need edit")
      }
    }
  },
  filters: {
      yearValidator: {
        write: function (val) {
          this.validation.year = !!val
          return val
        }
      },
      monthValidator: {
        write: function (val) {
          this.validation.month = !!val
          return val
        }
      }
  },
  computed: {
      isValid: function () {
        var valid = true
        for (var key in this.validation) {
          if (!this.validation[key]) {
            valid = false
          }
        }
        return valid
      }
    }

}

</script>
<style>
.container {
  min-height: 100vh;
  padding: 16px;
}
h3 {
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: solid 1px black;
}
li + li {
  margin: 16px 0;
}
p {
  margin: 8px 0;
}
.errors {
  color: #f00;
}
</style>>
