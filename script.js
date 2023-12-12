document.addEventListener('DOMContentLoaded', function () { 
    var product = document.getElementById('product');
            var quantity = document.getElementById('quantity');
            var optionsWrapper = document.getElementById('options-wrapper');
            var propertiesWrapper = document.getElementById('properties-wrapper');
            var totalCost = document.getElementById('totalCost');

            product.addEventListener('change', function () {
                var selectedOption = product.value;
                optionsWrapper.innerHTML = '';
                propertiesWrapper.innerHTML = '';

                if (selectedOption === 'type1') {
                    totalCost.textContent = '';
                } else if (selectedOption === 'type2') {
                    var optionLabel = document.createElement('label');
                    optionLabel.textContent = 'Выберите чай: ';
                    optionsWrapper.appendChild(optionLabel);

                    var optionSelect = document.createElement('select');
                    optionSelect.id = 'optionSelect';
                    var option1 = document.createElement('option');
                    option1.value = 'option1';
                    option1.textContent = 'Петрушевый';
                    var option2 = document.createElement('option');
                    option2.value = 'option2';
                    option2.textContent = 'Малиновый';
                    optionSelect.appendChild(option1);
                    optionSelect.appendChild(option2);
                    optionsWrapper.appendChild(optionSelect);

                    optionSelect.addEventListener('change', function () {
                        calculateTotal();
                    });
                } else if (selectedOption === 'type3') {
                    var propertyLabel = document.createElement('label');
                    propertyLabel.textContent = 'Добавить сливки ';
                    propertiesWrapper.appendChild(propertyLabel);

                    var propertyCheckbox = document.createElement('input');
                    propertyCheckbox.type = 'checkbox';
                    propertyCheckbox.id = 'propertyCheckbox';
                    propertiesWrapper.appendChild(propertyCheckbox);

                    propertyCheckbox.addEventListener('change', function () {
                        calculateTotal();
                    });
                }
                
                calculateTotal();
            });

            quantity.addEventListener('input', function () {
                calculateTotal();
            });

            function calculateTotal() {
                var productPrice = 0;
                var selectedOption = product.value;
                var selectedQuantity = parseInt(quantity.value);
                
                if (selectedOption === 'type1') {
                    productPrice = 15;
                    optionsWrapper.innerHTML = '';
                    propertiesWrapper.innerHTML = '';
                } else if (selectedOption === 'type2') {
                    productPrice = 25;
                    propertiesWrapper.innerHTML = '';
                } else if (selectedOption === 'type3') {
                    productPrice = 30;
                    optionsWrapper.innerHTML = '';
                }
                
                var totalCost = productPrice * selectedQuantity;

                if (!isNaN(totalCost)) {
                    document.getElementById('totalCost').textContent = 'Итоговая стоимость: ₽' + totalCost;
                } else {
                    document.getElementById('totalCost').textContent = 'Пожалуйста, введите правильные данные';
                }
            }
  })
