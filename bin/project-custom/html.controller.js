const fse = require('fs-extra')
const path = require('path')
const process = require('process')
const { execSync } = require('child_process')

const PLATFORM = process.platform

const htmlController = ({ name }) => {
  try {
    // * All -> html # Inicio
    console.log('[+] Proyecto \'html\'')
    fse.copySync(path.join(__dirname, '..' , 'assets', 'html'), path.join(process.cwd(), name))

    // * Linux -> html # Configure
    if(PLATFORM == 'linux') {
      console.log('[+] Agregando \'normalize.css\'')
      execSync(`wget https://necolas.github.io/normalize.css/8.0.1/normalize.css -O ${ path.join(process.cwd(), name, 'src', 'normalize.css') }`, {stdio: 'inherit'})
    }
      
    // * All -> react # Terminado
    console.log('\n[#] Terminado :)\n')
  }catch(e) {
    console.log('\n[-] Error al configurar el proyecto\n', e)
  }
}

module.exports = {
  htmlController
}