<template>
    <div>
    <head>
        <vue-headful title="About"/>
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
    </head>
        <h1 class="header">services:</h1>
        <div class="container services-container">
            <div class="row services-row">
                <div class="col-sm-4 services-title">Game Servers:</div>
                <div class="col-sm-8">quake.e0.lt and mc.e0.lt</div>
            </div>
            <div class="row services-row">
                <div class="col-sm-4 services-title">CI/CD:</div>
                <div class="col-sm-8">gitlab.e0.lt</div>
            </div>
            <div class="row services-row">
                <div class="col-sm-4 services-title">Monitoring (WIP):</div>
                <div class="col-sm-8">logs.e0.lt</div>
            </div>
            <div class="row services-row">
                <div class="col-sm-4 services-title">URL Shortener (WIP):</div>
                <div class="col-sm-8">u.e0.lt</div>
            </div>
        </div>
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