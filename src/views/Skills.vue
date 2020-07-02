<template>
    <div class="about">
        <main class="timeline-container">
            <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item class="timeline-item"
                        v-for="(time, n) in timeline"
                        :key="n"
                >
                    <span slot="opposite" class="timeline-year">{{time.year}}</span>
                    <v-card class="elevation-2 timeline-card">
                        <v-card-title class="headline">{{time.title}}</v-card-title>
                        <v-card-text class="timeline-text">{{time.content}}</v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </main>
    </div>
</template>

<style>
    .timeline-container {
        margin-right: 30px;
        margin-left: 30px;
    }

    .timeline-item {
        -webkit-animation: 3s ease 0s normal forwards 1 fadein;
        animation: 3s ease 0s normal forwards 1 fadein;
    }
    @keyframes fadein{
        0% { opacity:0; }
        66% { opacity:1; }
        100% { opacity:1; }
    }

    @-webkit-keyframes fadein {
        0% {
            opacity: 0;
        }
        66% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }

    .timeline-card {
        text-align: start;
    }

    .timeline-text {
        font-size: 16px;
        white-space: pre-line;
        color: white !important;
    }

    .timeline-year {
        font-size: 30px;
        color: #2196f3;
    }
</style>

<script>
    export default {
        data: () => ({
            reverse: true,
            placeholder: [
                {
                    title: 'AutoITScript',
                    year: '2012',
                    content: 'Virtual machine orchestration software for VMWare workstation on Windows server.'
                },
                {
                    title: 'PHP, CodeIgniter Framework',
                    year: '2013',
                    content: 'Started my career in PHP, developing autocomplete software.'
                },
                {
                    title: 'Javascript, Ace9 Editor',
                    year: '2014',
                    content: 'Created a custom language implementation with syntax parsing and highlighting for markup that\'s used internally.'
                },
                {
                    title: 'PHP',
                    year: '2015',
                    content: 'Custom solution for a highly scalable system, used to serve millions of users. Technologies used in the process:\n' +
                        'Javascript, Polymer - frontend solution with web components.\n' +
                        'Javascript, WebSockets - "real time"  server-client communication solution to provide fast updates/change previews.\n' +
                        'Mysql/Redshift, memcached alongside redis, and many others.'
                },
                {
                    title: 'AWS Services',
                    year: '2016',
                    content: 'Integration of AWS services in PHP.'
                },
                {
                    title: 'Atlassian Suite',
                    year: '2016-2018',
                    content: 'Updating and upkeep of instances of Jira/Bamboo/Bitbucket.'
                },
                {
                    title: 'Zabbix',
                    year: '2017-2018',
                    content: 'Custom monitoring solution implementation for a scalable system, complementing AWS Cloudwatch.'
                },
                {
                    title: 'Operations alongside development',
                    year: '2017-2019',
                    content: 'Development environment management, server software and dependency management, deployment automation, database replication (galera)\n' +
                        'Key technologies: Vagrant, AWS OpsWorks, Chef, Nginx, NodeJS.\n' +
                        'Server assembly, installation, configuration.'
                },
                {
                    title: 'Self hosted',
                    year: '2018',
                    content: 'Familiarised with PfSense, basics of networking.\n' +
                        'Proxmox virtualization, self-hosted service setup and maintenance including Gitlab, Nextcloud, MariaDB, DNS server, QuakeArena'
                },
                {
                    title: 'ELK (Elasticsearch, Logstash, Kibana)',
                    year: '2018-2019',
                    content: 'Monitoring solution extension with enhanced statistical capabilities for performance analysis.'
                },
                {
                    title: 'Docker, Jenkins',
                    year: '2019',
                    content: 'Greatly expanded my knowledge of Bash. Started working with Docker, building images, creating development environments.'
                },
                {
                    title: 'Webhooks',
                    year: '2020',
                    content: 'Lightweight implementation of CI&CD\n' +
                        'Webserver hosting the content listening to webhooks for update, used for fast prototyping and self-hosted third party services.'
                },
            ],
            timeline: []
        }),
    mounted(){
            setTimeout(this.addMoreCode)
        },
        methods: {
            addMoreCode: function () {
                if (this.placeholder.length == 0){
                    return
                }
                this.timeline.push(this.placeholder[0]);
                this.placeholder.splice(0, 1);
                setTimeout(this.addMoreCode, 500)
            }
        }
    };
</script>