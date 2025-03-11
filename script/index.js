

function btnData (){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=> res.json())
    .then(data=>displayCatagory(data.categories))
}
btnData()

function displayCatagory (datas){
const container=document.getElementById("btn-container");
  for (const date of datas){
const makeContainer= document.createElement('div') 
makeContainer.innerHTML = `
<button class="btn btn-sm hover:bg-[#FF1F3D]">${date.category
}</button>
` 
container.appendChild(makeContainer);
  } 

}
displayCatagory()