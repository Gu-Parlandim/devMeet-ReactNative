import React from "react"

import Serverless from "../../assets/images/Serverless.svg"
import Bezier_Curve from "../../assets/images/BEZIER_CURVE.svg"
import LAPTOP from "../../assets/images/LAPTOP.svg"
import MOBILE from "../../assets/images/MOBILE.svg"
import INTEGRATION from "../../assets/images/INTEGRATION.svg"
import BLOCKS_CODE_CHECKMARK from "../../assets/images/BLOCKS_CODE_CHECKMARK.svg"
import TERMINAL from "../../assets/images/TERMINAL.svg"

import Serverless_WHITE from "../../assets/images/Serverless_WHITE.svg"
import Bezier_Curve_WHITE from "../../assets/images/BEZIER_CURVE_WHITE.svg"
import LAPTOP_WHITE from "../../assets/images/LAPTOP_WHITE.svg"
import MOBILE_WHITE from "../../assets/images/MOBILE_WHITE.svg"
import INTEGRATION_WHITE from "../../assets/images/INTEGRATION_WHITE.svg"
import BLOCKS_CODE_CHECKMARK_WHITE from "../../assets/images/BLOCKS_CODE_CHECKMARK_WHITE.svg"
import TERMINAL_WHITE from "../../assets/images/TERMINAL_WHITE.svg"



const IconsComponets = {
    PROGRAMING: {
        white: <Serverless_WHITE width={25}/>,
        orange: <Serverless width={25}/>
    },
    BEZIER_CURVE: {
        white: <Bezier_Curve_WHITE width={25}/>,
        orange: <Bezier_Curve width={25}/>
    },
    LAPTOP: {
        white: <LAPTOP_WHITE width={25}/>,
        orange: <LAPTOP width={25}/>
    },
    MOBILE: {
        white: <MOBILE_WHITE width={25}/>,
        orange: <MOBILE width={25}/>
    },
    INTEGRATION: {
        white: <INTEGRATION_WHITE width={25}/>,
        orange: <INTEGRATION width={25}/>
    },
    BLOCKS_CODE_CHECKMARK: {
        white: <BLOCKS_CODE_CHECKMARK_WHITE width={25}/>,
        orange: <BLOCKS_CODE_CHECKMARK width={25}/>
    },
    TERMINAL: {
        white: <TERMINAL_WHITE width={25}/>,
        orange: <TERMINAL width={25}/>
    },
}

export {IconsComponets}