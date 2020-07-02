<template>
    <div>
        <head>
            <vue-headful title="About"/>
        </head>
        <header>
            <h1 class="header">about me:</h1>
        </header>
        <figure class="photo-section">
            <v-img src="@/assets/profie_photo.jpg" class="profile-img"/>
        </figure>
        <section>
            <p class="description-section">My name is Tomas. I am a Dev-Ops Engineer based in Lithuania. I am a seasoned
                expert that has introduced and deployed solutions that scale from thousands of users to millions of users. I
                specialise in web server infrastructure, continuous integration and delivery solutions, workload
                automatisation and optimisation.
            </p>
        </section>
        <section class="expertise-section">
            <ul>
                <li>Experience:</li>
                <li>Dev-Ops Engineer at NFQ: Feb 2019 - Present</li>
                <li>PHP Programmer at Enigma Software: Dec 2012 - Feb 2019</li>
            </ul>
            <ul>
                <li>Education:</li>
                <li>Kaunas University of Technology</li>
                <li>BSc Information Technology: 2012-2016</li>
            </ul>
            <ul>
                <li>Certifications:</li>
                <li>Zend Certified PHP Engineer: Issued Jan 2017, Credential ID: <a target="_blank"
                                                                                    href="https://www.zend-zce.com/en/yellow-pages/ZEND029620">ZEND29620</a>
                </li>
            </ul>
        </section>
    </div>
</template>

<style>
    .profile-img {
        height: 300px;
        width: 200px;
        border-radius: 8px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .photo-section {
        width: 27%;
        float: left;
        height: 100%;
        margin-top: 30px;
    }

    .description-section {
        width: 35%;
        float: left;
        height: 100%;
        margin-top: 30px;
        text-align: start;
        padding: 0 20px 0 20px;
        color: white;
        white-space: pre-wrap; /* Since CSS 2.1 */
        white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
        white-space: -o-pre-wrap; /* Opera 7 */
        word-wrap: break-word; /* Internet Explorer 5.5+ */
    }

    ul {
        list-style: none;

    }

    .expertise-section {
        width: 35%;
        float: left;
        height: 100%;
        margin-top: 30px;
        border-left: 2px solid white;
        text-align: start;
        color: white;
        white-space: pre-wrap; /* Since CSS 2.1 */
        white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
        white-space: -o-pre-wrap; /* Opera 7 */
        word-wrap: break-word; /* Internet Explorer 5.5+ */
    }

    @media screen and (max-width: 855px) {
        .description-section {
            width: 60%;
            padding-top: 7%;
            height: 300px;
        }

        .photo-section {
            margin-left: 40px;
        }

        .expertise-section {
            margin-left: 15%;
            margin-right: 10%;
            display: block;
            border-top: 3px solid white;
            border-left: none;
            padding-top: 30px;
            width: 70%;
            height: 100%;
            color: white;
            white-space: pre-wrap; /* Since CSS 2.1 */
            white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
            white-space: -o-pre-wrap; /* Opera 7 */
            word-wrap: break-word; /* Internet Explorer 5.5+ */
        }
    }

    @media screen and (max-width: 600px) {
        .expertise-section {
            display: initial;
            width: 70%;
            margin-left: 10%;
            margin-right: 10%;
            padding-top: 30px;
            border: none;
        }

        .description-section {
            border-bottom: 2px solid white;
            width: 80%;
            margin-left: 40px;
            padding-bottom: 40px;
        }

        .photo-section {
            width: 70%;
        }
    }
</style>
