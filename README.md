# Weblog Project 📝

Just a small learning blog website I created to practice full-stack development.

## 🚀 Features
* **Simple Blog Interface:** Create, view, and delete blog posts.
* **Data Handling:** Currently uses a JavaScript array as an in-memory database. 
    * *Note:* Because there is no persistent database, **all data is lost when you exit or refresh the website.**
* **API Practice:** Implemented using standard `GET`, `POST`, and `DELETE` HTTP methods.

## 🛠 What I Learned
* Building full-stack applications with Node.js.
* Understanding HTTP request methods and how they interact with server-side logic.
* Managing state within a running Node.js application.
* How browser and server interact conceptual understanding.

## 🐳 Docker Setup
This project is containerized for easy deployment and testing. 

### How to run it:
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/faiqa2805/noDatabaseProject-BlogAppli-.git
    ```
2.  **Start the container:**
    Ensure [Docker Desktop](https://www.docker.com/products/docker-desktop/) is running, then execute:
    ```bash
    docker-compose up
    ```
3.  **View the app:**
    Open your browser to `http://localhost:3000`.
