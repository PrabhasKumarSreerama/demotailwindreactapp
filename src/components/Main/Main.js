import React from 'react'


const handleDeleteTask = () => {
    alert("Delete Task button clicked!");
};

function Main() {

    return (
        <main className="container mx-auto flex-grow p-4">
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>
                <ul className="space-y-4">
                    <li className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                        <span className="font-medium">Complete project report</span>
                        <button className="text-red-600 hover:text-red-800 text-sm" onClick={handleDeleteTask}>
                            Delete
                        </button>
                    </li>
                    <li className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                        <span className="font-medium">Call the client</span>
                        <button className="text-red-600 hover:text-red-800 text-sm" onClick={handleDeleteTask}>
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Main;