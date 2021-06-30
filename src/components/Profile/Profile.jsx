import React from "react";

import Heading from "./Heading";
import image from "./profile.jpg";

function Profile() {
  return (
    <section className="profile" id="prof">
      <div className="row">
        <div className="col-md-6 profile-img">
          <img src={image} alt="piyush" />
        </div>
        <Heading name="Piyush Negi" title="Programmer and Web Developer" />
      </div>
    </section>
  );
}
export default Profile;
