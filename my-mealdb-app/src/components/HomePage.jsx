import React, { useState } from 'react';
import "./homepage.css"
import Category from './Category';
import ShowCategory from './ShowCategory';
const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("")
    // console.log(selectedCategory);

    return (
        <div>
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">cart</a>
                <a href="">Blogs</a>
            </nav>
            <Category setSelectedCategory={setSelectedCategory}></Category>

            <ShowCategory selectedCategory={selectedCategory}></ShowCategory>
        </div>
    );
};

export default HomePage;