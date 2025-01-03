import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import grahmLight from "/grahmLightTheme.jpg";
import verszLogo from "/Versz_AppIcon_BLK.png";

import "../styles/BioProfile.css";

function BioProfile() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1c2e4a",
      },
      secondary:{
        main: "#1c2e4a"
      }
    },
  });

  return (
    <>
      <div className="bio-background">
        <div className="main-container-bioProfile">
          <div className="divider-container">
            <div className="bio-information-container">
              <div className="bio-stack-container">
                <div className="bio-title-container">
                  {/* <div>George Boots</div> */}
                  <h1 className="syne-title">George Boots</h1>
                </div>
                <div className="bio-text-container">
                  <div className="text-container">
                    <p className="inter-text">
                      <strong>
                        
                        Currently undertaking an Apprenticeship for Electric Vehicles </strong>
                      whilst also running a few non-serious ventures,
                      all profits made/earned from my businesses are vested back
                      into my development
                    </p>
                    <br></br>
                    <p className="inter-text">
                      Any support whilst I’m undertaking my Apprenticeship is
                      appreciated ❤️
                    </p>
                    <p className="inter-text"></p>
                  </div>
                </div>
                <div className="bio-links-container">
                  <div className="links-container">
                    <div className="link-selector">
                      <div className="shop-link"></div>
                      <div className="w-4"></div>
                      <div className="shop-link">
                        <Fab
                          variant="extended"
                          color="primary"
                          href="https://linktr.ee/grahm_"
                        >
                          <p className="text-lg button-sizing"> Store </p>
                        </Fab>
                      </div>
                      <div className="w-4"></div>
                      <div className="support-link">
                        {/* <img className="logo-image" src={supportLogo} /> */}
                        <Link to="/ProductPage">
                        <ThemeProvider theme={theme}>
                          <Fab variant="extended" color="secondary">
                            <div className="versz-button-sizing">
                              <img
                                className="versz-button-logo"
                                src={verszLogo}
                              />
                            </div>
                          </Fab>
                          </ThemeProvider>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bio-image-container">
              {/* bio-Page-image-Container */}
              <img className="bio-image" src={grahmLight} />
            </div>
          </div>
          {/* <div className="spacer"></div> */}
          <div className="footer-spacer " onClick={this}></div>
        </div>
      </div>
    </>
  );
}

export default BioProfile;
