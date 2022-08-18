function buildAmountInGallonsColumn() {
  const table = document.querySelector('table');
  if (!table) return;
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    if (!row.cells[1].innerText.includes('Fuel')) continue;
    const amountInKg = parseInt(row.cells[2].innerText.split(' ')[0]);
    const amountInGallons = Math.trunc(parseInt(amountInKg) / 2.68735);
    row.cells[2].innerText = `${amountInKg.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Kg (${amountInGallons.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Gal)`;
  }
}

buildAmountInGallonsColumn();
