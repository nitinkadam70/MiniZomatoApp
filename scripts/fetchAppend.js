const getData = async (url) => {

    try {
        let res = await fetch(url);
        let data = await res.json();

        return data;
    }
    catch (error) {
        return error;
    }
};


const append = (data, parent) => {

    parent.innerHTML = null;
  

    data.forEach(({strMeal,strMealThumb}) => {

        let innerdiv = document.createElement("div");

        let name = document.createElement("p");
        name.innerText= strMeal

        let img = document.createElement("img");
        img.src = strMealThumb;

        innerdiv.append(img,name);

        parent.append(innerdiv);
    })
}

const append2 = (data,parent) => {

    parent.innerHTML = null;
  

    data.forEach(({strMeal,strCategory,strArea,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}) => {

        let innerdiv = document.createElement("div");

        let name = document.createElement("h4");
        name.innerText= strMeal

        let category = document.createElement("p");
        category.innerText= "Category: "+strCategory

        let area = document.createElement("p");
        area.innerText= "Area: "+strArea;

        let des = document.createElement("p");
        des.innerText= "Instructions: "+strInstructions

        let info = document.createElement("h4");
        info.innerText="Ingredients";

        let ing1 = document.createElement("p");
        ing1.innerText=strIngredient1;

        let ing2 = document.createElement("p");
        ing2.innerText=strIngredient2;

        let ing3 = document.createElement("p");
        ing3.innerText=strIngredient3;

        let ing4 = document.createElement("p");
        ing4.innerText=strIngredient4;

        let ing5 = document.createElement("p");
        ing5.innerText=strIngredient5;



        innerdiv.append(name,category,area,des,info,ing1,ing2,ing3,ing4,ing5);

        parent.append(innerdiv);
    })
}

export {getData,append,append2};
