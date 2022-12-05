import { createColourContainer } from './colour.js';
import { coreColors, lineColors, marcommsColors, statusColors, surfaceColors, textColors } from '../../../packages/bpk-foundations-web/tokens/base.es6';

export default {
  title: 'Guidelines / Colour',
};

const createColour = (container, colour, group) => {
    return container.appendChild(createColourContainer({ backgroundColor: group[colour], name: colour }))
}

export const CoreColour = () => {
    const container = document.createElement('div');
    Object.keys(coreColors).forEach((colour) => createColour(container, colour, coreColors));
    return container;
}

export const LineColour = () => {
    const container = document.createElement('div');
    Object.keys(lineColors).forEach((colour) => createColour(container, colour, lineColors));
    return container;
}

export const MarcommsColour = () => {
    const container = document.createElement('div');
    Object.keys(marcommsColors).forEach((colour) => createColour(container, colour, marcommsColors));
    return container;
}

export const StatusColour = () => {
    const container = document.createElement('div');
    Object.keys(statusColors).forEach((colour) => createColour(container, colour, statusColors));
    return container;
}

export const SurfaceColour = () => {
    const container = document.createElement('div');
    Object.keys(surfaceColors).forEach((colour) => createColour(container, colour, surfaceColors));
    return container;
}

export const TextColour = () => {
    const container = document.createElement('div');
    Object.keys(textColors).forEach((colour) => createColour(container, colour, textColors));
    return container;
}
