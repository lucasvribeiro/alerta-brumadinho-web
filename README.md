<h1 align="center"><img src="https://i.ibb.co/JzDvNwN/AB-Capa.png" alt="Alerta Brumadinho" width="100%" height="auto"></h1>

# Brumadinho Alert: A web application for reporting environmental crimes

## General Information
This repository contains the source code for the front-end of Brumadinho Alert, an open platform for reporting environmental incidents in Brumadinho, MG. For more information about the project, please visit: https://github.com/cewebbr/mover-se_alerta-brumadinho

[![Software License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cewebbr/mover-se_alerta-brumadinho)

## Installation and Execution

### Technologies Used

- [React](https://pt-br.reactjs.org/)

### Prerequisites

- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com)

### Steps to run the project:

#### 1. In the terminal

```bash
# Clone this repository
$ git clone https://github.com/lucasvribeiro/alerta-brumadinho-web.git

# Create an `.env` file in the root of the project

# Install the dependencies
$ npm install

```

#### 2. Configuration of environment variables

Open the .env file in the root of the project and configure the environment variables

```bash
# Application back-end address (e.g., <http://localhost:3001> or the service URL where the back-end is running)
REACT_APP_BACKEND_URL=''

# Cloudinary API URL for hosting application images (user profile picture and report images)
REACT_APP_CLOUDINARY_URL=''

# Cloudinary API Key
REACT_APP_CLOUDINARY_API_KEY=''

# Cloudinary upload preset value
REACT_APP_CLOUDINARY_UPLOAD_PRESET=''
```

####  3. Running the application
```bash
# Run the application with the following command
$ npm start

# The server will start on port 3000 - access <http://localhost:3000>
```

### Authors: [Lucas Vinicius Ribeiro](https://github.com/lucasvribeiro) e [Lucas Souza Santos](https://github.com/souzalucas).
