import pandas as pd
import sys
#------------------------Recommending POIs based on user choice of city------------------------------

# /Users/Chandu/Desktop/shared_files/
#Data loading done here. Enter your local path below:
POI_unique = pd.read_csv(r"/Users/Chandu/Desktop/shared_files/POI_unique.csv") 


#days = number of days entered by user for trip
#rec_city = city chosen by user
#nlp = list of trip types extracted from user input

#This function will return POIs in form of dataframe
def get_recc_pois(days, rec_city, nlp):
    flag = False
    filteredData0 = POI_unique.loc[(POI_unique['Destination_name'] == rec_city) & (POI_unique['Trip_type'] == nlp[0])]
    filteredData0 = filteredData0.sort_values(by=['POI_reviews_count','Average_Rating'], ascending=False)


    if len(nlp) == 2:
        flag = True
        filteredData1 = POI_unique.loc[(POI_unique['Destination_name'] == rec_city) & (POI_unique['Trip_type'] == nlp[1])]
        filteredData1 = filteredData1.sort_values(by=['POI_reviews_count','Average_Rating'], ascending=False)

    if flag:
        if days % 2 == 0:
            Trip_type_1 = filteredData0.head(int(days/2))
            Trip_type_2 = filteredData1.head(int(days/2))
        else:
            if len(filteredData0["POI_name"]) > len(filteredData1["POI_name"]):
                Trip_type_1 = filteredData0.head(int((days+1)/2))
                Trip_type_2 = filteredData1.head(days//2)
            else:
                Trip_type_1 = filteredData0.head(days//2)
                Trip_type_2 = filteredData1.head(int((days+1)/2))
        POI_final = pd.concat([Trip_type_1, Trip_type_2])
    else:
        POI_final = filteredData0.head(days)
        
    return POI_final


# print((sys.argv[1]))
# print((sys.argv[2]))
# print((sys.argv[3]).split(','))
#sys.argv[1] = poi, 2 = triptype 3 = days
#Dummy input
days = int(sys.argv[1])
POI_final = get_recc_pois(days, sys.argv[2], sys.argv[3].split(','))

# days = 3
# POI_final = get_recc_pois(days, "Los Angeles", ["Relaxed", "Historic" ] )


#---------------------------- Recommending POIs completed----------------------------------------------

#Extracting nearby POIs

#Loading nearby data. Enter your local path here.
nearby = pd.read_csv(r"/Users/Chandu/Desktop/shared_files/final_nearby.csv")


#List of POIs from recommended POIs
pois_list = list(POI_final["POI_name"])
# print(pois_list)


def get_nearby_pois(pois_list):
    #cols = ["POI_name","POI_nearby_name"]
    all_points = []
    #nearby_points = pd.DataFrame(columns = cols)
    for points in pois_list:
        all_points.append(points)
        fn = nearby.loc[(nearby['POI_name'] == points)]
        fn = fn.sort_values(by=['Distance_miles'], ascending=True)
        fn = fn.head(3)
        for near in fn["POI_nearby_name"].unique():
            all_points.append(near.replace("'", ""))
        #nearby_points = pd.concat([nearby_points, fn.head(3)])
    
    return all_points
   
allPointsList = get_nearby_pois(pois_list) #returns a list of all POIS with three nearby points for each
print(allPointsList)
