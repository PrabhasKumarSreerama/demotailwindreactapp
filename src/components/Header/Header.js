import React from 'react'


const handleAddTask = () => {
    alert("Add Task button clicked!"); 
};

function Header() {

    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Task Tracker</h1>
                <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-sm" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>
        </header>
    );
}

export default Header;