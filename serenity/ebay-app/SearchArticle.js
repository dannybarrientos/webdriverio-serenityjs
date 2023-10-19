import {  Check, d, Task } from '@serenity-js/core';
import {Navigate, By, CssClasses, Click, Enter, PageElement } from '@serenity-js/web';
export class SearchArticle {

    // Public API captures the business domain-focused tasks
    // that an actor interacting with a TodoList app can perform

    static openBrowser = (urlString) =>
        Task.where(`#actor navigate url an articles list`,
            Navigate.to(urlString),
            Click.on(this.#searchInput()),
        )

    static IntoSearchWord = (wordString) =>
        Task.where(`#actor search an articles list`,
            Enter.theValue(wordString).into(this.#searchInput()),
            Click.on(this.#searchBtn()),
        )

    static resultNumbersWord = () =>
            // Agrega una tarea para imprimir el resultado en la consola
            Task.where(`#actor prints the result`,
                Click.on(this.#getResultsFound())
            )


    // Private API captures ways to locate interactive elements and data transformation logic.
    // Private API supports the public API and is not used in the test scenario directly.

    static #searchInput = () =>
        PageElement.located(By.css('#gh-ac')).describedAs('Ingresar Articulos a Buscar')

    static #searchBtn = () =>
        PageElement.located(By.css('#gh-btn')).describedAs('Click Botón Articulos')

        static #getResultsFound = () =>
        PageElement.located(By.xpath('//*[@class="srp-controls__control srp-controls__count"]')).describedAs('Resultado de Búsqueda de Artículos')


    static getResultsNumber = () =>   {
            const arrText = this.#getResultsFound().getText().split("");
            return arrText[0];
        };
}
