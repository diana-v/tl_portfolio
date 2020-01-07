<template>
    <a class="about">
        <h1 class="header">contact me:</h1>
        <v-icon class="contact-icon" size="50">fab fa-github</v-icon>
        <pre class="contact-section"><a target="_blank" class="contact-link"
                                        href="https://github.com/tomaslesc">GitHub</a></pre>

        <v-icon class="contact-icon" size="50">fab fa-linkedin</v-icon>
        <pre class="contact-section"><a target="_blank" class="contact-link"
                                        href="https://www.linkedin.com/in/tomaslesc/">LinkedIn</a></pre>

        <v-icon class="contact-icon" size="50">fas fa-envelope</v-icon>
        <pre class="contact-section"><a class="contact-link" href="#" data-toggle="tooltip"
                                        title="Click to copy my email address to your clipboard" v-on:click="clippy">Gmail</a></pre>
        <input type="text" style="display:none" id="clipboard" value="tom@e0.lt">
    </a>
</template>

<script>
    export default {
        name: "app",
        data: () => ({}),
        methods: {
            clippy: function () {
                /* Get the text field */
                var copyText = document.getElementById("clipboard");
                //
                // /* Select the text field */
                copyText.select();

                /* Copy the text inside the text field */
                document.execCommand("copy");

                /* Alert the copied text */
                alert("My email address has been copied to your clipboard!");
            }
        }
    }
</script>

<style>
    .contact-section {
        font-size: 18px;
        margin-top: 50px;
        color: white;
        float: left;
        white-space: pre-wrap; /* Since CSS 2.1 */
        white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
        white-space: -o-pre-wrap; /* Opera 7 */
        word-wrap: break-word; /* Internet Explorer 5.5+ */
    }

    .contact-icon {
        padding-left: 35%;
        float: left;
        width: 50%;
        margin-top: 40px;
    }

    .contact-link {
        text-decoration: none !important;
        color: white !important;
    }

    .contact-link:hover {
        border-bottom: 3px solid white;
    }
</style>