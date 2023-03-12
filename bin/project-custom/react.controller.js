const path = require('path')
const process = require('process')
const { execSync } = require('child_process')

const PLATFORM = process.platform

const reactController = ({ name, configured, admin }) => {
  if(PLATFORM == 'linux') {
    try {
      // * Linux -> react # Inicio
      console.log('[+] Proyecto \'react\'')
      if(admin == 'yarn') execSync(`yarn create react-app ${ name }`, {stdio: 'inherit'})
      else if(admin == 'npm') execSync(`npx create-react-app ${ name }`, {stdio: 'inherit'})

      // TODO: configurar archivo personalizados 'configured'
      if(configured) {
        console.log('\n[+] Configurando archivos personalizados')
      }
    
      // * Linux -> react # Terminado
      console.log('\n[#] Terminado :)\n')
    }catch(e) {
      console.log('\n[-] Error al configurar el proyecto\n', e)
    }
  }
}

const viteReactController = async ({ name, configured, admin }) => {
  if(PLATFORM == 'linux') {
    try {
      // * Linux -> vite-react # Inicio
      console.log('[+] Proyecto \'vite-react\'')
      if(admin == 'yarn') execSync(`yarn create vite ${ name } --template react`, {stdio: 'inherit'})
      else if(admin == 'npm') execSync(`npm create vite@latest ${ name } -- --template react`, {stdio: 'inherit'})

      // * Linux -> vite-react # Cargando dependencias
      console.log('\n[+] Cargado dependencias necesarias')
      if(admin == 'yarn') execSync(`yarn --cwd ${ path.join(process.cwd(), name) }`, {stdio: 'inherit'})
      else if(admin == 'npm') execSync(`npm --prefix ${ path.join(process.cwd(), name) } install`, {stdio: 'inherit'})
      
      // TODO: configurar archivo personalizados 'configured'
      if(configured) {
        console.log('\n[+] Configurando archivos personalizados')
      }

      // * Linux -> vite-react # Terminado
      console.log('\n[#] Terminado :)\n')
    }catch(e) {
      console.log('\n[-] Error al configurar el proyecto\n', e)
    }
  }
}

module.exports = {
  reactController,
  viteReactController
}