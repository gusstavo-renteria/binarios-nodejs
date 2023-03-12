#! /usr/bin/env node
const yargs = require('yargs')

const { reactController, viteReactController } = require('./react.controller.js')
const { vueController, viteVueController } = require('./vue.controller.js')

const PROJECTS = [
  'html',
  'react',
  'vue',
  'vite-react',
  'vite-vue',
  'express',
  'django'
]

const getArgs = () => {
  return yargs
    .scriptName('project-custom')
    .usage('$0 <cmd> [args]')

    // * Opción para seleccionar un plantilla
    .option('project', {
      alias: 'p',
      describe: 'Seleccione una plantilla',
      choices: PROJECTS,
      demandOption: true,
    })

    // * Opción para configurar el nombre
    .option('name', {
      alias: 'n',
      describe: 'Seleccione un nombre para el proyecto',
      type: 'string',
      demandOption: true,
    })

    // * Opción para personalizar la plantilla
    .option('configured', {
      alias: 'c',
      describe: 'Crear la plantilla con sus configuraciones',
      type: 'boolean',
      default: true
    })

    // * Opción para elegir el administrador de paquetes 'yarn | npm'
    .option('admin', {
      alias: 'a',
      describe: 'Selecciones el administrador de paquetes',
      choices: ['yarn', 'npm'],
      default: 'yarn'
    })

    // * Opción para crear el proyecto de forma interactiva
    .option('interactive', {
      alias: 'i',
      describe: 'Crear la plantilla con sus configuraciones',
      type: 'boolean',
      default: false
    })

    .help()
    .argv
}

const initProject = ({ project, name, configured, admin }) => {
  switch(project) {
    case 'react':
      reactController({ name, configured, admin })
      break
    case 'vue':
      vueController({ name, configured, admin })
      break
    case 'vite-react':
      viteReactController({ name, configured, admin })
      break
    case 'vite-vue':
      viteVueController({ name, configured, admin })
      break
    default:
      console.log(`[#] '${ project }' se encuentra en desarrollo`)
      break
  }
}

module.exports = {
  getArgs,
  initProject
}