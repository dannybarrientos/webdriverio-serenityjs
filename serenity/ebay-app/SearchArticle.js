import 'mocha'
import { Task, Log, actorCalled } from '@serenity-js/core';
import { Navigate, Enter, Click, PageElement, Text, By } from '@serenity-js/web';

export class SearchArticle {
    static openBrowser = (urlString) =>
        Task.where(`#actor navigate to an articles list`,
            Navigate.to(urlString),
            Click.on(this.#searchInput()),
        );

    static IntoSearchWord = (wordString) =>
        Task.where(`#actor search for articles`,
            Enter.theValue(wordString).into(this.#searchInput()),
            Click.on(this.#searchBtn()),
        );

    static resultNumbersWord = () =>
        Task.where(`#actor valida the result`,
            Click.on(this.#getResultsFound()),
            Log.the(Text.of(this.#getResultsFound()))
        );

    static #searchInput = () =>
        PageElement.located(By.css('#gh-ac')).describedAs('Ingresar Articulos a Buscar');

    static #searchBtn = () =>
        PageElement.located(By.css('#gh-btn')).describedAs('Click Botón Articulos');

    static #getResultsFound = () =>
        PageElement.located(By.css('.srp-controls__count-heading > .BOLD:nth-child(1)')).describedAs('numero de Artículos encontrados');

}
