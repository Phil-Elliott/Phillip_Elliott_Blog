import { Meta } from "../components/Meta";
import styles from "./../styles/Pages/Info/Info.module.scss";

const disclaimer = () => {
  return (
    <div className={styles["info-container"]}>
      <Meta
        title="Disclaimer | PEB"
        description="Please read over this disclaimer for the website."
      />
      <div>
        <h1>Disclaimer</h1>
        <h2>Website Disclaimer</h2>
        <p>
          The information provided by philelliottblog.com "we," "us," or "our"
          on philelliottblog.com "Site" is for general informational purposes
          only. All information on the Site is provided in good faith, however
          we make no representation or warranty of any kind, express or implied,
          regarding the accuracy, adequacy, validity, reliability, availability,
          or completeness of any information on the Site. UNDER NO CIRCUMSTANCE
          SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND
          INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY
          INFORMATION PROVIDED ON . YOUR USE OF THE SITE AND YOUR RELIANCE ON
          ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
        </p>

        <h2>External Links Disclaimer</h2>

        <p>
          The Site may contain (or you may be sent through to other websites or
          content belonging to or originating from third parties or links to
          websites and features in banners or other advertising. Such external
          links are not investigated, monitored, or checked for accuracy,
          adequacy, validity, reliability, availability, or completeness by us.
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
          THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY
          WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN
          ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY
          WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
          THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </p>

        <h2>Professional Disclaimer</h2>
        <p>
          The Site cannot and does not contain software development advice. The
          software development information is provided for general informational
          and educational purposes only and is not a substitute for professional
          advice. Accordingly, before taking any actions based upon such
          information, we encourage you to consult with the appropriate
          professionals. We do not provide any kind of software development
          advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE
          IS SOLELY AT YOUR OWN RISK.
        </p>

        <p>
          This disclaimer was created using Termly's{" "}
          <a href="https://termly.io/products/disclaimer-generator/">
            Disclaimer Generator
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default disclaimer;
