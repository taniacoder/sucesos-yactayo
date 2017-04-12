$(document).ready(function(){
  var classe = "active"
  var time = 4000;
  $('.slider li').eq(0).addClass('active');
  
  function next(){
    if($('.slider li.active').next().size()){
      $('.slider li.active').removeClass(classe).next().addClass(classe);
    }else{
      $('.slider .active').removeClass(classe);
      $('.slider li').eq(0).addClass(classe);
    }
  }
  
  function prev(){
    if($('.slider li.active').prev().size()){
      $('.slider li.active').removeClass(classe).prev().addClass(classe);
    }else{
      $('.slider .active').removeClass(classe);
      $('.slider li').last().addClass(classe);
    }
  }
  
  $('.paginador .next').click(function(){
    next();
  });
  
   $('.paginador .prev').click(function(){
    prev();
  });
  
  setInterval(function(){
    next();
  }, time);
});
