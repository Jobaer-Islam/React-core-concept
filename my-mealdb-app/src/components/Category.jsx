import React, { useEffect, useState } from 'react';

const Category = ({setSelectedCategory}) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(data => setCategory(data.categories))
    }, [])
    // console.log(category);

    return (
        <div>
            {
                category.map(cat => <button onClick={()=> setSelectedCategory(cat.strCategory)} key={cat.idCategory} className='btn btn-primary hover:bg-red-400 hover:text-white hover:text-2xl m-2' >{cat.strCategory}</button>)
            }

        </div>
    );
};

export default Category;