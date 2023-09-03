import React from "react"; 

function Homepage() {
    return (
        <div>
            <p>DASHBOARD</p>
            <div>
        <h2 class="Dashboard">Dashboard</h2>
        
        <div class="Tracker">
        <div class="water">
            <h2 class="water-heading">Water</h2>
            
        </div>
        <div class="Exercise">
            <h2 class="exer-heading">Exercise</h2>
            
            <h2 class="mins">Mins</h2>
        </div>
        <div class="Walking">
            <h2 class="walk-heading">Walking</h2>
            
            <h2 class="steps">Steps</h2>
        </div>
        <div class="Macros">
            <h2 class="macros-heading">Macros</h2>
           
            <h2 class="calories">Calories</h2>
        </div>
    </div>
    <div class="nutrition">
        <div class="meal-list">
            <li>
            <h2>Breakfast</h2>
            <p>Bacon and Eggs with grapes</p>
            </li>
            <li>
            <h2>Lunch</h2>
            <p>Peanut Butter Jelly</p>
            </li>
            <li>
            <h2>Dinner</h2>
            <p>Salmon and Rice</p>
            </li>
            <li>
            <h2>Dinner</h2>
            <p>Salmon and Rice</p>
            </li>
        </div>
    </div>
    <div class="stats">
        <h1 class="stats-heading">Stats</h1>
        <li><h3 class="weight">Weight</h3></li>
        <li><h3 class="lost">Lbs lost:</h3></li>
        <li><h3 class="meals">Meals cooked:</h3></li>
    </div>
    </div>
        </div>
    )
}

export default Homepage;