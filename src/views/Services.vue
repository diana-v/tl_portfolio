<template>
    <div>
        <main class="container services-container">
        <h2 class="header">Self-hosted services:</h2>
            <section class="row services-row">
                <div class="col-sm-4 services-title">Game Servers:</div>
                <p class="col-sm-8">Currently inactive, no quake enthusiasts :|</p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">CI/CD:</div>
                <p class="col-sm-8"><a href="https://gitlab.com/tomas.lesc">gitlab.com/tomas.lesc</a></p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">Monitoring:</div>
                <p class="col-sm-8"><a href="https://status.diann.dev">status.diann.dev</a></p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">URL Shortener:</div>
                <p class="col-sm-8">Set up shlink, but will eventually be similar to <a href="http://www.shadyurl.com">shadyurl.com</a></p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">IP Revealer:</div>
                <p class="col-sm-8"><a href="https://ip.e0.lt">ip.e0.lt</a> Super useful link to find out a servers' external ip address   (idea totally not copied from a colleague)</p>
            </section>
        <h2 class="header">Hosted websites:</h2>
            <section class="row services-row">
                <div class="col-sm-4 services-title">Personal website</div>
                <p class="col-sm-8"><a href="https://www.diann.dev">Diann.dev</a></p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">Hosted project 1</div>
                <p class="col-sm-8"><a href="https://www.seasafari.lt">seasafari.lt</a></p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">Hosted project 2</div>
                <p class="col-sm-8"><a href="https://www.vilrosa.lt">Vilrosa.lt</a></p>
            </section>
        </main>
    </div>
</template>

<style>
    .services-row {
        color: white;
        text-align: start;
        font-size: 20px;
    }

    .services-container {
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 20px;
        height: 100vh;
        overflow: hidden;
    }

    .services-row:hover .services-title {
        color: #247ec6;
    }

    @media screen and (max-width: 566px) {
        .services-title {
            color: #247ec6;
        }
    }
</style>
