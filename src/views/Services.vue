<template>
    <div>
        <h1 class="header">services:</h1>
        <main class="container services-container">
            <section class="row services-row">
                <div class="col-sm-4 services-title">Game Servers:</div>
                <p class="col-sm-8">quake.e0.lt and mc.e0.lt</p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">CI/CD:</div>
                <p class="col-sm-8">gitlab.e0.lt</p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">Monitoring (WIP):</div>
                <p class="col-sm-8">logs.e0.lt</p>
            </section>
            <section class="row services-row">
                <div class="col-sm-4 services-title">URL Shortener (WIP):</div>
                <p class="col-sm-8">u.e0.lt</p>
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