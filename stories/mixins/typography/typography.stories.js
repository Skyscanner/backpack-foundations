import { createTextParagraph } from './typography';
import { heroStyles, headingStyles, bodyStyles, labelStyles } from './typography-categories';

export default {
  title: 'Guidelines / Typography',
};

const createStyle = (container, style) => {
    return container.appendChild(createTextParagraph({ style }));
}

export const Hero = () => {
    const container = document.createElement('div');
    heroStyles.forEach((style) => createStyle(container, style));
    return container;
}

export const Heading = () => {
    const container = document.createElement('div');
    headingStyles.forEach((style) => createStyle(container, style));
    return container;
}

export const Body = () => {
    const container = document.createElement('div');
    bodyStyles.forEach((style) => createStyle(container, style));
    return container;
}

export const Label = () => {
    const container = document.createElement('div');
    labelStyles.forEach((style) => createStyle(container, style));
    return container;
}
