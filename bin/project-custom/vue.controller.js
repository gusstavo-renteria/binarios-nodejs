const path = require('path')
const process = require('process')
const { execSync } = require('child_process')

const PLATFORM = process.platform

const vueController = ({ name, configured, admin }) => {
  if(PLATFORM == 'linux') {
    try {
      // * Linux -> vue # Inicio
      console.log('[+] Proyecto \'vue\'')
      if(admin == 'yarn') execSync(`yarn create vue ${ name }`, {stdio: 'inherit'})
      else if(admin == 'npm') execSync(`npm init vue@latest --name ${ name }`, {stdio: 'inherit'})


      // * Linux -> vue # Cargando dependencias
      console.log('\n[+] Cargado dependencias necesarias')
      if(admin == 'yarn') execSync(`yarn --cwd ${ path.join(process.cwd(), name) }`, {stdio: 'inherit'})
      else if(admin == 'npm') execSync(`npm --prefix ${ path.join(process.cwd(), name) } install`, {stdio: 'inherit'})

      // TODO: configurar archivo personalizados 'configured'
      if(configured) {
        console.log('\n[+] Configurando archivos personalizados')
      }
    
      // * Linux -> vue # Terminado
      console.log('\n[#] Terminado :)\n')
    }catch(e) {
      console.log('\n[-] Error al configurar el proyecto\n', e)
    }
  }
}

const viteVueController = ({ name, configured, admin }) => {
  if(PLATFORM == 'linux') {
    try {
      // * Linux -> vite-vue # Inicio
      console.log('[+] Proyecto \'vite-vue\'')
      if(admin == 'yarn') execSync(`yarn create vite ${ name } --template vue`, {stdio: 'inherit'})
      else if(admin == 'npm') execSync(`npm create vite@latest ${ name } -- --template vue`, {stdio: 'inherit'})

      // * Linux -> vite-vue # Cargando dependencias
      console.log('\n[+] Cargado dependencias necesarias')
      if(admin == 'yarn') execSync(`yarn --cwd ${ path.join(process.cwd(), name) }`, {stdio: 'inherit'})
      else if(admin == 'npm') execSync(`npm --prefix ${ path.join(process.cwd(), name) } install`, {stdio: 'inherit'})
      
      // TODO: configurar archivo personalizados 'configured'
      if(configured) {
        console.log('\n[+] Configurando archivos personalizados')
      }

      // * Linux -> vite-vue # Terminado
      console.log('\n[#] Terminado :)\n')
    }catch(e) {
      console.log('\n[-] Error al configurar el proyecto\n', e)
    }
  }
}

module.exports = {
  vueController,
  viteVueController
}