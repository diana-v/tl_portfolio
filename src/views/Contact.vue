<template>
    <div class="about">
        <h1 class="header">contact me:</h1>
        <main class="contact-ways">
            <section class="contact-icon-section">
                <a target="_blank" href="https://github.com/tomaslesc" aria-label="Github link" rel="noreferrer">
                    <font-awesome-icon :icon="['fab', 'github']" class="icon" alt="Github"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/tomaslesc/" aria-label="LinkedIn link" rel="noreferrer">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" alt="LinkedIn"/>
                </a>
                <a v-on:click="clippy" v-on="on" aria-label="Press here to copy my email to clipboard">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" alt="Envelope"/>
                </a>
            </section>

            <section class="contact-link-section">
                <div class="contact-link-wrapper"><a target="_blank" class="contact-link" aria-label="Github link"
                                                     href="https://github.com/tomaslesc" rel="noreferrer">GitHub</a></div>
                <div class="contact-link-wrapper"><a target="_blank" class="contact-link" aria-label="LinkedIn link"
                                                     href="https://www.linkedin.com/in/tomaslesc/" rel="noreferrer">LinkedIn</a></div>
                <div class="contact-link-wrapper">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a class="contact-link" v-on:click="clippy" v-on="on">Gmail</a>
                        </template>
                        <span>Click to copy my email address to your clipboard</span>
                    </v-tooltip>
                    <input type="email" style="display:none" id="clipboard" value="tom@e0.lt">
                </div>
            </section>
        </main>

        <section class="contact-form">
            <form>
                <v-text-field class="contact-field"
                              v-model="name"
                              :error-messages="nameErrors"
                              :counter="30"
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
                            v-model="message"
                            required
                            auto-grow
                            rows="1"
                            label="Reason for contacting"
                            :error-messages="messageErrors"
                            @input="$v.message.$touch()"
                            @blur="$v.message.$touch()"
                ></v-textarea>
                <v-btn class="mr-4" @click="submit_message">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </form>
            <div class="contact-alert">
                <v-alert v-if="c_error" dense type="error">{{c_error_msg}}</v-alert>
                <v-alert v-if="c_success" dense type="success">
                    Your message was successfully sent.
                </v-alert>
            </div>
        </section>
    </div>
</template>

<script>
    import {validationMixin} from "vuelidate";
    import {required, maxLength, minLength, email} from 'vuelidate/lib/validators'

    export default {
        name: "app",

        mixins: [validationMixin],

        validations: {
            name: {required, maxLength: maxLength(30)},
            email: {required, email},
            message: {required, minLength: minLength(20)},
        },

        data: () => (
            {
                name: null,
                email: null,
                message: null,
                c_error: false,
                c_success: false,
                c_error_msg: null,
                on: false,
            }
        ),
        methods: {
            submit_message() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.c_error = true;
                    this.c_error_msg = "An error occurred please try again.";
                    return
                }
                this.$http.post(this.$contact_url, {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                    .then(() => {
                        this.c_error = false;
                        this.c_success = true;
                    })
                    .catch((error) => {
                        this.c_error = true;
                        this.c_error_msg = error.response.data;
                    })
            },
            clear() {
                this.$v.$reset();
                this.name = '';
                this.email = '';
                this.select = null
            },

            clippy: function () {
                var copyText = document.getElementById("clipboard");
                copyText.select();
                navigator.clipboard.writeText(copyText.value);
                alert("My email address has been copied to your clipboard! I'll be waiting to hear from you.");
            },
        },
        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.maxLength && errors.push('Name must be at most 30 characters long');
                !this.$v.name.required && errors.push('Name is required.');
                return errors
            },
            emailErrors() {
                const errors = [];
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.email && errors.push('Must be valid e-mail');
                !this.$v.email.required && errors.push('E-mail is required');
                return errors
            },
            messageErrors() {
                const errors = [];
                if (!this.$v.message.$dirty) return errors;
                !this.$v.message.minLength && errors.push('Please type your message.');
                !this.$v.message.required && errors.push('Message is required.');
                return errors
            },
        },
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

    .icon {
        float: left;
        color: #ffffff;
        font-size: 70px;
        margin: 20px 10px 5px 30%;
        padding-right: 20px;
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
        border-bottom: 3px solid #2391e8;
        cursor: pointer;
    }

    .contact-alert {
        padding-top: 30px;
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
