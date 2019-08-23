<template>
  <div>
    <div class="body">
    <h1>Vue.jsのコンポーネントについて</h1>
    <ul>
      <li><h3>コンポーネントとは</h3></li>
    </ul>
    <div class="text">
    <p>コンポーネントは Vue.js の最も強力な機能の1つです。基本的な HTML 要素を拡張して再利用可能なコードのカプセル化を助けます。高度なレベルでは、コンポーネントは Vue.js のコンパイラが指定された振舞いをアタッチするカスタム要素です。場合によっては、特別な is 属性で拡張されたネイティブな HTML 要素の姿をとることもあります。</p><br>
    </div>
    <div class="imgs">
    <img src="@/assets/img3.png"/>
    </div>
    <br>
    <ul>
      <li><h3>コンポーネントのメリット</h3></li>
      <ol>
        <li v-for="item in this.list" v-bind:key="item.id" style="letter-spacing: 0.2em; line-height: 2;">
          {{ item.desc }}
        </li>
      </ol>
      </ul>
      <br>
      <ul>
        <li>
          <h3>コンポーネントの定義</h3>
        </li>
      </ul><br>
      <ul type="circle">
        <li>グローバルコンポーネント</li>
        <div class="text">
        <p>グローバルコンポーネントは一般的なコンポーネント定義手法であるが、コンポーネントが複雑化した時にどこからでも参照可能なグローバル定義はトラブルの原因になる可能性があります。グローバルコンポーネントは以下のようにして定義を行います。</p>
        </div>
        <pre class="prettyprint lang-js">
          Vue.compornent(tagName, options)
        </pre>
        <div class="text">
        <p>第一引数のtagNameには、作成するコンポーネント名(文字列)を渡します。第二引数のoptionでは、コンポーネント自体の様々な構成情報を持ったオブジェクトが入ります。</p>
        </div><br>
        <li>ローカルコンポーネント</li>
        <div class="text">
        <p>ローカルコンポーネントはその名の通り、定義されたコンポーネント内のみで利用可能なコンポーネントである。</p>
        </div>
        <pre class="prettyprint lang-js　linenums">
          new Vue({
            compornent: {
              'list-title' : {
                template: ''
              }
            }
          })
        </pre>
        <br>
      </ul>
      <ul>
        <li>
          <h3>コンポーネント間の通信</h3>
        </li>
      </ul><br>
    <div class="code">
      <pre class="prettyprint lang-css linenums">
      .elem {
      font-size: 16px;
    }
    </pre>
    </div>
    <pre class="prettyprint lang-css linenums">
    .elem {
      font-size: 16px;
    }
    </pre>
    </div>
  </div>
</template>
<script>
export default {
  head () {
    return {
      script: [
        { src: 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sunburst' }
      ]
    }
  },
  data: function() {
    return {
      list: [
      { id: 1, desc: "再利用性が高まり、開発効率をあげられる" },
      { id: 2, desc: "既に使用されているコンポーネントを再利用することで、品質を保てる"},
      { id: 3, desc: "コンポーネントを適切に区切り、疎結合にした場合、保守性が高まる"},
      {id: 4 , desc: "カプセル化されて開発で意識すべき範囲を限定できる"}
    ]
    }
  }
}
</script>
<style>
.prettyprint ol.linenums > li {
  list-style-type: decimal;
}
.code {
  /* width: 60%; */
}
.body {
  background:#F2F2F2;
  font-family:Verdana, "ＭＳ Ｐゴシック", sans-serif;
  font-size:90%;
  width:700px;
  margin-right: auto;
  margin-left : auto;
  padding: 50px 30px;
}
.imgs {
  /* margin: 0 auto; */
  text-align:center;
  /* width: 80%; */
}
img {
  width: 60%;
  /* margin: 0 auto; */
  /* height: 400px; */
}
.text {
  padding: 0 20px;
  letter-spacing: 0.05em;
  line-height: 2;
}
.text ol li {
  padding: 0 20px;
  letter-spacing: 0.05em;
  line-height: 2;
}
h1 {
  text-align: center;
  text-decoration: underline;
  margin: 30px 10px;
}
</style>>
