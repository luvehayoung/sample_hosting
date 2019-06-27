/*
<script>
jQuery( document ).ready(function( $ ) {


// Set effect from select menu value
    $( ".menubar" ).on( "mouseenter", function() {
      //runEffect();
      $(".jquerySlide").show();

    });
    //$("nav").css({'height': 165 + "px" });
    $( "nav" ).on( "mouseleave", function() {
      //runEffect();
      $(".jquerySlide").hide();
      //$("nav").css({'height': 65 + "px" });
    });


});



</script>*/
//자바스크립트 실습
//실습 1
function test1(){
  alert("실습 버튼을 클릭하셨습니다");
}

//실습 2, if문이란
function test2(){
  var date = new Date();
  var hour = date.getHours();

  if(hour < 12){
    alert("오전입니다");
  }else if(hour >= 12){
    alert("오후입니다");
  }
}

//실습 3, 태그의 이름으로 제어하기 for문이란
function test3(){
  var lis = document.getElementsByTagName('li')
  for(var i = 0; i<lis.length; i++){
    lis[i].style.color='red';
  }
}

//실습 4, 클래스로 제어
function test4(){
  var lis = document.getElementsByClassName('group')
  for(var i = 0; i<lis.length; i++){
    lis[i].style.color='blue';
  }
}


//실습 5, 아이디로 제어
function test5(){
  var lis = document.getElementById('li1');
  lis.style.color='black';

  var lis = document.getElementById('li2');
  lis.style.color='green';

  var lis = document.getElementById('li3');
  lis.style.color='pink';

  var lis = document.getElementById('li4');
  lis.style.color= 'rgb(4, 91, 41)';

  var lis = document.getElementById('li5');
  lis.style.color= 'rgb(228, 13, 146)';

}


//자바스크립트는 이정도만 알면 된다!! 제이커리 사용하기!


window.onload = function(){
    /*
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello world');
    })
    */

    $(".slide").on("mouseenter", function(){



    });






    //제이커리 사용하기(큰메뉴)
    /*
    $( ".menubar" ).on( "mouseenter", function() {
      //runEffect();
      $(".jquerySlide").show();

    });
    //$("nav").css({'height': 165 + "px" });
    $( "nav" ).on( "mouseleave", function() {
      //runEffect();
      $(".jquerySlide").hide();
      //$("nav").css({'height': 65 + "px" });
    });
    */

    $( ".li1" ).on( "mouseenter", function() {
      //runEffect();
      $(".jquerySlide1").show();

    });
    //$("nav").css({'height': 165 + "px" });
    $( ".li1" ).on( "mouseleave", function() {
      //runEffect();
      $(".jquerySlide1").hide();
      //$("nav").css({'height': 65 + "px" });
    });





    $( ".li2" ).on( "mouseenter", function() {
      //runEffect();
      $(".jquerySlide2").show();

    });
    //$("nav").css({'height': 165 + "px" });
    $( ".li2" ).on( "mouseleave", function() {
      //runEffect();
      $(".jquerySlide2").hide();
      //$("nav").css({'height': 65 + "px" });
    });





    $( ".li3" ).on( "mouseenter", function() {
      //runEffect();
      $(".jquerySlide3").show();

    });
    //$("nav").css({'height': 165 + "px" });
    $( ".li3" ).on( "mouseleave", function() {
      //runEffect();
      $(".jquerySlide3").hide();
      //$("nav").css({'height': 65 + "px" });
    });
}
