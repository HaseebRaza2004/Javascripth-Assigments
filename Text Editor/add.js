
function formatText(command) {
    if (document.queryCommandSupported(command)) {
        document.execCommand(command, false, null);
    }
}

function changeFontSize(size) {
    if (document.queryCommandSupported('fontSize')) {
        document.execCommand('fontSize', false, size);
    }
}

function changeFontFamily(font) {
    if (document.queryCommandSupported('fontName')) {
        document.execCommand('fontName', false, font);
    }
}

function changeTextColor(color) {
    if (document.queryCommandSupported('foreColor')) {
        document.execCommand('foreColor', false, color);
    }
}

function clearText() {
    document.getElementById('editor').innerText = '';
}

function refreshPage() {
    location.reload();
}