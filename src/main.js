import * as AdaptiveCards from "adaptivecards";

/* Default Template card imports. */
import defaultCardJson from './default-template/default-template.json' assert { type: 'json' };
import data from './default-template/default-template-data.json' assert { type: 'json' };

/* MSFT Badge Template card imports. */
import microsoftcardJson from './microsoft-badge-template/microsoft-badge-template.json' assert { type: 'json' };
import msftData from './microsoft-badge-template/microsoft-badge-template-data.json' assert { type: 'json' };



// Create an AdaptiveCard instance
var adaptiveCard = new AdaptiveCards.AdaptiveCard();

// Introduce the data from the data.json file into the template.
const cardJson = replacePlaceholders(microsoftcardJson, msftData);

// Parse the card payload
adaptiveCard.parse(cardJson);
// Render the card to an HTML element:
var renderedCard = adaptiveCard.render();

//function pickCard()

// Append the card to the document.
document.getElementById("cardContainer").appendChild(renderedCard);

function pickCardTemplate(template) {
    document.getElementById("cardContainer").removeChild();
    var cardJson;
    if (template == 0) {
        cardJson = replacePlaceholders(defaultCardJson, data);
    } else {
        cardJson = replacePlaceholders(microsoftcardJson, msftData);
    }

    adaptiveCard.parse(cardJson);
    renderedCard = adaptiveCard.render();
    document.getElementById("cardContainer").appendChild(renderedCard);
}



/* Helper functions. */

/**
 * Replaces the placeholder values in the JSON with the actual ones fetched from the data file.
 * @param {*} template      the JSON file containing the placeholder values to be replaced by actual values
 * @param {*} data          the JSON file containing the actual values
 * @returns
 */
function replacePlaceholders(template, data) {
    const jsonString = JSON.stringify(template);
    console.log(jsonString)
    const replacedString = jsonString.replace(/\${([^}]+)}/g, (match, key) => {
        const value = getValueByKey(key, data);
        return value !== undefined ? value : match;
    });

    return JSON.parse(replacedString);
}

/**
 * Return the value found for the specific key in the data JSON file.
 * @param {*} key           the key to be replaced with the actual value
 * @param {*} data          the value that we replace the key with
 * @returns
 */
function getValueByKey(key, data) {
    console.log(key);
    const keys = key.split('.');
    let value = data;
    console.log(keys);
    for (const k of keys) {
        value = value[k];
        if (value === undefined) {break;}
    }

    return value;
}


// Set the adaptive card's event handlers. onExecuteAction is invoked
// whenever an action is clicked in the card
/*
adaptiveCard.onExecuteAction = function(action) {
    document.body.removeChild(renderedCard);
    document.body.appendChild(renderedBackCard)
}
*/