**Cómo usar el proyecto de plantilla Serenity/JS-Mocha-WebdriverIO con Serenity/JS y GitHub Actions**

Este proyecto de plantilla proporciona una base para comenzar a realizar pruebas de aceptación de aplicaciones web utilizando Serenity/JS, Cucumber y WebdriverIO.

**Instalación**

Para instalar el proyecto, clone el repositorio y luego instale las dependencias:

```
git clone https://github.com/dannybarrientos/webdriverio-serenityjs.git
cd /webdriverio-serenityjs
npm install
```

**Configuración**

El proyecto está configurado para usar Chrome como navegador predeterminado. Para cambiar el navegador, edite el archivo `wdio.conf.js` y cambie el valor de la propiedad `browser`.

También puede configurar las opciones de Serenity/JS editando el archivo `serenity.conf.js`.

**Ejecución de pruebas todos los test**

Para ejecutar las pruebas, ejecute el siguiente comando:

```
npm run serenity
```

**Ejecución de pruebas por tags**

Para ejecutar las pruebas, ejecute el siguiente comando:

```
npm run serenitytag
```

Esto ejecutará las pruebas en el navegador predeterminado.

**Uso con GitHub Actions**

El proyecto está configurado para usar GitHub Actions para realizar pruebas de integración continua (CI). Para habilitar las pruebas de CI, agregue el siguiente archivo a la raíz del proyecto:

```yaml
name: e2e

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]
    types: [ opened, synchronize ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [ 20.x ]

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3.8.1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm i -D
      - run: npm run serenitytag

      - name: Deploy report to Github Pages
        if: always()
        uses: peaceiris/actions-gh-pages@v3.9.3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: target/site/serenity/
          clean: true
```

Este archivo configura un trabajo llamado `CI` que se ejecutará cada vez que se realice un empuje a la rama `main`. El trabajo se ejecuta en una máquina Ubuntu y usa Node.js 16. El trabajo primero descarga el proyecto, luego instala las dependencias y, finalmente, ejecuta las pruebas.

**Inclusión del informe en la página de GitHub**

Para incluir el informe de pruebas en la página de GitHub, agregue el siguiente código al archivo `README.md`:

```markdown
[![Serenity BDD Report](https://serenity-js.org/images/serenity-bdd-report-icon.svg)](https://github.com/dannybarrientos/webdriverio-serenityjs/actions/runs/6681185485)
```

Reemplace `[your-username]` y `[your-project]` con su nombre de usuario de GitHub y el nombre de su proyecto. Reemplace `[run-id]` con el ID de la ejecución de pruebas que desea mostrar.

Por ejemplo, si el ID de la ejecución de pruebas es `1234567890`, el código anterior se vería así:

```markdown
[![Serenity BDD Report](https://serenity-js.org/images/serenity-bdd-report-icon.svg)](https://github.com/[your-username]/[your-project]/actions/runs/1234567890/artifacts/browserstack/report.html)
```

Esto agregará una imagen al archivo `README.md` que, al hacer clic, abrirá el informe de pruebas en una nueva pestaña.

Para obtener más información sobre cómo usar Serenity/JS, consulte la documentación oficial: https://serenity-js.org/
