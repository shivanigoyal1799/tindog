import React from "react";
import Button from "reactstrap/lib/Button";
import "../assets/CallToAction.css"

const CallToAction=()=>{
    return (
      <div className="cta">
        <h3>Find the True Love of Your Dog's Life Today.</h3>
        <Button color="dark" size="lg">Download</Button>
        <Button outline color="secondary" size="lg">Download</Button>
      </div>
    );
}
export default CallToAction;