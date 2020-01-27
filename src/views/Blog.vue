<template>
    <div class="blog">
        <h1 class="header">blog:</h1>
        <div class="blog-wrap">
        <div class="blog-container">
            <v-card to="/blog/1" link hover
                    class="blog-card">
                <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2018/09/03/22/05/programming-3652497_1280.jpg"
                >
                </v-img>
                <v-card-title class="blog-card-title">First Blog Entry</v-card-title>
                <v-card-subtitle class="pb-0 blog-card-subtitle">November 10 2020</v-card-subtitle>
                <v-card-text class="text--primary">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin viverra turpis eget congue. Nulla a metus a mi venenatis placerat...</div>
                </v-card-text>
            </v-card>
        </div>

        <div class="blog-container">
            <v-card to="/blog/1" link hover
                    class="blog-card">
                <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2018/09/03/22/05/programming-3652497_1280.jpg"
                >
                </v-img>
                <v-card-title class="blog-card-title">First Blog Entry</v-card-title>
                <v-card-subtitle class="pb-0 blog-card-subtitle">November 10 2020</v-card-subtitle>
                <v-card-text class="text--primary">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin viverra turpis eget congue. Nulla a metus a mi venenatis placerat...</div>
                </v-card-text>
            </v-card>
        </div>
        <div class="blog-container">
            <v-card to="/blog/1" link hover
                    class="blog-card">
                <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2018/09/03/22/05/programming-3652497_1280.jpg"
                >
                </v-img>
                <v-card-title class="blog-card-title">First Blog Entry</v-card-title>
                <v-card-subtitle class="pb-0 blog-card-subtitle">November 10 2020</v-card-subtitle>
                <v-card-text class="text--primary">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin viverra turpis eget congue. Nulla a metus a mi venenatis placerat...</div>
                </v-card-text>
            </v-card>
        </div>

        <div class="blog-container">
            <v-card to="/blog/1" link hover
                    class="blog-card">
                <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2018/09/03/22/05/programming-3652497_1280.jpg"
                >
                </v-img>
                <v-card-title class="blog-card-title">First Blog Entry</v-card-title>
                <v-card-subtitle class="pb-0 blog-card-subtitle">November 10 2020</v-card-subtitle>
                <v-card-text class="text--primary">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin viverra turpis eget congue. Nulla a metus a mi venenatis placerat...</div>
                </v-card-text>
            </v-card>
        </div>

        <div class="blog-container">
            <v-card to="/blog/1" link hover
                    class="blog-card">
                <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2018/09/03/22/05/programming-3652497_1280.jpg"
                >
                </v-img>
                <v-card-title class="blog-card-title">First Blog Entry</v-card-title>
                <v-card-subtitle class="pb-0 blog-card-subtitle">November 10 2020</v-card-subtitle>
                <v-card-text class="text--primary">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin viverra turpis eget congue. Nulla a metus a mi venenatis placerat...</div>
                </v-card-text>
            </v-card>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            // alert(this.$route.params.id)
        },
    }
</script>

<style>
    .blog {
        text-align: start;
    }

    .blog-container {
        float: left;
        margin: 20px 5%;
        width: 40%;
    }

    @media screen and (max-width: 825px) {
        .blog-container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            float: unset;
        }
    }

    @media screen and (min-width: 1300px) {
        .blog-container {
            width: 30%;
            margin: 0 20px;
            padding: 20px;
            /*float: unset;*/
        }
    }

    .blog-card {
        text-decoration: none !important;
        width: 600px;
    }

    .blog-card-title {
        color: white !important;
    }

    .blog-card-title:hover {
        color: #f08c49 !important;
    }

    .blog-card-subtitle {
        border-bottom: 3px solid #f08c49;
        width: 150px;
    }

    .blog-wrap:hover .blog-card {
        opacity: .3;
    }

    .blog-wrap .blog-card:hover {
        opacity: 1;
    }
</style>