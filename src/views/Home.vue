<template>
  <pre class="home-wrap">
    <prism class="home-content" language="js">
      {{ content }}
    </prism>
  </pre>
</template>

<script>
  export default {
    data: () => (
            {
              content: '',
              code: "\n" +
                    "me = nameTomas ()\n" +
                    "while(me.awake()):\n" +
                    "    me.devOps()"
            }
    ),
    mounted() {
      setTimeout(this.addMoreCode)
    },
    methods: {
      addMoreCode: function () {
        if (this.code === ""){
          return
        }
        this.content += this.code[0];
        this.code = this.code.substring(1);
        setTimeout(this.addMoreCode, 100)
      }
    }
  };
</script>

<style>
  .home-content {
    -webkit-box-shadow: none !important;
    box-shadow: #303030 !important;
    background: #303030 !important;
    background: #303030 !important;
  }

  .v-application code {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  .home-wrap {
    margin: 20vh auto !important;
    font-size: 20px !important;
    color: transparent !important;
  }
 </style>