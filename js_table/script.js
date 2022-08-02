$(document).ready(function(){
		$(document).on('click', '#btn_tblhead', function(){
			if( $('#h_cols').val() == ""){
				alert("Please enter something!");
			}else{
				if($('#h_cols').val() > 5){
					alert("Must not exceed 5");
				}else{
					if($('#h_cols').val() == 0){
						alert("Please enter a valid number");
					}else{	
						$h_cols = $('#h_cols').val();
						$('#tbl_data').empty();
						$loader = $('<center>Generating <img src = "images/default.gif" height = "50"></center>');
						$loader.appendTo('#tbl_data');
						setTimeout(function(){
							$loader.remove();
							$('#tbl_data').attr('class', 'form-inline');
							$('<h4 class = "text-primary">Header Title</h4><br />').appendTo('#tbl_data');
							$col = [];
							for($a = 1; $a <= $h_cols; $a++){
									$col.push($a);
							}
							$.each($col, function(idx, va){
								$('<input type = "text" class = "form-control th_data" name = "th_data[]" placeholder = "Column' + va + '" size = "5" style = "margin:0px 10px 0px 10px;"/>').appendTo('#tbl_data');
							});
							$('<button id = "btn_hdata" class = "btn btn-success form-control"><span class = "glyphicon glyphicon-plus"></span></button>').appendTo('#tbl_data');
						}, 3000);
					}	
				}
			}	
		});
		
		$(document).on('click', '#btn_hdata', function(){
			if($('.th_data').val() == ""){
				alert("Please enter something");
			}else{				
				$th_data = [];
				$('.th_data').each(function(){
					$th_data.push($(this).val());
				});
				$('#tbl_data').empty();
				$loader = $('<center>Creating table <img src = "images/default.gif" height = "50"></center>');
				$loader.appendTo('#tbl_data');
				setTimeout(function(){	
					$loader.remove();
					$newTable = $('<table></table>').attr('class', 'table table-bordered');
					$thead = $('<thead></thead>').appendTo($newTable);
					$h_rows = $('<tr></tr>').appendTo($thead);
					$.each($th_data, function(index, value){
						$('<th style = "width:25%;">' + value + '</th>').appendTo($h_rows);
					});
					$tbody = $('<tbody id = "t_body"></tbody>').appendTo($newTable);
					$newTable.appendTo('#tbl_data');
						$.each($th_data, function(i, val){	
							$('<input type = "text" class = "form-control tb_data" placeholder = "' + val + '" name = "tb_data[]" size = "5" style = "margin:0px 10px 0px 10px;"/>').appendTo('#tbl_data');
						});	
					$('<button id = "btn_bdata" class = "btn btn-success form-control">Insert</button>').appendTo('#tbl_data');
				}, 3000);	
			}	
		});
		
		$(document).on('click', '#btn_bdata', function(){
			$tb_tr = $('<tr></tr>');
			$('.tb_data').each(function(){
				$('<td>' + $(this).val() + '</td>').appendTo($tb_tr);
			});
			$tb_tr.appendTo('#t_body');
			$('.tb_data').val(''); 
		})
	
});