document.getElementById('check').addEventListener('click', function() {
    
    const input = document.getElementById('minMaxinp1').value;
    
    const numbers = input.split(',').map(Number);
    
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
   
    document.getElementById('min').innerText = min;
    document.getElementById('max').innerText = max;
});