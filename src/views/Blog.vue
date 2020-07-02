<template>
    <div class="blog">
        <h1 class="header">blog:</h1>
        <main class="blog-wrap">
            <section class="blog-container" v-for="post in posts" v-bind:key="post.id">
                <v-card v-bind:to="getBlogURL(post.id)" link hover
                        class="blog-card">
                    <v-img
                            class="white--text align-end"
                            height="200px"
                            v-bind:src="getImageURL(post.image)"
                    >
                    </v-img>
                    <v-card-title class="blog-card-title">{{post.title}}</v-card-title>
                    <v-card-subtitle class="pb-0 blog-card-subtitle">{{post.date.date}}</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div>{{post.content}}</div>
                    </v-card-text>
                </v-card>
            </section>
        </main>
    </div>
</template>

<script>
    export default {
        data: () => (
            {
                posts: []
            }
        ),
        mounted() {
            this.$http({method: "GET", "url": `${this.$backend}/api/blog`})
                .then(result => {
                    this.posts = result.data;
                })
                .catch((error) => {
                    /* eslint-disable-next-line no-console */
                    console.error(error);
                })
        },
        methods: {
            getImageURL(link) {
                if (link == null) {
                    return "https://cdn.pixabay.com/photo/2018/09/03/22/05/programming-3652497_1280.jpg";
                } else {
                    return link;
                }
            },
            getBlogURL(id) {
                return `/blog/${id}`;
            }
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