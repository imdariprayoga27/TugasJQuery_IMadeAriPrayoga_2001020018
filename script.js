var selectedRow = null
var btn = $(".form-action-buttons")

function onFormSubmit() {
   var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();   
}

function readFormData() {
    var formData = {};
    //formData["nim"] = document.getElementById("nim").value;
    formData["nim"] = $("#nim").value;
    //formData["name"] = document.getElementById("name").value;
    formData["name"] = $("#name").value;
    return formData;
}

function insertNewRecord(data) {
   // var table = document.getElementById("student").getElementsByTagName('tbody')[0];
    var table = $("#student");
    var newRow = $("tbody").length;
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nim;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
   // document.getElementById("nim").value = "";
   $("#nim").value = "";
    //document.getElementById("name").value = "";
    $("#name").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    //document.getElementById("nim").value = selectedRow.cells[0].innerHTML;
    $("#nim").value = selectedRow.cells[0].innerHTML;
    //document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    $("#name").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nim;
    selectedRow.cells[1].innerHTML = formData.name;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        //document.getElementById("student").deleteRow(row.rowIndex);
        $("#student").deleteRow(row.rowIndex);
        resetForm();
    }
}