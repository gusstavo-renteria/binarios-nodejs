#! /usr/bin/env node
const project_start = require('./project-custom/main-controller.js')

const project_start_options = project_start.getArgs()
project_start.initProject(project_start_options)