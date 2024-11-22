// Mostrar/Ocultar opciones de tarjeta de crédito
function toggleCardOptions(select) {
    const cardOptions = document.getElementById('cardOptions');
    const visaOptions = document.getElementById('visaOptions');
    const mastercardOptions = document.getElementById('mastercardOptions');

    // Ocultar campos específicos si se cambia el método de pago
    visaOptions.classList.add('d-none');
    mastercardOptions.classList.add('d-none');

    if (select.value === 'creditCard') {
        cardOptions.classList.remove('d-none'); // Mostrar el select de tipo de tarjeta
    } else {
        cardOptions.classList.add('d-none'); // Ocultar el select de tipo de tarjeta
    }
}

// Mostrar/Ocultar opciones específicas según el tipo de tarjeta
function toggleSpecificCardOptions(select) {
    const visaOptions = document.getElementById('visaOptions');
    const mastercardOptions = document.getElementById('mastercardOptions');

    // Ocultar todas las opciones específicas
    visaOptions.classList.add('d-none');
    mastercardOptions.classList.add('d-none');

    if (select.value === 'visa') {
        visaOptions.classList.remove('d-none'); // Mostrar opciones de Visa
    } else if (select.value === 'mastercard') {
        mastercardOptions.classList.remove('d-none'); // Mostrar opciones de MasterCard
    }
}