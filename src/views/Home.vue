<template>
  <pre class="home-wrap">
    <prism class="home-content" language="hcl">
      {{ content }}
    </prism>
  </pre>
</template>

<script>
export default {
  data: () => ({
    content: "",
    code: `
terraform init

provider "cloudflare" {
  version = "~> 2.0"
  email   = var.cloudflare_email
  api_key = var.cloudflare_api_key
  account_id = var.cloudflare_account_id
}

resource "cloudflare_zone" "e0lt" {
 zone = "e0.lt"
}

resource "cloudflare_record" "root" {
  zone_id = var.zone.e0lt
  name    = ""
  type    = "A"
  ttl     = 1
  proxied = true
  value = "Secret..."
}

Infrastructure is up-to-date.

Welcome.
`
  }),
  mounted() {
    setTimeout(this.addMoreCode);
  },
  methods: {
    addMoreCode: function() {
      if (this.code === "") {
        return;
      }
      this.content += this.code[0];
      this.code = this.code.substring(1);
      setTimeout(this.addMoreCode, 20);
    }
  }
};
</script>

<style>
.home-content {
  background: transparent !important;
}

.home-wrap {
  margin: auto;
  font-size: 1.9vh;
}
</style>