const btnUnderline = document.querySelector('.btn-underline');
const btnItalic = document.querySelector('.btn-italic');
const btnBold = document.querySelector('.btn-bold');

const btnDecrementFont = document.querySelector('.btn-decrement-font');
const currentFontSize = document.querySelector('.current-font-size');
const btnIncrementFont = document.querySelector('.btn-increment-font');

const btnRed = document.querySelector('.btn-red');
const btnBlue = document.querySelector('.btn-blue');
const btnPurple = document.querySelector('.btn-purple');
const btnBlack = document.querySelector('.btn-black');

const text = document.querySelector('.text');

btnUnderline.onclick = () => {
    if (!text.style.textDecoration || text.style.textDecoration === 'none') {
        text.style.textDecoration = 'underline';
        return;
    }

    text.style.textDecoration = 'none';
}

btnItalic.onclick = () => {
    if (!text.style.fontStyle || text.style.fontStyle === 'normal') {
        text.style.fontStyle = 'italic';
        return;
    }

    text.style.fontStyle = 'normal';
}

btnBold.onclick = () => {
    if (!text.style.fontWeight || text.style.fontWeight === 'normal') {
        text.style.fontWeight = 'bold';
        return;
    }

    text.style.fontWeight = 'normal';
}

function defineCurrentFontSize() {
    return parseInt(text.style.fontSize.split('px')[0] || 16);
}

btnDecrementFont.onclick = () => {
    if (defineCurrentFontSize() > 12) {
        text.style.fontSize = `${defineCurrentFontSize() - 1}px`
    }

    currentFontSize.textContent = defineCurrentFontSize();
}

btnIncrementFont.onclick = () => {
    text.style.fontSize = `${defineCurrentFontSize() + 1}px`

    currentFontSize.textContent = defineCurrentFontSize();
}

btnRed.onclick = () => {
    text.style.color = 'red';
}

btnBlue.onclick = () => {
    text.style.color = 'blue';
}

btnPurple.onclick = () => {
    text.style.color = 'purple';
}

btnBlack.onclick = () => {
    text.style.color = 'black';
}

