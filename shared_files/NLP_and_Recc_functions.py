#Run all the imports and pip commands in CMD or terminal.
#pip install spacy
#python -m spacy download en_core_web_lg
#python -m spacy download en_core_web_sm


import pandas as pd
from pathlib import Path
import spacy
import en_core_web_sm
import sys



#Performing NLP on user input
#---------------------------------NLP starts here-------------------------------------

nlp1 = spacy.load('en_core_web_lg')

output_dir=Path(r"/Users/Chandu/Desktop/shared_files/ner")
nlp2 = spacy.load(output_dir)
Trip_type = []

doc = nlp2(sys.argv[1])
for ent in doc.ents:
        Trip_type.append(ent.text.capitalize())
print(Trip_type)


#---------------------------------NLP ends here-------------------------------------

#--------------------------------- City Recommendation starts here-------------------------------------

#Trip type extracted is used for recommending cities

# Trip_type=["Relaxed", "Historic"]
#Data loading done here. Enter your local path below:
POI_TripTypes_count = pd.read_csv(r"/Users/Chandu/Desktop/shared_files/POI_TripTypes_count.csv")


def recc_city(trip_type_list):
    recc_city_df = (POI_TripTypes_count.loc[(POI_TripTypes_count["Trip_type"].isin(trip_type_list))]).groupby(["Destination_name"]).sum().nlargest(3,"Count")
    return list(recc_city_df.index)

#This is list of recommended cities for user to choose from and will be sent as output for user.
rec_cities = recc_city(Trip_type)
print(rec_cities) 


#--------------------------------- City Recommendation ends here-------------------------------------