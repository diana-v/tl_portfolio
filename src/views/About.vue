<template>
    <div>
        <header>
            <h1 class="header">about me:</h1>
        </header>
        <div class="photo-section">
            <v-img src="@/assets/profie_photo.jpg" class="profile-img"/>
        </div>
        <pre class="description-section">My name is Tomas. I am a Dev-Ops Engineer based in Lithuania. I am a seasoned expert that has introduced and deployed solutions that scale from thousands of users to millions of users. I specialise in web server infrastructure, continuous integration and delivery solutions, workload automatisation and optimisation.
    </pre>
        <pre class="expertise-section">
      Experience:
      Dev-Ops Engineer at NFQ
      Feb 2019 - Present
      PHP Programmer at Enigma Software
      Dec 2012 - Feb 2019

      Education:
      Kaunas University of Technology
      BSc Information Technology
      2012-2016

      Certifications:
      Zend Certified PHP Engineer
      Issued Jan 2017
      Credential ID: <a target="_blank" href="https://www.zend-zce.com/en/yellow-pages/ZEND029620">ZEND29620</a>
    </pre>
        <pre class="expertise-section-855">
      Experience:
      Dev-Ops Engineer at
      NFQ
      Feb 2019 - Present
      PHP Programmer at
      Enigma Software
      Dec 2012 - Feb 2019
        </pre>
        <pre class="expertise-section-855">
      Education:
      Kaunas University
      of Technology
      BSc Information
      Technology
      2012-2016
        </pre>
        <pre class="expertise-section-855">
      Certifications:
      Zend Certified
      PHP Engineer
      Issued Jan 2017
      Credential ID:
      <a target="_blank" href="https://www.zend-zce.com/en/yellow-pages/ZEND029620">ZEND29620</a>
    </pre>
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

    @media screen and (min-width:855px) {
        .expertise-section-855 {
            display: none;
        }
    }
    @media screen and (max-width:855px) {
        .expertise-section {
            display: none;
        }

        .description-section {
            width: 60%;
            padding-top: 7%;
            height: 300px;
        }

        .photo-section {
            margin-left: 40px;
        }

        .expertise-section-855 {
            width: 30%;
            float: left;
            height: 100%;
            text-align: start;
            color: white;
            white-space: pre-wrap; /* Since CSS 2.1 */
            white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
            white-space: -o-pre-wrap; /* Opera 7 */
            word-wrap: break-word; /* Internet Explorer 5.5+ */
            margin-left: 20px;
        }
    }
    @media screen and (max-width:600px) {
        .expertise-section {
            display: initial;
            width: 100%;
            margin-left: 40px;
            padding-top: 30px;
            border: none;
        }
        .expertise-section-855 {
            display: none;
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
