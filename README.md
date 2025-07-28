Plant Care & Inventory Tracker
==============================

A web-based application designed to help users efficiently manage and monitor their plant collection. This tool provides an organized way to store essential information for each plant, including care instructions, watering schedules, and light preferences, ensuring your green companions thrive.

Key Features
------------

*   **Comprehensive Plant Listing:** View all your plants in an organized, browsable list, providing a quick overview of your collection.
    
*   **Detailed Plant Profiles:** Access in-depth information for each plant, including its specific type, the last time it was watered, its light requirements, and custom care notes you've added.
    
*   **Add New Entries:** Seamlessly add new plants to your inventory using a dedicated form, capturing all necessary details from the start.
    
*   **Update Existing Records:** Easily modify any plant's details (e.g., name, type, care notes) as their needs change or you gather more information.
    
*   **Effortless Deletion:** Remove plants from your collection with a simple action, keeping your inventory up-to-date.
    
*   **Adaptive User Interface:** The application is built with a fully responsive design, ensuring an optimal and consistent user experience across various devices, including desktops, tablets, and mobile phones.
    

Technical Stack
---------------

This application is built with a modern web development stack, focusing on performance, maintainability, and a smooth developer experience.

**Frontend:**

*   **React:** A powerful JavaScript library for building dynamic and interactive user interfaces through a component-based architecture.
    
*   **Vite:** A next-generation frontend tooling that provides an extremely fast development server and optimized build process for modern web projects.
    
*   **React Router DOM:** Essential for enabling efficient client-side navigation and managing different views within the single-page application without full page reloads.
    
*   **Tailwind CSS:** A highly customizable, utility-first CSS framework that allows for rapid UI development by applying styles directly in your HTML markup.
    

**Backend:**

*   **JSON Server:** A lightweight, zero-configuration fake REST API used for local development and prototyping. It quickly sets up a full RESTful API from a simple db.json file.
    

Project Architecture
--------------------

The project is structured into two main, independently deployable parts: a frontend React application and a backend JSON Server, facilitating clear separation of concerns and independent deployment.

/plant-tracker-app├── /frontend # Contains the React client-side application│ ├── public # Static assets (e.g., index.html, favicon) for the frontend│ ├── src # Source code for the React application│ │ ├── components # Directory for modular and reusable React components (e.g., Navbar, PlantCard, PlantForm, PlantList, PlantDetail, Home, About)│ │ ├── App.jsx # The root React component, responsible for global state management and client-side routing│ │ ├── main.jsx # The entry point for the React application, where the app is mounted to the DOM│ │ ├── tailwind.css # The primary CSS file containing Tailwind CSS directives│ │ └── tailwind.config.js # Configuration file for Tailwind CSS, defining custom themes, plugins, etc.│ ├── package.json # Lists frontend dependencies and defines npm scripts for development and building│ └── vite.config.js # Configuration file for Vite, customizing build and development server settings└── /backend # Contains the JSON Server for mock API├── db.json # The database file in JSON format, storing all your plant data├── package.json # Lists backend dependencies (e.g., json-server) and defines npm scripts for running the server└── README.md # Backend-specific README (optional, for more detailed backend instructions)

Local Development Setup
-----------------------

To run the Plant Care & Inventory Tracker on your local machine for development, follow these instructions.

### Prerequisites

Ensure you have the following software installed on your system:

*   **Node.js** (LTS version recommended): A JavaScript runtime environment.
    
*   **npm** (Node Package Manager): Comes bundled with Node.js, used for managing project dependencies.
    

### Step 1: Clone the Repository

Begin by cloning the project repository from GitHub to your local machine:

git clone cd plant-tracker-app

_(Replace with the actual URL of your Git repository.)_

### Step 2: Set Up and Start the Backend (JSON Server)

Open your **first terminal window** and navigate into the backend directory:

cd backend

Install json-server globally if you haven't already. This allows you to run the fake API from anywhere on your system:

npm install -g json-server

Start the JSON Server. This command tells json-server to watch your db.json file for changes and serve a RESTful API accessible at http://localhost:3000.

