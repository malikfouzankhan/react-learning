import { useState } from "react";

function BgColor({choice, btnColor}) {

    return (
        <span className="rounded-full px-3 py-2" style={{backgroundColor: choice}}>{btnColor}</span>
    )
}

export default BgColor;