function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById('result').innerText = 'Harap masukkan nilai yang valid.';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';

    if (bmi < 18.5) {
        category = 'Kurus';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Ideal';
    } else {
        category = 'Gemuk';
    }

    document.getElementById('result').innerHTML = `
        <p>Berat Badan: ${bmi}</p>
        <p>Anda memiliki tubuh ${category}</p>
    `;
}

function resetForm() {
    document.getElementById('gender').value = 'male';
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerText = '';
}