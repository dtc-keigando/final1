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
    console.log(x)
  };
	var Twitter = require('twitter-node-client').Twitter;

	//Get this data from your twitter apps dashboard
	var config = {
    "consumerKey": "e2o02gkSl41m88x5xRhhBviqz",
    "consumerSecret": "kTuclcswEIgErusDzt1tPozOW1rYyz9yYlaRoVDbgP6XYvshdJ",
    "accessToken": "527523351-pz0HIdHvbfr5no7A19d1tmQMtdSat0d4V06pL75J",
    "accessTokenSecret": "CCKeLcheN0O6phToJwGx4uPN3261XKsoYzEo2g5gzCOSB",
    // "callBackUrl": "XXX"
  }
  var twitter = new Twitter(config);

	//Example calls

  await twitter.getUserTimeline({ screen_name: 'cocoa_12', count: '1'}, error, success);

  // twitter.getMentionsTimeline({ count: '10'}, error, success);
  // twitter.getTweet({ id: 1164337828899090432}, error, success);
  // twitter.getSearch({'q':'#haiku','count': 10}, error, success);
  console.log('---------------\n')


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
