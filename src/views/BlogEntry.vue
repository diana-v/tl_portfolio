<template>
    <div>
        <head>
            <vue-headful title="Blog Entry"/>
        </head>
        <h1 class="blog-header">{{entry.title}}</h1>
        <h4 class="blog-subheader">{{entry.date.date}}</h4>
        <figure class="blog-entry-image-container">
            <img class="blog-entry-image"
                 v-bind:src=getImageURL(entry.image)
            >
        </figure>
        <article>
            <p class="blog-text">{{entry.content}}</p>
        </article>
    </div>
</template>

<script>
    export default {
        data: () => (
            {
                entry: {}
            }
        ),
        mounted() {
            let url = `${this.$backend}/api/blog/${this.$route.params.id}`;
            this.$http({method: "GET", "url": url})
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
            }
        },
    }
</script>

<style>
    .blog-header {
        text-align: center;
        /*padding-left: 60px;*/
        padding-top: 30px;
        color: white;
    }

    .blog-subheader {
        text-align: center;
        padding-bottom: 30px;
        color: #acacac;
    }

    .blog-entry-image-container {
        width: 100%;
    }

    .blog-entry-image {
        height: 400px;
    }

    .blog-text {
        color: white;
        text-align: justify;
        margin: 30px 150px;
    }
</style>