**RestAPI Image Upload & Fetch App**

  

This is a  **Full-Stack Image Upload and Fetching Application**  built using  **React.js**  (frontend) and  **Express.js**  (backend). The app allows users to  **upload images**,  **fetch random images**, and  **fetch multiple images**  from the server. It also integrates a feature to fetch random  **dog images**  from an external API.

  

**Project Features**

•  **Upload Images**  (Single Image Upload)

•  **Fetch Random Image**  from the server

• **Fetch Multiple Images** at once

•  **Fetch Dog Image**  from an external API

•  **Save Dog Image**  to the server

•  **Modern UI Design**  with a  **custom color palette**  for a better user experience

----------

**Tech Stack Used**

  

**Backend (Server)**

•  **Node.js**  - JavaScript runtime for server-side programming.

•  **Express.js**  - Fast and lightweight web framework for Node.js.

•  **Multer**  - Middleware for handling image uploads.

•  **Lodash**  - Utility library for working with arrays, objects, and more.

•  **CORS**  - Middleware for cross-origin requests.

  

**Frontend (Client)**

•  **React.js**  - Frontend JavaScript framework for building UI.

•  **CSS (Custom Styling)**  - Modern and responsive design.

----------

** User Interface & Color Palette**

  

The UI follows a **modern design** with a **comfortable user experience**. The **color palette** used in the UI is:


| **Color**       | **Hex Code**  |
|---------------|-------------|
| Dark Teal     | `#034C53`   |
| Teal         | `#007074`   |
| Coral        | `#F38C79`   |
| Light Coral  | `#FFC1B4`   |


**UI Features**

•  **Cards & Panels**: Used to organize content in a structured way.

•  **Hover Effects & Animations**: Buttons and images have subtle animations.

• **Grid Layout**: Ensures a clean and **responsive design**.

•  **Themed Buttons**: Different button colors for better UX.

----------

**How to run the App**

  

**1️⃣ Start the Backend (Server)**

  

Open a terminal and navigate to the  server/  folder.

```
cd server
npm install  # Install dependencies
npm start    # Start the backend server
```

•  The backend server will be running on:  **http://localhost:8000**.

----------

**2️⃣ Start the Frontend (Client)**

  

Open another terminal and navigate to the  client/  folder.

```
cd client
npm install  # Install frontend dependencies
npm run dev  # Start the React development server
```

•  The React client will run on  **http://localhost:5173**  (or another available port).

----------

**📂 Project Structure**

```
restapi-app/
│
├── server/               # Backend (Express.js)
│   ├── middleware/       # Multer file upload handling
│   ├── routers/          # API Routes
│   ├── uploads/          # Folder where images are stored
│   ├── index.js          # Main server file
│
├── client/               # Frontend (React.js)
│   ├── src/              # React source code
│   │   ├── App.jsx       # Main React component
│   │   ├── App.css       # Styling (with modern design)
│
├── README.md             # Project documentation
```

  

----------

**Endpoints & API Routes**

 

 | **Route**              | **Method** | **Description**                                       |
|------------------------|-----------|-------------------------------------------------------|
| `/save/single`        | `POST`    | Upload a single image                                |
| `/save/multiple`      | `POST`    | Upload multiple images (Not implemented yet)        |
| `/save/dog`          | `POST`    | Save a random dog image from an external API        |
| `/fetch/single`      | `GET`     | Fetch a single random image from uploads            |
| `/fetch/multiple`    | `GET`     | Fetch multiple random images                        |
| `/fetch/file/:filename` | `GET`  | Fetch a specific image by filename                  | 

----------

**Additional Features**

•  **Dog API Integration**: Fetches random dog images from  [**Dog CEO API**](https://dog.ceo/dog-api/).

•  **Multer for File Uploads**: Saves images with unique filenames (timestamp-based).

•  **Error Handling**: Graceful error messages when files are missing or uploads fail.

•  **Grid Layout for UI**: Organizes images into a structured view.

