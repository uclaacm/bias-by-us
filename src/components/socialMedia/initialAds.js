
import placeholderThumbnail from "../../assets/placeholderThumbnail.png";
import "./socialMedia.css";

const adNames = [ "Lumber", "AI", "Taxi", "Lawyer", "Restaurant", "Doctor", "Nurse",
"Secretary", "Preschool", "Janitor", "Retail"];
let initialAdFrequencies =[];
for (let i=0; i<11;i++){
    initialAdFrequencies[i] = {
        x: adNames[i],
        y: 10, //will be initialized to zero later!
        thumbnail: placeholderThumbnail
    }
}
/*this is the setup for all the ads initially for the histogram, x/y for the axes of data, 
and thumbnail for the picture*/
export default {
    adList: initialAdFrequencies
};