import { createColourContainer } from './colours.js';
import { coreColors, lineColors, marcommsColors, statusColors, surfaceColors, textColors } from '../../../packages/bpk-foundations-web/tokens/base.es6';

export default {
  title: 'Guidelines / Colour',
};

const Template = (args) => {
    const colourGroup = args.colourGroup;

    const storyCanvas = document.createElement('div');
    storyCanvas.style.display = "flex";
    storyCanvas.style.flexWrap = "wrap";

    Object.keys(colourGroup).forEach((colour) => {
        const colourContainer = createColourContainer(colourGroup[colour], colour);
        storyCanvas.appendChild(colourContainer);
        return storyCanvas;
    })
    return storyCanvas;
}

export const CoreColour = Template.bind({});
CoreColour.args = {
    colourGroup: coreColors
}

export const LineColour = Template.bind({});
LineColour.args = {
    colourGroup: lineColors
}

export const MarcommsColour = Template.bind({});
MarcommsColour.args = {
    colourGroup: marcommsColors
}

export const StatusColour = Template.bind({});
StatusColour.args = {
    colourGroup: statusColors
}

export const SurfaceColour = Template.bind({});
SurfaceColour.args = {
    colourGroup: surfaceColors
}

export const TextColour = Template.bind({});
TextColour.args = {
    colourGroup: textColors
}