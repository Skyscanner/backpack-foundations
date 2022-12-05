import './typography.scss';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  
export const createTextParagraph = ({ style }) => {
    const text = document.createElement('p');
    text.innerText = capitalizeFirstLetter(style.replace(/-/g, " "));
    text.className = `bpk-text bpk-text--${style}`;

    return text;
};