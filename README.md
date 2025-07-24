Plant Care & Inventory Tracker
==============================

A simple and intuitive web application to help you manage your indoor and outdoor plant collection. Keep track of your plants' names, types, watering schedules, light requirements, and special care notes.

Features
--------

*   **View All Plants:** Browse through your entire plant collection.
    
*   **Detailed Plant View:** Click on any plant to see its specific care notes, last watered date, and light requirements.
    
*   **Add New Plant:** Easily add new plants to your inventory with all relevant details.
    
*   **Edit Plant Details:** Update existing plant information as their needs change or you gain new insights.
    
*   **Delete Plant:** Remove plants from your collection when needed.
    
*   **Responsive Design:** Enjoy a seamless experience on various screen sizes (desktop, tablet, mobile).
    

Technologies Used
-----------------

**Frontend:**

*   **React:** A JavaScript library for building user interfaces.
    
*   **Vite:** A fast build tool for modern web projects.
    
*   **React Router DOM:** For declarative routing in your React application.
    
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development and styling.
    

**Backend:**

*   **JSON Server:** A full fake REST API that runs on a db.json file, perfect for prototyping and development.
    

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   /plant-tracker-app  ├── /frontend               # React application (client-side)  │   ├── public  │   ├── src  │   │   ├── components      # Reusable React components (e.g., PlantCard, Navbar)  │   │   ├── App.jsx         # Main application component & routing  │   │   ├── main.jsx        # React entry point  │   │   ├── tailwind.css    # Tailwind CSS directives  │   │   └── tailwind.config.js # Tailwind configuration  │   ├── package.json  │   └── ...  └── /backend                # JSON Server (mock API)      ├── db.json             # Your plant data      ├── package.json      └── ...   `

 Setup and Run Locally
-------------------------

Follow these steps to get the Plant Care Tracker up and running on your local machine.

### Prerequisites

*   Node.js (LTS version recommended)
    
*   npm (comes with Node.js) or Yarn
    

### 1\. Clone the Repository

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone   cd plant-tracker-app   `

_(Replace with the actual URL of your Git repository)_

### 2\. Set up the Backend (JSON Server)

Open your **first terminal window** and navigate to the backend directory:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd backend   `

Install JSON Server globally (if you haven't already):

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install -g json-server  # OR  yarn global add json-server   `

Start the JSON Server. This will create a REST API based on your db.json file, running on http://localhost:3000.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   json-server --watch db.json --port 3000   `

You should see output indicating the server is running and serving resources from /plants. **Keep this terminal window open.**

### 3\. Set up the Frontend (React App)

Open your **second terminal window** and navigate to the frontend directory:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd ../frontend   `

Install the frontend dependencies:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install  # OR  yarn install   `

Start the React development server:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm run dev  # OR  yarn dev   `

Vite will start the development server, usually on http://localhost:5173.

### 4\. Access the Application

Open your web browser and navigate to the URL provided by Vite (e.g., http://localhost:5173/).

You should now see the Plant Care & Inventory Tracker running, fetching data from your JSON Server.

Usage
-----

*   **Home:** The landing page with a welcome message.
    
*   **My Plants:** View a grid of all your plants. Click on a plant card to see its detailed information.
    
*   **Add New Plant:** Fill out the form to add a new plant to your collection.
    
*   **Edit Plant:** From a plant's detail page, click the "Edit Plant" button to modify its information.
    
*   **Delete Plant:** Use the "Delete" button on a plant card or the detail page to remove a plant from your inventory.
    

Contributing
------------

Feel free to fork this repository, open issues, or submit pull requests.

License
-------

This project is open source and available under the [MIT License]
