// $(function () {
//     $("nav").find("a[href*=#]:not([href=#])").click(function () {
//         var offset = 0;
//         var speed = 1000;
//         var target = $(this.hash);
//
//         $("html,body").animate({
//             scrollTop: target.offset().top - offset
//         }, speed);
//     });
// });
//var x = document.getElementById('close');
//document.getElementById('close').addEventListener("click",close);
//function close() {
//  var paragraf = document.getElementById('para');
//  paragraf.style.display='none';
//};
//console.log(x);
var searchBox = document.querySelector('#searchBox');
var searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click',function(e){
  var searchText = document.querySelector('#searchBox').value;
  //Dodati enter kad se stisne event code 13,razmotriti opciju sa blur kad je prazno i focus 
    if(searchText ==""){
      //alert("It mustn't be empty");
      swal(
        'It must not be empty.',
        'Please fill in the search field.',
        'error'
      );
      searchBox.style.borderColor = "#E74C3C"; //#1abc9c E74C3C
      searchBox.classList.add("searchError"); // Dodati placeholder boju na crvenu?! 
   }else{
      alert(searchText); //.toUpperCase()
      searchBox.style.borderColor = "white"; 
    } 
});

//Proveravanje newsletter-a
var newsletterBtn = document.querySelector('#newsletterBtn');
newsletterBtn.addEventListener('click',function () {
  if(newsletterBox.value !=""){
    swal('Thank you for your support.','You will be contacted soon.Check your '+ newsletterBox.value ,'success');
    newsletterBox.value = " ";
  }else{

  }
  
});
//Proveravanje e-mail-a iz newslettera
//var reEmail ='/ /';
//if(reEmail.test())


//Animirati searchBox
//searchBtn.addEventListener('onmouseover',function(){
//  searchBox.style.display="block";
//})

//Products i reviews odraditi kao traversy media https://www.youtube.com/watch?v=oRmQN244Ir0 POD OBAVEZNOOO!!!!

//Image Slider

var images=[];
var counter =0;
var max=images.length;

console.log(max);
