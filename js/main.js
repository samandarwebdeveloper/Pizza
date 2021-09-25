var elFormInput = document.querySelector(".form-input");
var elBreadOutputSelect = document.querySelector(".js-order-bread");
var elBreadOutputSize = document.querySelector(".js-order-size");
var elBreadOutputToply = document.querySelector(".js-order-top");
var addedProductsTopplyArray = [];
var elAddentionalOutput = document.querySelector(".js-order-additions");
var addedAddsArr = [];
// Create dropdown
var selectBreadOption = document.querySelector(".js-select-bread");

//Create array of options to be added
var breadHeight = ["Yupqa","Qalin","Oddiy"];

//Create and append select list
var selectList = document.createElement("select");
selectList.value = "non";
selectList.id = "bread";
selectBreadOption.appendChild(selectList);

//Create and append the options
for (var i = 0; i < breadHeight.length; i++) {
    var option = document.createElement("option");
    option.value = breadHeight[i];
    option.text = breadHeight[i];
    selectList.appendChild(option);

    selectList.addEventListener('change', function () {
      elBreadOutputSelect.textContent = this.value;
    });
}

//  Create radio input
var elRadiosBox  = document.querySelector(".js-radio-size");

var sizeBreadArr = ["25sm", "30sm", "35sm"];
for (let i = 0; i < sizeBreadArr.length; i++) {
  var wrapperDiv = document.createElement('div'); 
  wrapperDiv.classList.add('form-check'); 

  var radioItem = document.createElement('input'); 
  radioItem.classList.add('btn-check'); 
  radioItem.type = 'radio'; 
  radioItem.name = 'Bread-size'; 
  radioItem.id = `radio-${i}`; 
  radioItem.value = sizeBreadArr[i]; 

  if (i === 0) {
    wrapperDiv.classList.add('p-0'); 
    radioItem.checked = true; 
  }

  var newLabel = document.createElement('label'); 
  newLabel.classList.add('btn', 'btn-outline-secondary', 'rounded-pill'); 
  newLabel.setAttribute('for', `radio-${i}`); 
  newLabel.textContent = sizeBreadArr[i]; 

  wrapperDiv.append(radioItem);  
  wrapperDiv.append(newLabel);

  elRadiosBox.append(wrapperDiv); 

  radioItem.addEventListener('change', function () {
    elBreadOutputSize.textContent = this.value;
  });
}

    // var size25 = document.createElement("INPUT");
    // size25.setAttribute("name", "size");
    // size25.setAttribute("type", "radio");
    // size25.classList.add("size-img");
    // size25.classList.add("form-check-input");
    // selectSizeBox.appendChild(size25);

    // var label25 = document.createElement("label");
    // label25.textContent = "25cm";
    // label25.classList.add("radio-label");
    // selectSizeBox.appendChild(label25);


    // var size30 = document.createElement("INPUT");
    // size30.setAttribute("name", "size");
    // size30.setAttribute("type", "radio");
    // size30.classList.add("size-img");
    // size30.classList.add("form-check-input");
    // size30.required = true;
    // selectSizeBox.appendChild(size30);

    // var label30 = document.createElement("label");
    // label30.textContent = "30cm";
    // label30.classList.add("radio-label");
    // selectSizeBox.appendChild(label30);
    
    
    // var size35 = document.createElement("INPUT");
    // size35.setAttribute("name", "size");
    // size35.setAttribute("type", "radio");
    // size35.classList.add("size-img");
    // size35.classList.add("form-check-input");
    // selectSizeBox.appendChild(size35);
  
    // var label35 = document.createElement("label");
    // label35.textContent = "35cm";
    // label35.classList.add("radio-label");
    // selectSizeBox.appendChild(label35);


// Create toply checkboxes
var elTopCheckboxList = document.querySelector(".js-check-top");
elTopCheckboxList.classList.add("col-7");
var breadToply = ["Pomidor", "Kurka go'shtli", "Tuzlangan bodiring", "Qo'ziqorin", "Zaytun", "Qazi"];


for (var i = 0; i < breadToply.length; i++) {
  var toplyElemntsLabel = document.createElement("label");
  var toplyElemntsCheckbox = document.createElement("input");
  var toplyElemtsSpan = document.createElement("span");

  toplyElemntsCheckbox.type = "checkbox";
  toplyElemntsCheckbox.id = i;
  toplyElemntsCheckbox.value = breadToply[i];

  toplyElemtsSpan.textContent = breadToply[i];

  toplyElemntsCheckbox.addEventListener("change", function (evt) {
    evt.preventDefault();
      var currentValue = this.value; 
      var index = addedProductsTopplyArray.indexOf(currentValue); 
      if (index > -1) {
        addedProductsTopplyArray.splice(index, 1); 
      }
      else {
        addedProductsTopplyArray.push(currentValue); 
      }
      refreshAddedTopProducts(); 
});

// Output toply elements list
var refreshAddedTopProducts = function () {
  elBreadOutputToply.innerHTML = ''; 
  for (var i = 0; i < addedProductsTopplyArray.length; i++) {
    var itemLi = document.createElement('li'); 
    itemLi.textContent = `- ${addedProductsTopplyArray[i]}`; 
    elBreadOutputToply.append(itemLi); 
  }
}

  toplyElemntsLabel.appendChild(toplyElemntsCheckbox);
  toplyElemntsLabel.appendChild(toplyElemtsSpan);

  elTopCheckboxList.appendChild(toplyElemntsLabel);
}


// input addintions
var elAdditionsBox = document.querySelector(".js-check-additions");

// Create Addintion elements
var additionslist = ["Achchiq", "Sosiskali"];

for (var i = 0; i < additionslist.length; i++) {
    var additionsElemntsLabel = document.createElement("label");
    var additionsElemntsCheckbox = document.createElement("input");
    var additionsElemtsSpan = document.createElement("span");
  
    additionsElemntsCheckbox.type = "checkbox";
    additionsElemntsCheckbox.id = i;
    additionsElemntsCheckbox.value = additionslist[i];
    additionsElemtsSpan.textContent = additionslist[i];
  
    additionsElemntsCheckbox.addEventListener("change", function (evt) {
      evt.preventDefault();
  
      var currentAdd = this.value;
      var index = addedAddsArr.indexOf(currentAdd);
      if (index > -1) {
        addedAddsArr.splice(index, 1); // If includes remove this element
      }
      else {
        addedAddsArr.push(currentAdd); // if doesn't include, add new element
      }
      refreshAddedAddsProducts();
    });
  
    additionsElemntsLabel.appendChild(additionsElemntsCheckbox);
    additionsElemntsLabel.appendChild(additionsElemtsSpan);
  
    elAdditionsBox.appendChild(additionsElemntsLabel);

  }
  // Output Addintion list
  var refreshAddedAddsProducts = function () {
    elAddentionalOutput.innerHTML = ''; 
    for (var i = 0; i < addedAddsArr.length; i++) {
      var itemLi = document.createElement('li'); 
      itemLi.textContent = `- ${addedAddsArr[i]}`; 
      elAddentionalOutput.append(itemLi); 
    }
  }
