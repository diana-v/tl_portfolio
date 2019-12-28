<template>
    <div id="app">
        <v-app>
            <div>
                <v-toolbar>
                    <v-toolbar-title>
                        <a href="/">
                            <v-img class="mr-3" src="@/assets/tl_logo.png" height="40px" width="50px"></v-img>
                        </a>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="d-none d-md-block">
                        <v-btn class="nav-btn" text v-for="(item, index) in menu"
                               :key="index">{{ item.title }}</v-btn>
                    </v-toolbar-items>

                    <v-toolbar-items>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn class="d-block d-md-none"
                                       v-on="on">
                                    <v-icon class="material-icons">menu_open</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                        v-for="(item, index) in menu"
                                        :key="index">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-toolbar-items>
                </v-toolbar>
            </div>
        </v-app>
    </div>
</template>


<script>
    export default {
        name: "app",
        data: () => ({
            menu: [
                {title: 'about'},
                {title: 'featured'},
                {title: 'portfolio'},
                {title: 'blog'},
                {title: 'contact'},
            ]
        }),
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Ubuntu Mono', monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .nav-btn {
        font-size: 20px !important;
        text-transform: none;
    }
</style>
