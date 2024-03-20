## Español
**Cómo usar el proyecto de plantilla Serenity/JS-Mocha-WebdriverIO con Serenity/JS y GitHub Action**

**Instalación**

1. Clone el repositorio:

```
git clone https://github.com/dannybarrientos/webdriverio-serenityjs.git
```

2. Instale las dependencias:

```
cd /webdriverio-serenityjs
npm install
```

**Configuración**

El proyecto está configurado para usar Chrome como navegador predeterminado. Para cambiar el navegador, edite el archivo `wdio.conf.js` y cambie el valor de la propiedad `browser`.

También puede configurar las opciones de Serenity/JS editando el archivo `serenity.conf.js`.

**Ejecución de pruebas**

Para ejecutar todas las pruebas, ejecute el siguiente comando:

```
npm run serenity
```

Para ejecutar las pruebas por tags, ejecute el siguiente comando:

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
[![Serenity BDD Report](https://serenity-js.org/images/serenity-bdd-report-icon.svg)](https://github.com/[your-username]/[your-project]/actions/runs/[run-id]/artifacts/browserstack/report.html)
```

Reemplace `[your-username]` y `[your-project]` con su nombre de usuario de GitHub y el nombre de su proyecto. Reemplace `[run-id]` con el ID de la ejecución de pruebas que desea mostrar.

Por ejemplo, si el ID de la ejecución de pruebas es `1234567890`, el código anterior se vería así:

```markdown
[![Serenity BDD Report](https://serenity-js.org/images/serenity-bdd-report-icon.svg)](https://github.com/[your-username]/[your-project]/actions/runs/1234567890/artifacts/browserstack/report.html)
```

Esto agregará una imagen al archivo `README.md` que, al hacer clic, abrirá el informe de pruebas en una nueva pestaña.

**Para obtener más información sobre cómo usar Serenity/JS, consulte la documentación oficial:**

* https://serenity-js.org/: https://serenity-js.org/

**Estructura organizativa**

El proyecto está organizado de la siguiente manera:

* **El archivo `README.md`** contiene instrucciones sobre cómo instalar

## Ingles
**How to use the Serenity/JS-Mocha-WebdriverIO project template with Serenity/JS and GitHub Actions**

**Installation**

1. Clone the repository:

```
git clone https://github.com/dannybarrientos/webdriverio-serenityjs.git
```

2. Install the dependencies:

```
cd /webdriverio-serenityjs
npm install
```

**Configuration**

The project is configured to use Chrome as the default browser. To change the browser, edit the `wdio.conf.js` file and change the value of the `browser` property.

You can also configure Serenity/JS options by editing the `serenity.conf.js` file.

**Running tests**

To run all tests, run the following command:

```
npm run serenity
```

To run tests by tags, run the following command:

```
npm run serenitytag
```

This will run the tests in the default browser.

**Using with GitHub Actions**

The project is configured to use GitHub Actions to perform continuous integration (CI) testing. To enable CI testing, add the following file to the root of the project:

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

This file configures a job called `CI` that will run whenever a push is made to the `main` branch. The job runs on an Ubuntu machine and uses Node.js 16. The job first downloads the project, then installs the dependencies, and finally runs the tests.

**Including the report in the GitHub page**

To include the test report in the GitHub page, add the following code to the `README.md` file:

```markdown
[![Serenity BDD Report](https://serenity-js.org/images/serenity-bdd-report-icon.svg)](https://github.com/[your-username]/[your-project]/actions/runs/[run-id]/artifacts/browserstack/report.html)
```

Replace `[your-username]` and `[your-project]` with your GitHub username and the name of your project. Replace `[run-id]` with the ID of the test run that you want to show.

For example, if the ID of the test run is `1234567890`, the code above would look like this:

```markdown
[![Serenity BDD Report](https://serenity-js.org/images/serenity-bdd-report-icon.svg)](https://github.com/[your-username]/[your-project]/actions/runs/1234567890/artifacts/browserstack/report.html)
```

This will add an image to the `README.md` file that, when clicked, will open the test report in a new tab.

**For more information on how to use Serenity/JS, see the official documentation:**

* https://serenity-js.org/

**Organizational structure**

The project is organized as follows:

* **The `README.md` file** contains instructions on how to install
