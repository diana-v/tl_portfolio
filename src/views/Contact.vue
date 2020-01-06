<template>
    <a class="about">
        <h1 class="header">contact me:</h1>
        <pre class="contact-section"><v-icon class="contact-icon" size="50">fab fa-github</v-icon><a target="_blank" class="contact-link" href="https://github.com/tomaslesc">GitHub</a></pre>

        <pre class="contact-section"><v-icon class="contact-icon" size="50">fab fa-linkedin</v-icon><a target="_blank" class="contact-link" href="https://www.linkedin.com/in/tomaslesc/">LinkedIn</a></pre>

        <pre class="contact-section"><v-icon class="contact-icon" size="50">fas fa-envelope</v-icon><a class="contact-link" href="#" data-toggle="tooltip" title="Click to copy my email address to your clipboard">Gmail</a></pre>
    </a>
</template>

<script>

    // function openTooltip() {
    //     ('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
    // }
    // openTooltip();
    // function copy_text() {
    //     /* Get the text field */
    //     var copyText = document.getElementById("copy-to-clipboard");
    //
    //     /* Select the text field */
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    //
    //     /* Copy the text inside the text field */
    //     document.execCommand("copy");
    //
    //     // /* Alert the copied text */
    //     // alert("Copied to clipboard!");
    // }
    // copy_text();

    // value="tom@e0.lt"
    // id="copy-to-clipboard"
    // data-toggle="tooltip"
    // title="Click to copy my email address to your clipboard"
</script>

<style>
    .contact-section {
        font-size: 18px;
        margin-top: 50px;
        color: white;
        white-space: pre-wrap; /* Since CSS 2.1 */
        white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
        white-space: -o-pre-wrap; /* Opera 7 */
        word-wrap: break-word; /* Internet Explorer 5.5+ */
    }
    .contact-icon {
        padding-right: 20px;
    }

    .contact-link {
        text-decoration: none !important;
        color: white !important;
    }

    .contact-link:hover {
        border-bottom: 3px solid white;
    }
</style>