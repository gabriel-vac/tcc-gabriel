// modal consultar código do projeto
function closeCodP(){//fechar modal consulta código do projeto
    $('#codproj').css({'display':'none'});
    $('body').css({'overflow-y':'auto'});
}
function openCodP(){//abrir modal consulta código do projeto
    $('#codproj').css({'display':'block'});
    $('body').css({'overflow':'hidden'});
}
$('#fechar').on('click',_=>{// botão 'x' para fechar modal consultar código do projeto
    $('#codproj').css({'display':'none'});
    $('body').css({'overflow-y':'auto'});
  });

// modal editar itens referentes à requisição
function closeEditarItem(){//fechar modal editar itens referentes à requisição
    $('#editarItem').css({'display':'none'});
    $('body').css({'overflow-y':'auto'});
}
function openEditarItem(){//abrir modal editar itens referentes à requisição
    $('#editarItem').css({'display':'block'});
    $('body').css({'overflow':'hidden'});
}
$('#fechareditaitem').on('click',_=>{// botão 'x' para fechar modal editar itens referentes à requisição
    $('#editarItem').css({'display':'none'});
    $('body').css({'overflow-y':'auto'});
  });

//modal para consultar requisição
function closeReq(){//fechar modal consulta requisição
  $('#consultareq').css({'display':'none'});
  $('body').css({'overflow-y':'auto'});
}
function openReq(){//abrir modal consulta requisição
  $('#consultareq').css({'display':'block'});
  $('body').css({'overflow':'hidden'});
}
$('#fecharconreq').on('click',_=>{//botão de fechar modal consulta de requisição
    closeReq();
});

//modal para consultar requisição
function closeIncReq(){//fechar modal consulta requisição
  $('#incluireq').css({'display':'none'});
  $('body').css({'overflow-y':'auto'});
}
function openIncReq(){//abrir modal consulta requisição
  $('#incluireq').css({'display':'block'});
  $('body').css({'overflow':'hidden'});
}
$('#fecharincreq').on('click',_=>{//botão de fechar modal consulta de requisição
    closeIncReq();
});

//modal para adicionar itens à requisição
function closeIncItem(){//fechar modal adicionar itens à requisição
  $('#incluiItem').css({'display':'none'});
  $('body').css({'overflow-y':'auto'});
}
function openIncItem(){//abrir modal adicionar itens à requisição
  $('#incluiItem').css({'display':'block'});
  $('body').css({'overflow':'hidden'});
}
$('#fecharincitem').on('click',_=>{//botão de fechar modal adicionar itens à requisição
    closeIncItem();
});

// abrir modal consultar código do projeto
$('#consultaproj').on('click',_=>{
    openCodP();
});
// link consultar código do projeto
$('.link').on('click',_=>{
    openCodP();
});

//modal de loading
function showCarregar(){//fechar modal de loading
  $('#carregar').css({'display':'flex'});
  $('body').css({'overflow-y':'auto'});
}
function hideCarregar(){//abrir modal de loading
  $('#carregar').css({'display':'none'});
  $('body').css({'overflow':'hidden'});
}