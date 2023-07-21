import { Command } from 'commander';
import * as path from 'path';
import * as fse from 'fs-extra';
import { execSync } from 'child_process';

const createCommand = new Command('create-starts <nombreDeLaApp>').description(
  'Crear un nuevo proyecto',
);

createCommand.action(({ nombreDeLaApp }: { nombreDeLaApp: string }) => {
  console.log('Nombre del proyecto:', nombreDeLaApp);

  const projectPath = path.join(process.cwd(), nombreDeLaApp);

  try {
    // Crear el directorio del proyecto si no existe
    if (!fse.existsSync(projectPath)) {
      fse.mkdirSync(projectPath);
      console.log('Directorio del proyecto creado:', projectPath);
    } else {
      console.log('El directorio del proyecto ya existe:', projectPath);
      return;
    }

    // Crear subdirectorios dentro del proyecto
    const directories = ['src', 'public', 'config', 'docs'];
    directories.forEach((directory) => {
      const dirPath = path.join(projectPath, directory);
      fse.mkdirSync(dirPath);
      console.log('Subdirectorio creado:', dirPath);
    });

    // Crear archivos dentro del proyecto
    const files = [
      { name: 'index.js', content: '// Archivo principal' },
      { name: 'package.json', content: '{ "name": "nuevo_proyecto", "version": "1.0.0" }' },
    ];
    files.forEach((file) => {
      fse.writeFileSync(path.join(projectPath, file.name), file.content);
      console.log('Archivo creado:', file.name);
    });

    console.log('¡Proyecto creado exitosamente!');

    // Ejecutar el comando npx strats create-starts con el nombre del proyecto como argumento
    execSync(`npx strats create-starts ${nombreDeLaApp}`, {
      stdio: 'inherit', // Mostrar la salida del comando en la consola actual
      cwd: projectPath, // Establecer el directorio de trabajo actual para npx
    });
  } catch (err) {
    console.error('Error al crear el proyecto:', err);
  }
});

export default createCommand;
