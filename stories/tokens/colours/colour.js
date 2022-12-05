import './colour.scss';

export const createColourContainer = ({ backgroundColor, name }) => {

    const colourContainer = document.createElement('span');
    colourContainer.className = "colour-container";

    const colourSwatch = document.createElement('div');
    colourSwatch.className = "colour-swatch";
    colourSwatch.style.backgroundColor = backgroundColor;

    const colourName = document.createElement('div');
    colourName.className = "colour-name";
    colourName.innerText = name;

    colourContainer.appendChild(colourSwatch);
    colourContainer.appendChild(colourName);

    return colourContainer;
};