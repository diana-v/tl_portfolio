<template>
    <a class="about">
        <head>
        <vue-headful title="Contact"/>
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        </head>
        <h1 class="header">contact me:</h1>
        <div class="contact-ways">
            <div class="contact-icon-section">
                <a target="_blank" href="https://github.com/tomaslesc">
                    <v-icon class="contact-icon" size="50">fab fa-github</v-icon>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/tomaslesc/">
                    <v-icon class="contact-icon" size="50">fab fa-linkedin</v-icon>
                </a>
                <a v-on:click="clippy" v-on="on">
                    <v-icon class="contact-icon" size="50">fas fa-envelope</v-icon>
                </a>
            </div>

            <div class="contact-link-section">
                <div class="contact-link-wrapper"><a target="_blank" class="contact-link"
                                                     href="https://github.com/tomaslesc">GitHub</a></div>
                <div class="contact-link-wrapper"><a target="_blank" class="contact-link"
                                                     href="https://www.linkedin.com/in/tomaslesc/">LinkedIn</a></div>
                <div class="contact-link-wrapper">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a class="contact-link" v-on:click="clippy" v-on="on">Gmail</a>
                        </template>
                        <span>Click to copy my email address to your clipboard</span>
                    </v-tooltip>
                    <input type="text" style="display:none" id="clipboard" value="tom@e0.lt"></div>
            </div>
        </div>

        <div class="contact-form">
            <form>
                <v-text-field class="contact-field"
                              v-model="name"
                              :error-messages="nameErrors"
                              :counter="10"
                              label="Name"
                              required
                              @input="$v.name.$touch()"
                              @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field class="contact-field"
                              v-model="email"
                              :error-messages="emailErrors"
                              label="E-mail"
                              required
                              @input="$v.email.$touch()"
                              @blur="$v.email.$touch()"
                ></v-text-field>
                <v-textarea class="contact-field"
                            v-model="placeholder"
                            :rules="rules"
                            required
                            auto-grow
                            rows="1"
                            label="Reason for contacting"
                ></v-textarea>
                <v-btn class="mr-4" @click="submit">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </form>
        </div>
    </a>
</template>

<script>
    import {required, maxLength, email} from 'vuelidate/lib/validators'

    export default {
        name: "app",
        validations: {
            name: {required, maxLength: maxLength(10)},
            email: {required, email},
        },

        data: () => (
            {
                name: '',
                email: '',
                rules: [
                    value => !!value || 'Required.',
                    value => (value || '').length >= 20 || 'Min 20 characters',
                ]
            }
        ),
        computed: {
            nameErrors() {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
                !this.$v.name.required && errors.push('Name is required.')
                return errors
            },
            emailErrors() {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            },
        },

        methods: {
            clippy: function () {
                /* Get the text field */
                var copyText = document.getElementById("clipboard");
                //
                // /* Select the text field */
                copyText.select();

                /* Copy the text inside the text field */
                document.execCommand("copy");

                /* Alert the copied text */
                alert("My email address has been copied to your clipboard! I'll be waiting to hear from you.");
            },
            submit() {
                this.$v.$touch()
            },
            clear() {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.select = null
            },
        }
    };
</script>

<style>
    .contact-ways {
        width: 40%;
        float: left;
        align-content: start;
        display: grid;
        grid-template-columns: 30% 70%;
        grid-template-rows: auto auto 100px;
        margin-top: 40px;
    }

    .contact-form {
        width: 50%;
        float: left;
        margin-top: 40px
    }

    .contact-field {
        margin-top: 20px;
    }

    .contact-icon-section {
        grid-column: 1;
    }

    .contact-icon {
        padding-left: 15%;
        float: left;
        width: 100%;
        height: 100px;
    }

    .contact-link-section {
        grid-column: 2;
        margin-top: 40px;
        text-align: start;
    }

    .contact-link {
        text-decoration: none !important;
        color: white !important;
        width: 100%;
    }

    .contact-link-wrapper {
        height: 100px;
    }

    .contact-link:hover {
        border-bottom: 3px solid white;
        cursor: pointer;
    }

    pre {
        margin-bottom: 0;
    }

    .v-application a {
        cursor: auto;
    }

    a.contact-link:nth-child(2) {
        line-height: 100px;
    }

    div.v-input:nth-child(1),
    div.v-input:nth-child(2),
    div.v-input:nth-child(3) {
        min-height: 85px !important;
    }

    @media screen and (max-width: 610px) {
        .contact-form {
            margin-top: 70px;
            margin-left: 5%;
            width: 60%;
        }

        .contact-ways {
            margin-left: 10%;
            width: 10%;
        }

        .contact-field {
            margin-top: 0;
        }

        .contact-icon {
            padding-right: 30px;
        }

        .contact-link-section {
            display: none;
        }

        div.v-input:nth-child(1),
        div.v-input:nth-child(2),
        div.v-input:nth-child(3) {
            min-height: 100px !important;
        }
    }
</style>
