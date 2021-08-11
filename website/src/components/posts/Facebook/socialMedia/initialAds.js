import placeholderThumbnail from "../../../../assets/placeholderThumbnail.png";
import "./socialMedia.css";
const adData = [
  [0.27966767, 0.10170184, 0.04216069, 0.01245083], //lumber
  [0.13921071, 0.09911504, 0.09458128, 0.05468602], //AI
  [0.06332795, 0.16010892, 0.04851367, 0.09960667], //Taxi
  [0.0932841, 0.12157931, 0.07742483, 0.08194765], //Lawyer
  [0.07015924, 0.10347175, 0.08425344, 0.10090872], //Restaurant
  [0.08820679, 0.09026549, 0.10154578, 0.08438899], //Doctor
  [0.08197554, 0.08731563, 0.10273484, 0.08886478], // Nurse
  [0.06000462, 0.05899705, 0.1257007, 0.1003662], // Secretary
  [0.04874221, 0.06099387, 0.11360625, 0.11544826], // Preschool
  [0.04034156, 0.06471523, 0.09940547, 0.12949953], // Janitor
  [0.03507962, 0.05173587, 0.11007304, 0.13183236], // Supermarket
];
//adPercentages represented this way: index 0 is white male, index 1 is black male, index 2 is white female, index 3 is black female
const adNames = [
  "Lumber",
  "AI",
  "Taxi",
  "Lawyer",
  "Restaurant",
  "Doctor",
  "Nurse",
  "Secretary",
  "Preschool",
  "Janitor",
  "Retail",
];
let initialAdFrequencies = [];
for (let i = 0; i < 11; i++) {
  initialAdFrequencies[i] = {
    x: adNames[i],
    y: 0, //will be initialized to zero later!
    thumbnail: placeholderThumbnail,
    adPercentages: adData[i],
  };
}
/*this is the setup for all the ads initially for the histogram, x/y for the axes of data, 
and thumbnail for the picture*/
export default {
  adList: initialAdFrequencies,
};
