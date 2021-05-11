# Personalized-Travel-Planner

This is SmartVacay Web Application that allows users to register and plan their ideal vacation. Users can enter their requirements for the trip in a free text field, and the application generates a detailed itinerary for them.

### Steps to deploy this application

#### NLP and Machine Learning

1. Clone the "python_files" into a machine having Python3 installed on it.
2. Use the command "pip install spacy" for spacy installation.
3. Install other dependencies using "python -m spacy download en_core_web_lg" and "python -m spacy download en_core_web_sm" commands.
4. Change the directory path on the file "NLP_and_Recc_functions.py" file of "ner" and "POI_TripTypes_count.csv" as saved on your system and save changes.
5. Change the directory path on the file "POI_Nearby_Recc.py" file of "POI_unique.csv" as saved on your system and save changes.

#### Backend

1. Clone the repository's back end folder "Backend" into any machine having node.js installed on it.
2. Open the terminal in the folder "Backend".
3. Execute "npm install" to install all the dependencies.
4. Create a database "travelPlanner" in MongoDB Atlas.
5. Create a database on Amazon RDS with the name "travelPlanner".
6. Update the app.js file in Backend folder with frontend server's IP address and port.
7. Execute "node index" to run the backend server.
8. Launch the application


#### Front End

1. Clone the repository's front end folder "frontend" into any machine having node.js installed on it.
2. Open the terminal in the folder "frontend".
3. Execute "npm install" to install all the dependencies.
4. Update the "proxy" value in frontend "package.json" file with the backend server's IP address and port.
5. Go to the "Backend" folder in the terminal and use "npm run dev" command.

Open the browser and navigate to Front end server's IP address with Port number (Eg: 127.0.0.1:3000) to find the landing page.
