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
    background: transparent !important;
  }

  .home-wrap {
    margin: 10vh auto !important;
    font-size: 20px !important;
  }
 </style>