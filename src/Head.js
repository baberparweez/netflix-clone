import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Image from "./components/Images/Netflix_icon.png";

function Head() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Netflix Clone</title>
                <meta property="og:title" content="Netflix" />
                <meta property="og:image" content={Image} />
                <meta
                    property="og:description"
                    content="A Netflix Interface created using React"
                />
                <meta property="og:url" content="" />
            </Helmet>
        </HelmetProvider>
    );
}

export default Head;
