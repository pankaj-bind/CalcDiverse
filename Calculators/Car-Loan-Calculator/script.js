function calculatePayment() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loan-term').value) * 12;

    // Validate inputs
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate monthly payment
    const x = Math.pow(1 + interestRate, loanTerm);
    const monthlyPayment = (loanAmount * interestRate * x) / (x - 1);

    // Display result
    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
}
