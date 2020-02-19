<template>
    <div class="about">
        <head>
            <vue-headful title="Skills"/>
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        </head>
        <div class="timeline-container">
        <div>
            <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                        v-for="n in timeline"
                        :key="n"
                >
                    <span slot="opposite" class="timeline-year">{{n.year}}</span>
                    <v-card class="elevation-2 timeline-card">
                        <v-card-title class="headline">{{n.title}}</v-card-title>
                        <v-card-text class="timeline-text">{{n.content}}</v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>
        </div>
    </div>
</template>

<style>
    .timeline-container {
        margin-right: 30px;
        margin-left: 30px;
    }

    .timeline-card {
        text-align: start;
    }

    .timeline-text {
        font-size: 16px;
        white-space: pre-line;
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
            timeline: [
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
            ]
        }),
    }
</script>