<template>
<section class="container">
  <div>
    <h1 style="text-align: center">New York Time API を利用した新聞記事検索</h1>
    <ul>
      <li>検索する年代と月を入力してください</li>
      <form id="form" v-on="submit:addEvent">
      <p>年代 : <input v-model="newEvent.year | yearValidator">　年</p>
      <li>month(1~12月)</li>
      <input type="number" name="month" v-model="month" min="0" max="12"/>
      </form>
      <button v-on:click="doSearch">記事の検索</button><br>
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
        month: 0,
        year: 0,
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
      var items = await this.$axios.$get(this.buildurl())
      this.article = items.response.docs
      console.log(this.article)
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
</style>>
