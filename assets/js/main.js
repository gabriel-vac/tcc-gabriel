// link para recuperar senha
$('#recupera').on('click',_=>{
    swal(
        "Recuperar senha!",
         "Sua senha foi enviada para o email cadastrado no sistema",
        "success",
      );
});

// ação do botão entrar
$('#btnEntrar').on('click',_=>{
window.location.href='index.html';
});


// botão consultar requisição
$('#btnConsultaReq').on('click',_=>{
  openReq();
});

// botão incluir requisição
$('#btnIncRec').on('click',_=>{
  openIncReq();
});

// botão para incluir os itens na tabela da página 2 
$('#btnOk').on('click',_=>{
  closeIncReq();
  smoothScroll('.page02',2000);
})

// // tabela de itens
// $('#btnOk').on('click',_=>{

// })
$('document').ready(_=>{
  showCarregar();
});

function wait(){
  $('#carregar').css({'display':'flex'});
}
function free(){
  $('#carregar').css({'display':'none'});
}