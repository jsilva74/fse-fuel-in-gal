function AddFuelAmountInGallons() {
  const table = document.querySelector('table');
  if (!table) return;
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    const isFuel = row.cells[1].innerText.includes('Fuel');
    const amountInKg = parseInt(row.cells[2].innerText.split(' ')[0]);
    const amountText = [`${amountInKg.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Kg`]
    if (isFuel) {
      const amountInGallons = Math.trunc(parseInt(amountInKg) / 2.68735);
      amountText.push(`(${amountInGallons.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} Gal)`);
    }
    row.cells[2].innerText = amountText.join(' ');
  }
}

AddFuelAmountInGallons();
