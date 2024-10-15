$(".startbtn").click(function(){
    $(".start").hide();
    $(".buy").show();
  });
  
  $(".PumpkinSeed").dblclick(function(){
    $(".buy").hide();
    $(".soil").show();
  });
  
  $(".seeds").dblclick(function(){
    $(".buy").hide();
    $(".RandomSeed").show(); 
  });
  
  
  $(".UntiltedSoil").hover(function(){
    $(".UntiltedSoil").attr("src", "https://www.seriouslyflowers.com/wp-content/uploads/2022/02/how-to-till-a-garden.jpg");
    $(".pHover").text("Leave the image to move on"); 
  });
  $(".UntiltedSoil").mouseleave(function(){
    $(".next").show();
  });
  
  $(".next").click(function(){
    $(".soil").hide();
    $(".water").show();
    
  });
  
  $(".watering").click(function(){
    $(".watering").attr("src", "https://classroomclipart.com/images/gallery/Animations/Plants/watering_can_with-growing-plant-animated-clipart-crca.gif");
    $(".next2").show();
    $(".instuction").hide()
  });
  
  $(".next2").click(function(){
      $(".water").hide();
      $(".crow").show();
    });
  
  $(".yes").click(function(){
    $(".crow").hide();
    $(".pumpkin").show();
    $(".redemption").hide();
  });
  
  $(".no").click(function(){
    $(".redemption").show();
    $(".crow").hide();
  })
  
  $(".no2").click(function(){
    $(".birds").show();
    $(".redemption").hide();
  })
  
  $(".HisPumpkin").dblclick(function(){
    $(".pumpkin").hide();
    $(".end").show();
  });
  
  $(".money").click(function(){
    $(".end").hide();
    $(".money_ending").show();
  })
  
  $(".food").click(function(){
    $(".end").hide();
    $(".food_ending").show();
  })
  
  $(".restart").click(function(){
    $(".money_ending").hide();
    $(".food_ending").hide();
    $(".start").show();
    $(".RandomSeed").hide();
    $(".birds").hide();
  })