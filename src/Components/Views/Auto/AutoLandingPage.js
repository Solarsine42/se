import React from "react";
import { Link } from "react-router-dom";

const AutoLandingPage = () => {
  return (
    <div>
      <h3>This is the Auto Insurance Landing Page!</h3>
      <br />
      <p>
        <Link to="/auto_liability">Auto Liability coverage link</Link>
      </p>
      <p>
        <Link to="/auto_medical">Auto Medical coverage link</Link>
      </p>
      <p>
        <Link to="/auto_pdc">Auto Physical Damage coverage link</Link>
      </p>
      <p>
        <Link to="/auto_extras">Auto Additional Available coverages link</Link>
      </p>
    </div>
  );
};

export default AutoLandingPage;
