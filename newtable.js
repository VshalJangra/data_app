document.getElementById('submit').onclick=function(){
    var row = document.getElementById('row').value;
    var column = document.getElementById('column').value;
    if(row == '' || row == 'null' ){
        alert('Enter row value');
    }
    if(column == '' || column == 'null' ){
        alert('Enter column value');
    }
    var output = '<div class="table-responsive">'+'<table border="1" style="border-color: #ccc;" cellspacing="0" cellpadding="5" class="table">'
    function createTable(row, column){
        for(var i = 1; i <= row; i++){
            output += '<tr>'
            for(var j = 1;j <= column; j++){
                output += '<td>'+'<input type="text" placeholder="Enter text" />'+'</td>'
            }
            output += '</tr>'
        }
        output += '</div>'+'</table>'
        document.getElementById('container').innerHTML=output;
    }   
    createTable(row,column); 
};
//Enter Only Numeric Value
function isNumberKey(my_event){
    var charCode = (my_event.which) ? my_event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        {
            alert("Enter Only Numbers");
            return false;
        }
    return true;
}