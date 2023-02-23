import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch']); 

  const onAddCategory = (newCategory) => { //Funcion que agregar una nueva categoria
    if (categories.includes(newCategory)) return; //este if pregunta mendiante .inclues si la newCategory existe, si existe ya returna y no hace nada, si no existe sigue con el proces

    setCategories([newCategory, ...categories]); //Este estado lo que hace es recibir las categories y aparte agrega una, que haya sido mandada al incio del array
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );


};
