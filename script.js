window.addEventListener('load', () => {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tbody tr');
    const resultBox = document.getElementById('result');
  
    rows.forEach((row, index) => {
      const cells = row.cells;
      const secondCell = cells[1].querySelector('input[type="number"]');
      const thirdCell = cells[2].querySelector('input[type="number"]');
      const fourthCell = cells[3].querySelector('input[type="number"]');
      const fifthCell = cells[4];
  
      [secondCell, thirdCell, fourthCell].forEach(input => {
        input.addEventListener('input', () => {
          let value1 = parseFloat(secondCell.value) || 0;
          let value2 = parseFloat(thirdCell.value) || 0;
          const value3 = parseFloat(fourthCell.value) || 0;
  
          if (index === 6 || index === 7 || index === 8) {
            value1 *= 0.5;
            value2 *= 0.5;
          } else if (index !== -1) {
            value1 *= 0.33;
            value2 *= 0.67;
          }
  
          const finalValue = (value1 + value2).toFixed(2);
          fifthCell.textContent = (finalValue * value3).toFixed(2);
  
          // Calculate and update the sum in the fourth cell of the 10th row
          const sumOfFourthCells = calculateSumOfFourthCells();
          const tenthRow = rows[9];
          const tenthRowFourthCell = tenthRow.cells[3];
          tenthRowFourthCell.textContent = sumOfFourthCells.toFixed(2);
  
          // Calculate and update the sum in the fifth cell of the 10th row
          const sumOfCellsAbove = calculateSumOfCellsAbove();
          const tenthRowFifthCell = tenthRow.cells[4];
          tenthRowFifthCell.textContent = sumOfCellsAbove.toFixed(2);
  
          // Calculate and update the result box value
          const lastCellValue = parseFloat(tenthRow.cells[4].textContent) || 0;
          const result = (lastCellValue / 17).toFixed(2);
          resultBox.textContent = result;
        });
      });
    });
  
    function calculateSumOfFourthCells() {
      let sum = 0;
      for (let i = 0; i < rows.length - 1; i++) {
        const row = rows[i];
        const fourthCell = row.cells[3].querySelector('input[type="number"]');
        const value = parseFloat(fourthCell.value) || 0;
        sum += value;
      }
      return sum;
    }
  
    function calculateSumOfCellsAbove() {
      let sum = 0;
      for (let i = 0; i < rows.length - 1; i++) {
        const row = rows[i];
        const lastCell = row.cells[4].textContent;
        const value = parseFloat(lastCell) || 0;
        sum += value;
      }
      return sum;
    }
  });
  