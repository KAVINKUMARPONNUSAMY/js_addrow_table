

function reorderIndex(){
    let num_of_rows = document.getElementsByTagName('tr')
    for(let i=2;i<=num_of_rows.length;i++){
        document.getElementsByTagName('tr')[i-1].getElementsByTagName("td")[0].innerText = i - 1
    }
}

function addRowbottom()
{
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var contact = document.getElementById('contact').value;
    var mail = document.getElementById('mail').value;

    var table = document.getElementsByTagName('table') [0];
    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    
    reorderIndex()
    cel2.innerHTML = name;
    cel3.innerHTML = age;
    cel4.innerHTML = contact;
    cel5.innerHTML = mail;
}

function addRowtop()
{
    var table = document.getElementsByTagName('table') [0];
    var newRow = table.insertRow(1);
    
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    
    reorderIndex()
}

reorderIndex()

