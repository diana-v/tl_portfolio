<template>
    <a class="about">
        <h1 class="header">contact me:</h1>
        <div class="contact-ways">
            <v-icon class="contact-icon" size="50">fab fa-github</v-icon>
            <pre class="contact-section">
                <a target="_blank" class="contact-link" href="https://github.com/tomaslesc">GitHub</a>
            </pre>

            <v-icon class="contact-icon" size="50">fab fa-linkedin</v-icon>
            <pre class="contact-section">
                <a target="_blank" class="contact-link" href="https://www.linkedin.com/in/tomaslesc/">LinkedIn</a>
            </pre>

            <v-icon class="contact-icon" size="50">fas fa-envelope</v-icon>
            <pre class="contact-section">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <a class="contact-link" v-on:click="clippy" v-on="on">Gmail</a>
                    </template>
                <span>Click to copy my email address to your clipboard</span>
                </v-tooltip>
            </pre>
            <input type="text" style="display:none" id="clipboard" value="tom@e0.lt">
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
        grid-template-columns: 40% 60%;
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

    .contact-section {
        text-align: start;
        width: 60%;
        min-width: 90px;
        float: left;
        font-size: 18px;
        color: white;
        white-space: pre-wrap; /* Since CSS 2.1 */
        white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
        white-space: -o-pre-wrap; /* Opera 7 */
        word-wrap: break-word; /* Internet Explorer 5.5+ */
    }

    .contact-icon {
        padding-left: 15%;
        float: left;
    }

    .contact-link {
        text-decoration: none !important;
        color: white !important;
        width: 70%;
    }

    .contact-link:hover {
        border-bottom: 3px solid white;
    }

    pre {
        margin-bottom: 0;
    }

    pre.contact-section:nth-child(6) {
        height: 81px;
        overflow: hidden;
        display: ruby;
        align-content: middle;
    }

    a.contact-link:nth-child(2) {
        line-height: 100px;
    }

@media screen and (max-width: 610px) {
    .contact-form {
        margin-top: 0px;
        margin-left: 25%;
    }

    .contact-ways {
        margin-left: 30%;
    }

    .contact-field {
        margin-top: 0px;
    }

    .contact-icon {
        padding-right: 30px;
    }
}
</style>