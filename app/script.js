var id = 1;

function insertRows() {

    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var pinCode = document.getElementById('pinCode').value;
    var country = document.getElementById('country').value;
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length);

    // table populate
    
    var idCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var addressCell = newRow.insertCell(2);
    var cityCell = newRow.insertCell(3);
    var pinCodeCell = newRow.insertCell(4);
    var countryCell = newRow.insertCell(5);
    var actionCell = newRow.insertCell(6);


    idCell.innerHTML = id;
    nameCell.innerHTML = name;
    addressCell.innerHTML = address;
    cityCell.innerHTML = city;
    pinCodeCell.innerHTML = pinCode;
    countryCell.innerHTML = country;
    actionCell.innerHTML = `<a class="link"> <i id="showBtn-${id}" class="far fa-eye"></i> </a>
                            <a class="link"> <i id="editBtn-${id}" class="far fa-edit"></i> </a>                            
                            <a class="link"> <i id="saveBtn-${id}" class="far fa-save" style="display:none"></i>  </a>                   
                            <a class="link"> <i id="deleteBtn-${id}" class="fa fa-trash-alt"></i> </a>`;
                            
    // Buttons functions

    var showBtn = document.getElementById(`showBtn-${id}`);
    var editBtn = document.getElementById(`editBtn-${id}`);
    var saveBtn = document.getElementById(`saveBtn-${id}`);
    var deleteBtn = document.getElementById(`deleteBtn-${id}`);

    showBtn.addEventListener('click', function () {
        alert('Full Name:' + name + '\n' + 'Address:' + address + '\n' + 'City:' + city + '\n' + 'Pin Code:' + pinCode + '\n' + 'Country' + country)
    });


    editBtn.addEventListener('click', function () {
        showBtn.style.display = 'inline';
        saveBtn.style.display = 'inline';
        editBtn.style.display = 'none';
        deleteBtn.style.display = 'inline';


        nameCell.innerHTML = `<input  id="newName-${id}" value="${name}"  type="text">`
        addressCell.innerHTML = `<input id="newAddress-${id}" value="${address}" type="text">`
        cityCell.innerHTML = `<input id="newCity-${id}" value="${city}" type="text">`
        pinCodeCell.innerHTML = `<input id="newPinCode-${id}" value="${pinCode}" type="text">`
        countryCell.innerHTML = `<input id="newCountry-${id}" value="${country}" type="text">`

    });


    saveBtn.addEventListener('click', function () {

        showBtn.style.display = 'inline';
        saveBtn.style.display = 'none';
        editBtn.style.display = 'inline';
        deleteBtn.style.display = 'inline';


        name = document.getElementById(`newName-${id}`).value;
        address = document.getElementById(`newAddress-${id}`).value;
        city = document.getElementById(`newCity-${id}`).value;
        pinCode = document.getElementById(`newPinCode-${id}`).value;
        country = document.getElementById(`newCountry-${id}`).value;


        nameCell.textContent = name;
        addressCell.textContent = address;
        cityCell.textContent = city;
        pinCodeCell.textContent = pinCode;
        countryCell.textContent = country;


    });

    deleteBtn.addEventListener("click", function () {
       alert("You are about to delete this customer!")
       newRow.remove();
    });

    document.getElementById('reset').click();

    id++;

}