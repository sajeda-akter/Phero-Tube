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
const showAllCategories = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${category_id}`
  );
  const data = await res.json();
  displayAllCategories(data.data);
};

// all categories show by id
const displayAllCategories = (categories) => {
  const container = document.getElementById("all-category");

  // clear the categories show display innerHTMl
  container.innerHTML = "";

  // all the category show in the HTMl
  categories.forEach((categoryAll) => {
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
    div.classList = "card w-80 bg-base-100 shadow-xl h-3/4 relative";
    div.innerHTML = `
<figure class="w-full h-2/4"><img src="${thumbnail}? ${thumbnail}:'Image Not Found" class=" w-full" /></figure>
                <div class=" flex ml-4 gap-4 mt-4">
                <img src="${
                  authors[0].profile_picture
                }" class="h-12 w-12 rounded-full"/>
               <div>
               <p class="font-semibold text-xl">${title}</p>
               <div>
               <p>${authors[0].profile_name}</p>
               <p class="text-white font-semibold absolute top-20 right-0">${convertMsTOTime(
                 categoryAll.others.posted_date
               )}</p>
                </div>
                <p>${others.views} views</p>
            </div>
               </div>   
                
               
                </div>

`;
    container.appendChild(div);
  });
};

const sortByView = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data = await res.json();
 sortByViewData(data.data)
  // (data.data.forEach(datas=>{
  //   const views=parseFloat((datas.others.views).slice(0,3))
  //   console.log(views.sort(function(a,b){
  //     return b-a
  //   }))
  // }))}
};

const sortByViewData = (categories) => {

  const container = document.getElementById("all-category");

  // clear the categories show display innerHTMl
  container.innerHTML = "";

  // all the category show in the HTMl
  categories.forEach((categoryAll) => {


    // convert seconds to hours and minute
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

    // display the data desecdening By views
    const views=parseFloat(categoryAll.others.views);
   console.log(views)

    const { thumbnail, others, authors, title } = categoryAll;

    // create category card
    const div = document.createElement("div");
    div.classList = "card w-80 bg-base-100 shadow-xl h-3/4 relative";
    div.innerHTML = `
<figure class="w-full h-2/4"><img src="${thumbnail}? ${thumbnail}:'Image Not Found" class=" w-full" /></figure>
                <div class=" flex ml-4 gap-4 mt-4">
                <img src="${
                  authors[0].profile_picture
                }" class="h-12 w-12 rounded-full"/>
               <div>
               <p class="font-semibold text-xl">${title}</p>
               <div>
               <p>${authors[0].profile_name}</p>
               <p class="text-white font-semibold absolute top-20 right-0">${convertMsTOTime(
                 categoryAll.others.posted_date
               )}</p>
                </div>
                <p>${others.views} views</p>
            </div>
               </div>   
                
               
                </div>

`;
    container.appendChild(div);
  });
};

loadCategoryData();