json-server --watch db.json --port 3000

Confirm that the server is running and lists your /plants resource. **Keep this terminal window open and running throughout your development session.**

### Step 3: Set Up and Start the Frontend (React App)

Open your **second terminal window**. Navigate into the frontend directory:

cd ../frontend

Install the necessary frontend dependencies (React, React Router DOM, etc.) as defined in package.json:

npm install

Launch the React development server using Vite. This command compiles your React code and serves it, enabling Hot Module Replacement (HMR) for a fast development experience:

npm run dev

Vite will start the development server, usually accessible at http://localhost:5173.

### Step 4: Access the Application

Once both the backend (JSON Server) and frontend (React App) servers are running, open your web browser and navigate to the frontend URL provided by Vite (e.g., http://localhost:5173/).

Your Plant Care & Inventory Tracker should now be fully operational in your local development environment.

Deployment
----------

The Plant Care & Inventory Tracker is deployed and accessible online for live usage:

*   **Frontend (Vercel):** [https://plant-care-and-inventory.vercel.app/](https://plant-care-and-inventory.vercel.app/)
    
*   **Backend (Render):** [https://pc2-database.onrender.com/](https://pc2-database.onrender.com/)
    

**Important Note on API URL for Deployed vs. Local Environments:**When running the application locally, your frontend is configured to communicate with http://localhost:3000/plants. When the application is deployed (e.g., on Vercel), your frontend will need to communicate with the deployed backend URL (https://pc2-database.onrender.com/plants). To handle this, you will need to adjust the API\_URL variable in your frontend code (App.jsx, PlantForm.jsx, and PlantDetail.jsx) to point to the live Render backend URL when deploying. A common practice is to use environment variables to manage these different API endpoints for different environments.

Using the Live Application
--------------------------

To interact with the deployed version of the Plant Care & Inventory Tracker:

1.  **Access the Frontend:** Open your web browser and navigate directly to the deployed frontend URL:[https://plant-care-and-inventory.vercel.app/](https://plant-care-and-inventory.vercel.app/)
    
2.  **Backend Connectivity:** The live frontend is pre-configured to communicate with the live backend hosted on Render. You do not need to run any local servers to use the live application.
    
3.  **Interact with Your Plants:**
    
    *   **View Plants:** Upon loading, the "My Plants" section will display any plants currently stored in the live backend database.
        
    *   **Add New Plant:** Navigate to the "Add New Plant" section, fill in the required details in the form, and click "Add Plant." The new plant will be added to the live database and will immediately appear in your plant list.
        
    *   **Edit Plant:** From a plant's detailed view, click the "Edit Plant" button. This will take you to an edit form pre-populated with the plant's current data. Make your changes and click "Update Plant" to save them to the live database.
        
    *   **Delete Plant:** You can remove a plant from your collection either from the "My Plants" list (via the "Delete" button on the card) or from its detailed view (via the "Delete Plant" button). Confirm the deletion, and the plant will be permanently removed from the live database.
        

All changes you make (adding, editing, deleting plants) through the live Vercel frontend will persist on the live Render backend, allowing you to manage your collection in real-time.

How to Use (General Application Flow)
-------------------------------------

*   **Home:** This is the initial landing page, providing a brief introduction and quick links to get started.
    
*   **My Plants:** This section displays a gallery of all plants in your collection. You can click on any individual plant card to view its comprehensive details.
    
*   **Add New Plant:** Use this dedicated form to input all the necessary information for a new plant you wish to add to your inventory.
    
*   **Edit Plant:** When viewing a plant's details, you'll find an "Edit Plant" button. Clicking this allows you to modify any of the plant's existing attributes.
    
*   **Delete Plant:** Both from the main "My Plants" list and from a plant's detailed view, you have the option to delete a plant from your collection.
    

Contributing
------------

Contributions are welcome! If you have suggestions for improvements, new features, or encounter any issues, please feel free to fork this repository, open an issue, or submit a pull request.

License
-------

This project is open-source and distributed under the [MIT License](https://opensource.org/licenses/MIT).
