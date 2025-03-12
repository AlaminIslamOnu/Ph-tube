const dataTorkari = async()=>{

  const respo =await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
  const data =await respo.json();
  displayData(data.categories); 
}
dataTorkari()


const displayData = (elements)=>{
   const continer = document.getElementById("btn-container");
   for (let element of elements) {
   const makeDiv=document.createElement("div");
     makeDiv.innerHTML = `
      <button class="btn btn-sm hover:bg-[#FF1F3D]">${element.category}</button>
     `    
     continer.appendChild(makeDiv);
   } 
}


/* function btnData (){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=> res.json())
    .then(data=>displayCatagory(data.categories))
} */
function videoData(){
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then(res2=>res2.json())
  .then(data2=> videoCatagory(data2.videos));
}
// btnData()
videoData()

/* function displayCatagory (dates){
  
const container=document.getElementById("btn-container");
  for (const date in dates){
const makeContainer= document.createElement('div') 
makeContainer.innerHTML = `
<button class="btn btn-sm hover:bg-[#FF1F3D]">${date.category
}</button>
` 
container.appendChild(makeContainer);
  } 

}
displayCatagory() */

/* {
  "category_id": "1001",
  "video_id": "aaaa",
  "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
  "title": "Shape of You",
  "authors": [
      {
          "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
          "profile_name": "Olivia Mitchell",
          "verified": ""
      }
  ],
  "others": {
      "views": "100K",
      "posted_date": "16278"
  },
  "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
} */
function videoCatagory (infos){
  
 const videoContainer= document.getElementById('video-container');
  for(const x of infos){
    console.log(x);
   const makediv= document.createElement('div');
   makediv.innerHTML = `
    <div class="  shadow-sm">
                <figure class="relative">
                  <img
                    src="${x.thumbnail}"
                    alt="Shoes"
                    class="rounded-xl w-full h-[150px] object-cover" />
                    <span class="bg-black text-white absolute bottom-2 right-4 px-3 rounded">${x.others.posted_date}</span>
                </figure>
                <div class="flex gap-5 items-center ">
                   <div class="avatar">
                    <div class="ring-primary my-5   ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                      <img class="" src="${x.authors[0].profile_picture}" />
                    </div>
                  </div>
                   <div class="mt-5 py-3"><h2 class="font-bold text-xl">${x.title}</h2>
                       <p class="text-gray-400 flex gap-1">${x.authors[0].profile_name} <img class="w-5" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt=""></p>       
                       <p class="text-gray-400">${x.others.views} views</p>       
                </div>
                </div>
              </div>
   `
   videoContainer.appendChild(makediv);
  }
}
