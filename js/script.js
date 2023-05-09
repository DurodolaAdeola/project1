$(document).ready(function(){
    $("#Form").submit(function(event){
    event.preventDefault();
    const firstname =$("#firstname").val();
    const laststname =$("#lastname").val();
    $(".output").text(firstname);
  
         
    })

});