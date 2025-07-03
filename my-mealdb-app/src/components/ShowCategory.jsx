import React, { useEffect, useState } from 'react';

const ShowCategory = ({ selectedCategory }) => {
    
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedCategory}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [selectedCategory])
    console.log(foods);
    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                foods?.map(food => <div>
                    <h2 className='border border-red-100'>{food.strMeal}</h2>
                    <img src={food.strMealThumb} alt="" />
                    
                </div>)
            }

        </div>
    );
};

export default ShowCategory;