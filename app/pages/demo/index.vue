<template>
<section class="container">
  <div>
    <h1>twitter API を利用したBUZZワード検索</h1>
    <!-- <ul>
      <li v-for="item in items" :key=item.id>
        <h5><span>{{item.text}}</span></h5>
      </li>
    </ul> -->
    <p>
      {{this.items}}
      </p>
  </div>
</section>
</template>
<script>
export default {
  // async mounted(){
    // console.log(
    //   JSON.stringify(await this.$axios.$post('https://api.twitter.com/oauth2/token'),true,' ')
    // )
    //Callback functions
  // }
  async asyncData({app}) {
	var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
  };
  var x;
	var success = function (data) {
    // console.log('Data [%s]', data);
    // this.items.push(data);
    // console.log("===============",this.items)ß
    x = data
    // console.log(x)
  };
	var Twitter = require('twitter-node-client').Twitter;

	//Get this data from your twitter apps dashboard
	var config = {
    "consumerKey": ,
    "consumerSecret": ,
    "accessToken":,
    "accessTokenSecret": ,
    // "callBackUrl": "XXX"
  }
  var twitter = new Twitter(config);

  //Example calls
  console.log(twitter.getUserTimeline({ screen_name: 'cocoa_12', count: '1'}, error, success))
  //   var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//     resolve(twitter.getUserTimeline({ screen_name: 'cocoa_12', count: '1'}, error, success))
//   }, 300);
//     });
//   promise1.then(function() {
//   console.log(x);
//   // expected output: "foo"
//   });

// console.log(promise1);
// expected output: [object Promise]


  // twitter.getUserTimeline({ screen_name: 'cocoa_12', count: '1'}, error, success).then(console.log(x))

  // twitter.getMentionsTimeline({ count: '10'}, error, success);
  // twitter.getTweet({ id: 1164337828899090432}, error, success);
  // twitter.getSearch({'q':'#haiku','count': 10}, error, success);
  // console.log('---------------\n')


  // console.log("x=",x)
  return {
    // items
  }
  },
  data : function() {
    return{
      items: {
        a:""
      }
    }
  }
}

</script>
