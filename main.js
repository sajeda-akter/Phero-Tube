const loadCategoryData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  displayCategory(data.data);
};

// display type of category
const displayCategory = (categories) => {
  const container = document.getElementById("category-container");

  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    
    <button class="btn btn-outline btn-primary" onclick="showAllCategories('${category.category_id}')">${category.category}</button>
    
    `;
    container.appendChild(div);
  });
};

// all categories show by id
const showAllCategories = async (category_id,isShow) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${category_id}`
  );
  const data = await res.json();
  const singleCategory=data.data;
  let allDataList=[...singleCategory];
  
  let newDataList=allDataList.map((data)=>{
    const {others}=data;
    let views=0;
    let charList=others.views.split("");
    if(!!charList.length && charList.includes("K")){
      charList[charList.length-1]="000";
      views=parseFloat(charList.slice(0,1).join(""))*1000;
    }
    return {...data,others:{...others,views}};
  })

  allDataList=newDataList
  displayAllCategories(allDataList);
  // sortByView(allDataList)
};

// all categories show by id
const displayAllCategories = (categories) => {
  
  const container = document.getElementById("all-category");

  // clear the categories show display innerHTMl
  container.innerHTML = "";

  // all the category show in the HTMl
  if(categories.length>0){
    categories.forEach((categoryAll) => {
    const verified= categoryAll.authors[0].verified 

      if (isNaN) {
        function convertMsTOTime(seconds) {
          if (!seconds) {
            return "";
          } else {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds - hours * 3600) / 60);
            const second = seconds - hours * 3600 - minutes * 60;
  
            return `${hours}hrs ${minutes} min ${second}sec`;
          }
        }
      }
  
      const { thumbnail, others, authors, title } = categoryAll;
  
      // create category card
      const div = document.createElement("div");
      div.classList = "card w-80 bg-base-100 shadow-xl h-3/4 ";
      div.innerHTML = `
  <figure class="w-full h-2/4 relative"><img src="${thumbnail}? ${thumbnail}:'Image Not Found" class=" w-full" /></figure>
                  <div class=" flex ml-4 gap-4 mt-4">
                  <img src="${
                    authors[0].profile_picture
                  }" class="h-12 w-12 rounded-full"/>
                 <div>
                 <p class="font-semibold text-xl">${title}</p>
                 <div class="flex gap-2">
                 <p>${authors[0].profile_name}</p>
                 <p>${(verified===true)?`<i class="fa-solid fa-circle-check text-indigo-600 "></i>`:''}</p>
                  </div>
                  <p>${others.views} views</p>
                  <p class="text-white font-semibold absolute top-20 right-3">${convertMsTOTime(
                    categoryAll.others.posted_date
                  )}</p>
              </div>
                 </div>   
                  
                 
                  </div>
  
  `;
      container.appendChild(div);
    });
  }
  else{
    const noData=document.getElementById('noFoundData');
  noData.style.display='block'
  }
 
};

const sortByView = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data=await res.json()
  const singleCategory=data.data

  let allDataList=[...singleCategory];
  
  let newDataList=allDataList.map((data)=>{
    const {others}=data;
    let views=0;
    let charList=others.views.split("");
    if(!!charList.length && charList.includes("K")){
      charList[charList.length-1]="000";
      views=parseFloat(charList.slice(0,1).join(""))*1000;
    }
    return {...data,others:{...others,views}};
  })

  allDataList=newDataList

  // all the data display in the html
  const container = document.getElementById("all-category");

  allDataList.forEach((categoryAll) => {

    // sorting the card by views
    const viewAll=categoryAll.others
    console.log(viewAll)

    function compareByViews(a,b){
      return a.views-b.views

    }
    viewAll.sort(compareByViews)
  

 



    const verified= categoryAll.authors[0].verified 

      if (isNaN) {
        function convertMsTOTime(seconds) {
          if (!seconds) {
            return "";
          } else {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds - hours * 3600) / 60);
            const second = seconds - hours * 3600 - minutes * 60;
  
            return `${hours}hrs ${minutes} min ${second}sec`;
          }
        }
      }
  
      const { thumbnail, others, authors, title } = categoryAll;
  
      // create category card
      const div = document.createElement("div");
      div.classList = "card w-80 bg-base-100 shadow-xl h-3/4 ";
      div.innerHTML = `
  <figure class="w-full h-2/4 relative"><img src="${thumbnail}? ${thumbnail}:'Image Not Found" class=" w-full" /></figure>
                  <div class=" flex ml-4 gap-4 mt-4">
                  <img src="${
                    authors[0].profile_picture
                  }" class="h-12 w-12 rounded-full"/>
                 <div>
                 <p class="font-semibold text-xl">${title}</p>
                 <div class="flex gap-2">
                 <p>${authors[0].profile_name}</p>
                 <p>${(verified===true)?`<i class="fa-solid fa-circle-check text-indigo-600 "></i>`:''}</p>
                  </div>
                  <p>${others.views} views</p>
                  <p class="text-white font-semibold absolute top-20 right-3">${convertMsTOTime(
                    categoryAll.others.posted_date
                  )}</p>
              </div>
                 </div>   
                  
                 
                  </div>
  
  `;
      container.appendChild(div);
    });


};


loadCategoryData();
