// função que restringe o campo para apenas números
function numberOnly(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9,]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

$('document').ready(function(){
    
    $('#incData').datepicker({// datapicker do modal de incluir itens a requisição
        dateFormat: 'dd/mm/yy',
        dayNames:['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
        dayNamesMin:['D','S','T','Q','Q','S','S'],
        dayNamesShort:['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
        monthNames:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        changeMonth: true,
        changeYear: true,
        minDate: 0, 
    });

    $('#edData').datepicker({// datapicker do modal de editar itens da requisição
        dateFormat: 'dd/mm/yy',
        dayNames:['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
        dayNamesMin:['D','S','T','Q','Q','S','S'],
        dayNamesShort:['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
        monthNames:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        changeMonth: true,
        changeYear: true,
        minDate: 0, 
    });

    // validação campo quantidade do formulario de inclusão de itens à requisição
    $("#qtde").bind('paste', function(e) {
        e.preventDefault();
    });
    $("#qtde").on({
        keypress:_=>{
            numberOnly();
        }
    });

    // validação campo quantidade do formulario de editar de itens da requisição
    $("#edqtde").bind('paste', function(e) {
        e.preventDefault();
    });
    $("#edqtde").on({
        keypress:_=>{
            numberOnly();
        }
    });
});
  