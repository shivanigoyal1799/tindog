import React from "react";
import Button from "reactstrap/lib/Button";
import "../assets/CallToAction.css"

const CallToAction=()=>{
    return (
      <div className="cta">
        <h1>Find the True Love of Your Dog's Life Today.</h1>
        <Button color="dark" size="lg">Download</Button>
        <Button outline color="dark" size="lg">Download</Button>
      </div>
    );
}
export default CallToAction;