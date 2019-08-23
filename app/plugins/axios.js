export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.TWITTER_TOKEN) {
      // 実際の開発の場合は store.state.token などを参照することになるはずです
      var str1 = API_key + ":" + API_S_key
      var encodeString = window.btoa(str1);

      config.headers.common['Authorization'] = `Bearer ${encodeString}`
    }
    return config
  })
}
