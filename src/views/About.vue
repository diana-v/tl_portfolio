<template>
    <div>
        <header>
            <h1 class="header">about me:</h1>
        </header>
        <figure class="photo-section">
            <v-img src="@/assets/profie_photo.jpg" class="profile-img"/>
        </figure>
        <section class="description-section">
            <p >After getting a hand of what it takes to create a project
                I've decided to see what it takes to get it to production.
                Infrastructure as code is my specialty and automation is key to system autonomy.
                Project portfolio consist of solutions that are currently being used in projects that 
                scale from thousands to millions of users, I specialise in web server infrastructure,
                continuous integration and delivery solutions, workload automatization and optimization.
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
                <li>Zend Certified PHP Engineer: Issued Jan 2017, Credential ID: <a target="_blank" rel="noreferrer"
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
        margin-top: 30px;
    }

    .description-section {
        width: 35%;
        float: left;
        margin-top: 30px;
        text-align: start;
        padding: 0 20px 0 20px;
        color: white !important;
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
        margin-top: 30px;
        border-left: 2px solid white;
        text-align: start;
        color: white !important;
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
            width: 80%;
            margin-left: 40px;
            padding-bottom: 40px;
        }

        .photo-section {
            width: 70%;
        }
    }
</style>
