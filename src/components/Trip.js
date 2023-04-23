import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assest/5.avif";
import Trip2 from "../assest/6.avif";
import Trip3 from "../assest/7.avif";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover Unique destinations using google maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Bali"
          text="Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India.
  A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall 
  that come together to create the ideal setting for a perfect getaway. Kodaikanal means the gift of the forests Nestled amidst the rolling slopes of the Palani
   Hills, Kodaikanal stands at."
        />
        <TripData
          image={Trip2}
          heading="Trip in Bali"
          text="Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India.
  A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall 
  that come together to create the ideal set"
        />
        <TripData
          image={Trip3}
          heading="Trip in Bali"
          text="Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India.
  A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall 
  that come together to create the ideal set"
        />
      </div>
    </div>
  );
}

export default Trip;
