$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 50000,
      values: [ 15000, 35000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ]  );
        $("#amount2").val("$"  + ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
      $("#amount2").val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
  } );


  let stuff = document.querySelectorAll(".main__popular__stuff__tools")
  let count = 0
  console.log(stuff)
  for(let i = 0; i<stuff.length; i++){
    stuff[i].style = "margin: 20px 12px 0 0;"
    count++
    if(count%3==0){
      stuff[i].style ="margin-right: 0px; margin-top: 20px;"
    }
  }