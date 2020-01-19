<template>
    <div class="blog">
        <h1 class="header">blog:</h1>
        <div class="blog-container">
            <v-card to="/blog/1" link hover
                    class="ml-5 blog-card"
                    max-width="400"
            >
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
        margin-left: 40px;
        margin-top: 20px;
    }

    .blog-card {
        text-decoration: none !important;
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
</style>