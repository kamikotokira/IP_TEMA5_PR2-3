document.getElementById('btnSquare').addEventListener('click', square);
document.getElementById('btnCalculate').addEventListener('click', calculate);

function square() {
    const a = parseFloat(document.getElementById('coefA').value);
    const b = parseFloat(document.getElementById('coefB').value);
    const c = parseFloat(document.getElementById('coefC').value);
    const resultDiv = document.getElementById('squareResult');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultDiv.textContent = "Введите числа";
        return;
    }

    if (a === 0) {
        resultDiv.textContent = "a не может быть равно 0";
        return;
    }

    const d = b * b - 4 * a * c;

    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        resultDiv.innerHTML = `x₁ = ${x1.toFixed(2)}<br>x₂ = ${x2.toFixed(2)}`;
    } else if (d === 0) {
        const x = -b / (2 * a);
        resultDiv.innerHTML = `x = ${x.toFixed(2)}`;
    } else {
        resultDiv.textContent = "Корней нет. D < 0";
    }
}

function calculate() {
    const initial = parseFloat(document.getElementById('depositSum').value);
    const months = parseFloat(document.getElementById('depositTerm').value);
    const rate = parseFloat(document.getElementById('depositRate').value);

    if (isNaN(initial) || isNaN(months) || isNaN(rate) || initial <= 0) {
        return;
    }

    const years = months / 12;
    const interest = rate / 100;
    const result = Math.round(initial * (1 + interest) ** years);

    document.getElementById('sumBefore').textContent = initial;
    document.getElementById('sumAfter').textContent = result;

    const maxVal = Math.max(initial, result);
    const barBefore = document.getElementById('barBefore');
    const barAfter = document.getElementById('barAfter');

    const maxHeight = 150;
    
    barBefore.style.height = `${(initial / maxVal) * maxHeight}px`;
    barAfter.style.height = `${(result / maxVal) * maxHeight}px`;
}