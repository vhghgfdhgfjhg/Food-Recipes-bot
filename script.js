var infobtn = document.querySelectorAll(".infobtn");
    var info = document.querySelectorAll(".in");
    var close = document.querySelectorAll(".cl");
    var list = document.querySelector(".li");
    var search = document.querySelector(".search");
    var input = document.querySelector(".input");
    var itemarea = document.getElementById("itemarea");
    var itemCategory = document.getElementById("itemCategory");
    var infoname = document.getElementById("infoname");
    var itemname = document.getElementById("itemname");
    var itemimg = document.getElementById("itemimg");
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    var infoingredients = document.getElementById("infoingredients");
    var infoinstuction = document.getElementById('infoinstuction');
    var infoyoutube = document.getElementById('infoyoutube');

  
function click() {
    infobtn.forEach(button => { 
      button.addEventListener('click', () => {
        info.forEach(el => el.classList.replace("in", "info"));
        close.forEach(el => el.classList.replace("cl", "close"));
        close.forEach(closeBtn => {
          closeBtn.addEventListener('click', () => {
            info.forEach(el => el.classList.replace("info", "in"));
            close.forEach(el => el.classList.replace("close", "cl"));
          });
        });
      });
    });
  }
  click();

  search.addEventListener('click', function() {
    if (input.value.trim() === '') {
      alert("Please Enter a Food-Name");
      return;
    }
  
    const inputValue = input.value; 
    input.value = '';
    list.classList.replace("li", "list");
  
    fetch(`${url}${inputValue}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.meals && result.meals.length > 0) { 
          itemname.innerHTML = result.meals[0].strMeal;
          itemimg.src = result.meals[0].strMealThumb;
          itemCategory.innerHTML = result.meals[0].strCategory;
          itemarea.innerHTML = result.meals[0].strArea;
          infoname.innerHTML = result.meals[0].strMeal;
  
          const ingredients = result.meals[0];
          const infoingredientsArray = [];
  
          for (let i = 1; i <= 20; i++) {
            const ingredient = ingredients[`strIngredient${i}`];
            const measure = ingredients[`strMeasure${i}`];
  
            if (ingredient && ingredient.trim() !== "") {
              infoingredientsArray.push(ingredient, measure);
            } else {
              break;
            }
          }
          infoingredients.innerHTML = infoingredientsArray.join(", "); 
  
          infoinstuction.innerHTML = result.meals[0].strInstructions;
          infoyoutube.href = result.meals[0].strYoutube;
          console.log(result);
        } else {
          alert("No meals found for your search.");
        }
  
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data.");
      });
  });

  // search.addEventListener('click',function(){
  //   input.value === '';
  //   input = input.value;
  //   list.classList.replace("li","list");
    
  //   var res = fetch(`${url}${input}`).then((response)=>{
  //       return response.json(); 
  //   }).then((result) =>{   
  //       itemname.innerHTML = result.meals[0].strMeal;
  //       itemimg.src = result.meals[0].strMealThumb;
  //       itemCategory.innerHTML = result.meals[0].strCategory;
  //       itemarea.innerHTML = result.meals[0].strArea;
  //       infoname.innerHTML =  result.meals[0].strMeal;

  //       infoingredients.innerHTML = [result.meals[0].strIngredient1,
  //                                    result.meals[0].strMeasure1,
                                     
  //                                    result.meals[0].strIngredient2,
  //                                    result.meals[0].strMeasure2,
                                     
  //                                    result.meals[0].strIngredient3,
  //                                    result.meals[0].strMeasure3,
                                     
  //                                    result.meals[0].strIngredient4,
  //                                    result.meals[0].strMeasure4,
                                     
  //                                    result.meals[0].strIngredient5,
  //                                    result.meals[0].strMeasure5,
                                     
  //                                    result.meals[0].strIngredient6,
  //                                    result.meals[0].strMeasure6,
                                     
  //                                    result.meals[0].strIngredient7,
  //                                    result.meals[0].strMeasure7,
                                     
  //                                    result.meals[0].strIngredient8,
  //                                    result.meals[0].strMeasure8,
                                     
  //                                    result.meals[0].strIngredient9,
  //                                    result.meals[0].strMeasure9,
                                     
  //                                    result.meals[0].strIngredient10,
  //                                    result.meals[0].strMeasure10,
                                     
  //                                    result.meals[0].strIngredient11,
  //                                    result.meals[0].strMeasure11,
                                     
  //                                    result.meals[0].strIngredient12,
  //                                    result.meals[0].strMeasure12,
                                     
  //                                    result.meals[0].strIngredient13,
  //                                    result.meals[0].strMeasure13,
                                     
  //                                    result.meals[0].strIngredient14,
  //                                    result.meals[0].strMeasure14,
                                     
  //                                    result.meals[0].strIngredient15,
  //                                    result.meals[0].strMeasure15,
                                     
  //                                    result.meals[0].strIngredient16,
  //                                    result.meals[0].strMeasure16];
  //       infoinstuction.innerHTML = result.meals[0].strInstructions;
  //       infoyoutube.href = result.meals[0].strYoutube;
  //       console.log(result);
  //   }).catch((error)=>{
  //       console.log(error);
  //   });
    
  //   console.log(res);
  // })

 

