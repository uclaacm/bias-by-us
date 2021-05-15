import React, { useEffect, useState, useReducer } from "react";
import SocialMediaContainer from "./SocialMediaContainer";
import initialAds from "./initialAds";

//default val is empty object since our provider passes in all the vals for context
export const SocialMediaContext = React.createContext({});

//Reducer setup outside of component
const initialFreqs = [...initialAds.adList];
const adReducer = (adFrequencies, action) => {
  switch (action.type) {
    //reset the ads back to zero
    case "reset": {
      return adFrequencies.map((job) => {
        return { ...job, y: 0 };
      });
    }

    //takes in # of times to pick ad, and the index # of the adDataSet
    case "pickAd": {
      let newAdFrequencies = [...adFrequencies];
      //randomly select ad from dataset action.payload times
      for (let i = 0; i < action.payload; i++) {
        let prob = Math.random();
        let threshold = 0;

        //choose by weighted percentages of each ad
        for (let job of newAdFrequencies) {
          threshold += parseFloat(job.adPercentages[action.adDataSet]);

          //increment new section if reached percentage threshold
          if (threshold > prob) {
            newAdFrequencies = newAdFrequencies.map((newJob) =>
              newJob.x === job.x ? { ...newJob, y: newJob.y + 1 } : newJob
            );
            break; //move on to next ad to select once an ad is selected
          }
        }
      }

      //sort the newAdFrequencies in descending order once all displayed hads have been chosen
      newAdFrequencies.sort((a, b) => b.y - a.y);
      return newAdFrequencies;
    }

    default:
      break;
  }
};

export const SocialMediaProvider = ({ children }) => {
  //state variables
  const [currentGender, setCurrentGender] = useState("unselected");
  const [currentRace, setCurrentRace] = useState("unselected");
  const [profileCreated, setProfileCreated] = useState(false);
  const [refreshes, setRefreshes] = useState(0);
  const [selectedAd, setSelectedAd] = useState(null);
  const [adDataSet, setAdDataSet] = useState(-1);
  const [adFrequencies, dispatchAdFrequencies] = useReducer(
    adReducer,
    initialFreqs
  );

  /*change dataSet to the correct one to examine based off of user's profile
  whenever profileCreated is changed
  Since used component wide, stored in context*/
  useEffect(() => {
    if (profileCreated === false) setAdDataSet(-1);
    else if (currentGender === "male" && currentRace === "white")
      setAdDataSet(0);
    else if (currentGender === "male" && currentRace === "black")
      setAdDataSet(1);
    else if (currentGender === "female" && currentRace === "white")
      setAdDataSet(2);
    else if (currentGender === "female" && currentRace === "black")
      setAdDataSet(3);
    //even though profileCreated, still including currentGender & currentRace in dependency array
  }, [profileCreated, currentGender, currentRace]);

  //helper functions for state logic

  //reset ads depends on adFrequencies, which is why they're stored inside the context
  function resetAds() {
    dispatchAdFrequencies({ type: "reset" });
    setRefreshes(0);
    setSelectedAd("default");
  }

  return (
    <SocialMediaContext.Provider
      value={{
        //state logic
        currentGender,
        setCurrentGender,
        currentRace,
        setCurrentRace,
        profileCreated,
        setProfileCreated,
        refreshes,
        setRefreshes,
        selectedAd,
        setSelectedAd,
        adDataSet,
        adFrequencies,
        dispatchAdFrequencies,
        //helper functions
        resetAds,
      }}
    >
      {children}
    </SocialMediaContext.Provider>
  );
};

//provide the context to everything within the SocialMediaContainer
export function SocialMediaSection(props) {
  return (
    <SocialMediaProvider>
      <SocialMediaContainer />
    </SocialMediaProvider>
  );
}
