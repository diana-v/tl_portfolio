<!--<template>-->
<!--  <v-container grid-list-md text-md-center>-->
<!--    <v-layout row wrap>-->
<!--      <v-flex xs12>-->
<!--        <v-card dark color="primary">-->
<!--          <v-card-text class="px-0 header">about me</v-card-text>-->
<!--        </v-card>-->
<!--      </v-flex>-->
<!--      <v-flex xs6>-->
<!--        <v-card max-height="300px">-->
<!--          <v-img src="@/assets/profie_photo.jpg" class="profile-img"-->
<!--          />-->
<!--        </v-card>-->
<!--&lt;!&ndash;        <v-card dark color="primary">&ndash;&gt;-->

<!--&lt;!&ndash;        </v-card>&ndash;&gt;-->
<!--      </v-flex>-->
<!--      <v-flex xs6>-->
<!--        <v-card dark color="primary">-->
<!--          <v-card-text class="px-0">Experience</v-card-text>-->
<!--        </v-card>-->
<!--      </v-flex>-->
<!--      <v-flex xs6>-->
<!--        <v-card dark color="primary">-->
<!--          <v-card-text class="px-0">Name - description</v-card-text>-->
<!--        </v-card>-->
<!--      </v-flex>-->
<!--      <v-flex xs6>-->
<!--        <v-card dark color="primary">-->
<!--          <v-card-text class="px-0">Education</v-card-text>-->
<!--        </v-card>-->
<!--      </v-flex>-->

<!--    </v-layout>-->
<!--  </v-container>-->
<!--</template>-->

<!--<style>-->
<!--  .profile-img {-->
<!--    object-fit: cover;-->
<!--    width: 100%;-->
<!--    max-height: 100%;-->
<!--  }-->
<!--</style>-->

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
      Credential ID: ZEND29620
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
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
  .expertise-section {
    width: 35%;
    float: left;
    height: 100%;
    margin-top: 30px;
    border-left: 2px solid white;
    text-align: start;
    color: white;
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
</style>