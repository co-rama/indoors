let form = document.querySelector('#form-product');
let DynamicContents = {
    inputNo : 0,
    inputIncrementor : 7
}
let addInputButton = document.getElementById('add_product').addEventListener('click', createInputForProduct);
function createInputForProduct(){
    let input = document.createElement('input');
    DynamicContents.inputNo += 1;
    input.name = "ExtraInput" + DynamicContents.inputNo;
    input.type = 'text';
    input.placeholder = input.name;
    form.insertBefore(input, form.children[DynamicContents.inputIncrementor]);
    DynamicContents.inputIncrementor++;

}
// to eliminate html percent
function createInputForProductAll(){
    let input = document.createElement('input');
    DynamicContents.inputNo += 1;
    input.name = "ExtraInput" + DynamicContents.inputNo;
    input.type = 'text';
    input.placeholder = input.name;
    form.insertBefore(input, form.children[DynamicContents.inputIncrementor]);
    DynamicContents.inputIncrementor++;
}

function createInputForProductTemp(){
    let input = document.createElement('input');
    DynamicContents.inputNo += 1;
    input.name = "ExtraInput" + DynamicContents.inputNo;
    input.type = 'text';
    input.placeholder = input.name;
    form.insertBefore(input, form.children[DynamicContents.inputIncrementor]);
    DynamicContents.inputIncrementor++;
}


function createInputForProductEnd(){
    let input = document.createElement('input');
    DynamicContents.inputNo += 1;
    input.name = "ExtraInput" + DynamicContents.inputNo;
    input.type = 'text';
    input.placeholder = input.name;
    form.insertBefore(input, form.children[DynamicContents.inputIncrementor]);
    DynamicContents.inputIncrementor++;
}