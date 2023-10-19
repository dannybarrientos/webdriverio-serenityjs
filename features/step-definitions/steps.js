import { Given, When, Then } from '@cucumber/cucumber'
//import { Ensure, equals } from '@serenity-js/assertions'

import { SearchArticle } from '../../serenity/ebay-app/SearchArticle.js'

Given('{actor} opens the eBay {string}', async (actor, urlstring) => {
    await actor.attemptsTo(
        SearchArticle.openBrowser(urlstring),
    )
})

When('{actor} searches for{string}', async (actor, wordString) => {
    await actor.attemptsTo(
        SearchArticle.IntoSearchWord(wordString),
    )
})

Then('{actor} prints the number of items found', async (actor) => {
    await actor.attemptsTo(
        SearchArticle.resultNumbersWord(),
    )
})