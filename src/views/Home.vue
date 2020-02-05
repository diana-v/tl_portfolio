<template>
  <pre class="home-wrap">
    <head>
        <vue-headful title="Home"/>
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
    </head>
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
                    "let tom = new DevOps('tom');\n" +
                    "while(tom.awake()){\n" +
                    "    tom.think();\n" +
                    "    tom.consult();\n" +
                    "    tom.work();\n" +
                    "}"
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
  }

  .v-application code {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  .home-wrap {
    margin: 10vh auto !important;
    font-size: 20px !important;
    color: transparent !important;
  }
 </style>