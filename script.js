document.getElementById('button').addEventListener('click', function() {
    const tableContainer = document.getElementById('table-container');
    const sizeInput = document.getElementById('size');
    const moduloInput = document.getElementById('modulo');
    
    const size = parseInt(sizeInput.value);
    const modulo = parseInt(moduloInput.value);
    
    sizeInput.setCustomValidity('');
    if (!size || size < 2) {
        sizeInput.setCustomValidity('Rozmiar musi być większy niż 1!');
        sizeInput.reportValidity();
        return;
    }
    if (size > 12) {
        sizeInput.setCustomValidity('Rozmiar nie może być większy niż 12!');
        sizeInput.reportValidity();
        return;
    }
    
    moduloInput.setCustomValidity('');
    if (modulo && modulo > size) {
        moduloInput.setCustomValidity('Modulo nie może być większe niż rozmiar tabliczki!');
        moduloInput.reportValidity();
        return;
    }

    const colorModulo = document.getElementById('color1').value;
    const colorEven = document.getElementById('color2').value;
    const colorOdd = document.getElementById('color3').value;
    
    let html = '<table>';
    
    for (let i = 1; i <= size; i++) {
        html += '<tr>';
        for (let j = 1; j <= size; j++) {
            const result = i * j;
            let color = '';
            
            if (modulo && result % modulo === 0) {
                color = colorModulo;
            } else if (result % 2 === 0) {
                color = colorEven;
            } else {
                color = colorOdd;
            }
            
            html += '<td style="background-color:' + color + '">' + result + '</td>';
        }
        html += '</tr>';
    }
    
    html += '</table>';
    tableContainer.innerHTML = html;
});