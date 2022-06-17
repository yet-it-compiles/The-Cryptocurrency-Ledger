/**
 *  Search for potential matches as a user types into a text field
 */

/**
 * Parse JSON file in search of matching IDs
 * @param event On change from text input field to be predicted
 * @param path Path to JSON file containing coin data
 * @returns {*[]} An array of IDs matching the current text input
 */
export function autoSearch(event,path){
    // Import JSON data
    const rawData = require(path);
    let data = JSON.parse(rawData);

    // Extract the value from the event param
    let input = event.target.value;

    // Initialize empty array to push matches into
    let matches = [];

    // To avoid excessive results wait for at least 2 characters
    if (input.length > 1)
        for (let index = 0; index < data.length; index++)
            if (data[index]['id'].match(input))
                matches.push(data[index]['id'])

    return matches;
}

