import React from "react";

export default function AdDisplay(props) {
  return props.profileCreated ? (
    <div>
      <p>Placeholder Ad 1</p>
      <p>Placeholder Ad 2</p>
      <p>Placeholder Ad 3</p>
      Using: User's gender is {props.genderInput}
      <br />
      User's race is {props.raceInput}
      <br />
    </div>
  ) : (
    <div>
      <p>
        Generate a user profile to see what kind of ads would be displayed to
        this user!
      </p>
    </div>
  );
}
