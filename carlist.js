

<script>
    let cars = ["Saab","Volvo","BMW"];


function add_car(car_name)
{
    cars += car_name;
}

    function displaycars()
{ let car_list = "";
  for(let value of cars)
  {
   
   car_list += value;
  }
  alert(car_list);
}

    let newClick = document.querySelector("button");
  //  buttonone.addEventListener("click", alert("first clicked"));
    newClick.addEventListener("click",function()
    {
        displaycars();
    });

    let newClick2 = document.getElementById("button2");
    newClick2.addEventListener("click",function()
    {
     add_car(fname.value);  
     alert(fname.value + " added to garage");
    }

    );
    

</script>