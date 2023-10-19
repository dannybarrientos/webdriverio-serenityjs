import { By, PageElement } from '@serenity-js/web';

export const SearchForm = {
    searchField: () =>
        PageElement.located(By.id('gh-ac')).describedAs('Buscar Articulos ..'),

    searchButton: () =>
        PageElement.located(By.id('gh-btn'))
        .describedAs('Boton Articulos ..'),
}