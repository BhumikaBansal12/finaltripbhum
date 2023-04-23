import DestinationData from "./DestinationData";
import Mountain1 from "../assest/1.jpg";
import Mountain2 from "../assest/2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to travel the world</p>

      <DestinationData
        heading="Coorg ,karnataka"
        text="The Scotland of India Coorg Tourism Located amidst imposing mountains in Karnataka with a perpetually misty
   landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and
    the streams cutting right through them. It also stands as a popular destination because of its culture and 
    people. The Kodavas, a local clan specializing in martial arts, are especially notable for their keen 
    hospitality.
Coorg, officially known as Kodagu, is the most affluent hill station in Karnataka. It is well known for its breathtakingly
exotic scenery and lush greenery. 
Forest covered hills, spice and coffee plantations only add to the landscape. Madikeri is the region's centre 
point with all transportation for getting around starting from here. On a visit to Coorg, cover the beautiful 
towns like Virajpet,
Kushalnagar, Gonikoppal, Pollibetta, and Somwarpet, and experience the beautiful concept of to make
your experience more memorable"
        img1={Mountain1}
        img2={Mountain2}
      />
    </div>
  );
};

export default Destination;
