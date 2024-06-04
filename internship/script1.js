let lastResult = 0;

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function useAns() {
    document.getElementById('display').value += lastResult;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        lastResult = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
