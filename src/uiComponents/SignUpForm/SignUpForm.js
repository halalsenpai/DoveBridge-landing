import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import CButton from "../shared/CButton/CButton";
import { Link } from "react-router-dom";
import Cmodal from "../../uiComponents/shared/CModal/CModal";
const SignUpForm = (props) => {
  let { type = "" } = props;
  const [checked, setChecked] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [bool, setBool] = useState(false);

  const handleShow = () => {
    setBool(!bool);
  };

  return (
    <div className="c-card shadow">
      <div className="form">
        <div className="form-title">Sign Up</div>
        <form noValidate autoComplete="off">
          <TextField fullWidth margin="dense" id="name" label="Name" variant="outlined" />
          <TextField fullWidth margin="dense" id="email" label="Email" variant="outlined" />
          <TextField type="password" fullWidth margin="dense" id="password" label="Password" variant="outlined" />
          <TextField
            type="password"
            fullWidth
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            variant="outlined"
          />
          <div className="d-flex align-items-center justify-content-start mb-2">
            <Checkbox
              checked={checked}
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
              onChange={handleChange}
            />
            <div className="terms">
              I have read and agreed with{" "}
              <button className="show-modal-butn" type="button" onClick={handleShow}>
                Terms of Services
              </button>
              .
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <CButton themeColor="primary" className="hard-edge">
              Get Your Free Account
            </CButton>
            <div className="text-sm-light mt-2">(30 Day Free Trial)</div>
          </div>
        </form>
      </div>
      <Cmodal className="modal-desc" show={bool} onHide={handleShow}>
        <div style={{ height: "450px", overflowY: "scroll", padding: "20px", fontSize: "12px" }}>
          *Terms of Service* DoveBridge Terms of Service Thank you for choosing and using DoveBridge®. Welcome to
          www.DoveBridge.com (the "App/Site" and together with any sub-webApp/Site or application, the "System"),
          operated by DoveBridge Ltd. and/or its subsidiaries (“DoveBridge”). DoveBridge builds technologies and
          services that enable people to connect with each other. These Terms govern your use of DoveBridge provided by
          DoveBridge Solutions LTD These Terms of Service (the "Terms") govern your use and access to the App/Site
          and/or the services available through the App/Site, or otherwise provided by DoveBridge (the "Services”). By
          using the App/Site or Services in any manner, you (a "User", as further defined below or "you") acknowledge
          that you have read all of these Terms and agree to be bound by them, including DoveBridge's Privacy Policy,
          which is incorporated herein by reference.
          <br /> By using the App/Site and/or Services you must be at least 18 years old and have the legal authority to
          accept these Terms, or you represent that you are a parent or guardian of a Minor on whose behalf you agree to
          these Terms and grant permission for such Minor to use and view the App/Site and Services. DoveBridge reserves
          the right to make all or portions of the App/Site or Services unavailable to Minors. PLEASE READ AND REVIEW
          THESE TERMS CAREFULLY BEFORE USING THIS APP/SITE OR SERVICES. If you do not agree to be bound by any of these
          Terms, then please discontinue using and accessing this App/Site and/or Services immediately. Please note that
          any use or purchase from any business affiliated with the App/Site and/or Services may be subject to different
          and/or additional terms for such respective service or business. Please note that any information provided in
          the App/Site and/or Services is intended for informational purposes only. In the event of any contradiction
          between such information and these Terms, these Terms shall prevail. *1. The Services & Additional
          Definitions*: DoveBridge offers various services in connection with the App/Site, mainly, a platform where
          Users can open virtual Vaults for Grantee containing Digital Assets and/or Accounts Access Information (all
          such terms as defined below), to such Grantee to access after Users have passed away or chose to enable access
          while alive. The Services also include various features, like a blog, photo thumbnails, message previews,
          editing, deleting, sharing, searching and file encoding. In order to access the Services, to open a virtual
          Vault or create Digital Assets, you must first register to an account by providing your email address and
          choosing a password. You are entirely responsible for maintaining the confidentiality of your password. You
          agree not to use the account, or password of another User at any time, or to disclose your password to any
          third party. You agree to notify us immediately if you suspect any unauthorized use of your account or access
          to your password. You are solely responsible for any and all use of your account. <br /> • Accounts Access
          Information – information which includes certain details, such as account name, username and password, which
          enable access to a certain User's digital accounts, and/or other assets of the User, such as but not limited
          to, email accounts, social media accounts, file storage accounts, passwords to User's smartphones, etc. <br />{" "}
          • Digital Assets - any and all intangible assets and digital materials uploaded by a User to the System,
          including without limitation, Accounts Access Information, written messages, pictures, letters, video files,
          audio files, digital books, articles, documents, music files, posts and more.
          <br /> • Grantee - any person for whom a digital safe was created by a User. For the avoidance of any doubt,
          the term "Grantee" as defined herein is not necessarily a person's legal Grantee under any applicable law.{" "}
          <br /> • Minor - a User and/or Grantee which according to Grantee date of birth, as was entered in the
          App/Site, System and/or Services, are under the age of 18. DoveBridge assumes no responsibility and/or
          liability, directly and/or indirectly, regarding the truthfulness or accuracy of the date of birth as was
          entered by a User. <br /> • Personal Details – personal information provided by a User as part of his/her
          registration to the Services, either with respect to himself/herself and/or with respect to his/her Grantees
          and/or Confiders, including without limitation, names, email addresses, gender, date of birth, occupation,
          marital status, phone number, and address. <br /> • Confider - a person appointed by the User via the Services
          for transferring and/or approving the transfer of Digital Assets to such User's Grantees. It is hereby
          clarified that a person shall be deemed as a "Confider" only following such person's on-line acceptance of
          his/her responsibilities hereunder by registration to the System as the applicable Grantee's Confider. <br />{" "}
          • User - any person who registers and opens an account on the System, whether as a User of the Services (i.e,
          for safekeeping and creation of Digital Assets), or due to his capacity as a Confider or a Grantee. *2.
          Important terms of the System's Operation & Functionalities of the Services* 2.1. How to report a passing – a
          notification regarding a User's passing must be sent to DoveBridge via at least one of the following channels:{" "}
          <br /> • Receipt of a notice from such User's Confiders using the "Report User's Death" form on the App/Site;{" "}
          <br /> • Receipt of a notice from such User's Grantees by sending a notification through "Report User's Death"
          link available in the Services; and <br /> • Subject to applicable law, receipt of any governmental or
          official approval from governmental authorities’ databases (for example, the Death Master File (DMF) in the
          United States). 2.2. Verification – following receipt of a notice regarding the passing of a User through one
          of the channels listed above, DoveBridge's shall use its "verification process", as determined by it from time
          to time in its sole discretion, in order to verify that such notification was not made by mistake. Such
          "verification process" may include (i) on-line receipt of confirmation from the first person who notified the
          User's passing away, and (ii) obtaining an additional on-line confirmation regarding such User's passing away
          from a Confider or an Grantee of the User (in accordance with the Services' settings). It is hereby clarified
          that DoveBridge assumes no responsibility and/or liability, directly and/or indirectly, regarding the
          truthfulness or accuracy of the notice(s) reported to it from any person(s) in accordance with the foregoing
          provisions and/or any consequences of such notice(s). 2.3. Access to Digital Assets following a User's passing
          – without derogating from DoveBridge's Privacy Polic , subject to these Terms of Service, prior to a User's
          passing away, the User himself/herself will be the only person which will have access to his/her Digital
          Assets unless he chosen to share data with a specific Grantee while alive. Following a User's passing, only
          the specific Grantees and the applicable Confider(s) (where Minors are the Grantees) will be able to access
          the Digital Assets. 2.4. Transferring messages to Grantees - DoveBridge shall provide notice to the User's
          Grantees via designated email(s) regarding the Digital Assets that were left for them and provide them access
          to the Digital Assets via the App/Site and/or Services, subject to (i) these Terms, (ii) completion of the
          verification process as specified above and (iii) registration of such Grantee to the System, including
          his/her acceptance of these Terms. Following receipt of notification regarding a User's passing away and
          completion of the verification process, as specified above, each Grantee will receive an e-mail and/or text
          message (in accordance with the System's settings) that will notify him/her that the User left them certain
          Digital Assets in his/her virtual safe on DoveBridge's App/Site and such Grantees will be invited to enter the
          System which will provide them the option, upon and subject to registration to the Services, to view the
          Digital Assets that were left for them. In the event a certain Grantee does not register to the System or view
          the Digital Assets left for him/her, the applicable Confider will receive an email to that effect. DoveBridge
          will provide notice to the Grantees and/or to the Confiders, as applicable, in order to provide them access to
          the Digital Assets, only if the User's account contains Grantee updated e-mail addresses. Therefore all e-mail
          addresses must be kept updated by the User himself during his/her lifetime or by his/her Confiders after
          his/her passing away. DoveBridge cannot guarantee the transfer of any Digital Assets to Grantees unless such
          Grantees' e-mail addresses are updated and valid. Any Digital Assets left by a User to his/her Grantees may be
          viewed only by the applicable Grantee via DoveBridge's System. For the avoidance of doubt, it is subject to a
          respective Grantee's sole discretion whether to open and review Digital Assets left for him/her. DoveBridge
          cannot and does not guarantee that a Grantee will actually open his/her Digital Assets. In the event that the
          Digital Assets left for a certain Grantee exceed the limit of the allocated storage space given to such
          Grantee upon his/her registration to the System, the System shall send the Grantee a notice to that effect via
          email, stating that each Digital Asset left for him/her will be stored on the System for a period of 6 months
          commencing as of the date in which such Digital Asset was available for the Grantee to view on the System with
          no charge. In order for a Grantee to be able to view such Digital Assets for a period longer than 6 months
          after such Digital Asset was made available to him/her, as specified above, the Grantee may upgrade the
          account to a paying account, as further described below. In such event all Digital Assets (upon Grantee
          release to the Grantee) will become available for view by the Grantee at any given time. 2.5. Adult and Minor
          Grantees – Following the User passing away, if his/her Grantee's age is above 18, the Confider will not be
          able to actually view any Digital Assets left to such User's Grantees. However, such Confider(s) will be able
          to view only general information regarding the timing of release of the applicable Digital Assets to the
          applicable Grantee, in the event such Digital Assets are not designated to a specific date or are location
          based (messages which would be released automatically according to the User's preferences). Following the
          death of a User, in the event that a User's Grantee is a Minor, the Confider will be able to view any and all
          of the content of the Digital Assets addressed to such Minor Grantee, and decide if and when it is suitable to
          transfer it to such Minor Grantee. Notwithstanding any triggering events for release of the Digital Assets
          defined by the User (such as date based, location base or event based), the Confider will be able, at his/her
          sole discretion, with respect to adults and/or Minor Grantees, to release any of the Digital Assets left by a
          User at any time prior to the actual occurrence of such Digital Asset's triggering event. 2.6. Public Messages
          – there is an option to leave a "farewell message" as part of a User's Digital Assets, that will be posted on
          a User's social media account(s) according to his account settings. You hereby confirm and undertake that such
          Digital Asset will comply with the terms of use and privacy policy of the respective social network
          webApp/Site/application, which may be changed from time to time, and you hereby acknowledge that incompliance
          with the respective social network's terms of use and privacy policy may prevent DoveBridge from posting of
          such "farewell message(s)". DoveBridge makes no representation and does not assume any responsibility and/or
          liability with respect to any materials, content and/or photos and/or files or otherwise of any "farewell
          message(s)" and that such farewell messages will be appropriate or in compliance with such social networks'
          terms and/or actually published. *3. The Content and Sharing of Digital Assets* 3.1. DoveBridge's Services
          allow you to leave behind and share Digital Assets with your Grantees, so please think carefully about what
          you upload to the App/Site and/or Services and choose to share with them. 3.2. You are solely responsible for
          any Digital Assets and/or Personal Details uploaded by you to the App/Site. You hereby represent and warrant
          that you shall not copy, upload, download or share content unless you have the right to do so (including but
          not limited to information regarding your Grantees). Furthermore, when you upload a Digital Asset to the
          System you hereby represent that such Digital Asset will not cause any infringement of any rights of other
          third parties, including without limitation, any intellectual property right and privacy rights. In addition,
          for any content you upload to the System, you represent and warrant that such content is free of any
          copyrights, trademarks or other intellectual property infringements of any third party; and that you have the
          consent, release, and/or permission of each identifiable person depicted in your Personal Details and Digital
          Assets to upload, transmit, publish, sublicense, and/or disseminate Grantee name and/or likeness through your
          Personal Details and Digital Assets. 3.3. Subject to DoveBridge’s sole discretion, DoveBridge may, but is not
          obligated to, review your conduct while using the Services and the content of any Digital Assets originated
          from you, and may block, delete, terminate access to, or remove any such Digital Assets or User's account that
          DoveBridge, in its sole discretion, considers to be non-compliant with any of the requirements of these Terms
          and/or applicable law. DoveBridge shall not be responsible in any way to any Digital Assets Users chose to
          post and share via the DoveBridge's System. 3.4. You retain all of your ownership rights in your Digital
          Assets. However, by uploading or transmitting any Digital Assets using the System or the Services, you hereby
          grant to DoveBridge, its affiliates and service providers, a non-exclusive, royalty-free and worldwide
          license, consent and authorization to use such Digital Assets in any way we may reasonably choose for the
          purposes of providing the Services, including, host, index, cache, tag, copy, transmit, excerpt, create
          derivative works and modify, in any form or media now known or hereinafter developed, as well as to share
          Digital Assets with Confiders and Grantees, and/or publish, distribute and publicly display such Digital
          Assets, as indicated in such User's account (for example, "farewell message"). As a material condition for
          using the Services, you hereby warrant to us that you have the right to grant DoveBridge such license for such
          purposes. 3.5. DoveBridge expressly disclaims any and all liability in connection with any Digital Assets.
          DoveBridge reserves the right to purge Digital Assets from its databases at any time due to non-compliance
          with these Terms. You acknowledge and agree that you are solely responsible for backing up any Digital Assets
          uploaded to the System by you or for you. *4. Intellectual Property Rights* 4.1. With the exception of Digital
          Assets, Personal Details and information found on third party webApp/Sites, all content of the App/Site and
          System, including but not limited to the text and images thereof and Grantee arrangement, are owned,
          controlled, duly attained or licensed by or to DoveBridge and are protected under applicable copyrights and
          other proprietary laws, including but not limited to intellectual property laws. DoveBridge retains by
          ownership, control or license all title and interest in the intellectual property rights contained in any
          DoveBridge materials and software on the App/Site and System, including but not limited to copyright, database
          rights, trade dress, service marks, webApp/Site graphic design, graphics, user interfaces, visual interfaces,
          photographs, text, documents, descriptions, products, interactive features, videos, user submissions, button
          icons, trademarks, logos, trade or business names, goodwill associated with any of the foregoing, sounds,
          artwork, computer code, design, structure, selection, coordination, organization, arrangement and other
          matters related to the System, and other similar rights or contents or obligations whether registered or not
          in any jurisdiction in the world. 4.2. The copying, reproduction, use, modification or publication by you of
          any such materials or any part of the System, App/Site and/or Services in any form or by any means is strictly
          prohibited. By accepting these Terms, you hereby undertake not to do so and/or attempt to do so and/or assist
          anyone else in doing so. In case you wish to copy, print, save or download any content and/or information
          solely for your personal use, you must retain all copyright and other proprietary notices contained therein.
          4.3. You agree not to modify, rent, lease, sell, distribute, or create derivative works based on DoveBridge’s
          Services, in any manner, and you shall not exploit DoveBridge’s services in any unauthorized way. 4.4. All
          other trademarks not owned by DoveBridge or its subsidiaries that appear on the App/Site or Services are the
          property of Grantee respective owners. *5. Links to third-party webApp/Sites* The App/Site and System may
          contain links to other third-party webApp/Sites that are not owned or controlled by DoveBridge. DoveBridge is
          not responsible for the content, accuracy or opinion expressed in such webApp/Sites. Inclusion of any linked
          webApp/Site on the App/Site or System does not imply approval or endorsement of the linked webApp/Site by
          DoveBridge. You should exercise caution and look at the terms of use applicable to the webApp/Site in
          question. You release DoveBridge from any and all liabilities and damages arising from your use of, or
          reliance upon any third-party services, material or webApp/Sites, which are provided to you solely on a
          convenience basis. *6. Accounts & Billing* 6.1. DoveBridge's basic account currently offers 30 days free
          trial, to new Users which are not yet registered to the Services, which entitles you access to the DoveBridge
          services for a period of 30 days from the moment that you activate your account (the "Free Trial"). If you
          registered to the Services and activated your account prior to December 31, 2016, the provision regarding the
          Free Trial period does not apply to you and you may continue using your account with no charge, at the same
          terms you enjoyed before. After the expiration of the Free Trial, you will be requested to submit your payment
          details to continue use of your account. If you decide that you do not want to become a paying user of the
          DoveBridge Services upon the lapse of the Free Trial, you will not be able to access your DoveBridge account
          by the end of such trial. You may only use the Free Trial once. DoveBridge reserves the right, in its absolute
          discretion, to withdraw or to modify this Free Trial offer at any time without prior notice and with no
          liability. 6.2. A User can upgrade his/her basic DoveBridge's account according to the different subscription
          options offered by DoveBridge, as amended from time-to-time. Certain features and functionality of the
          Services may be available only at some types of accounts, versions or service level. Please note that
          DoveBridge will bill you on an annual basis for each periodic renewal until cancellation. A User who
          registered to an account in his/her capacity as a Confider and/or Grantee, will not be required to pay any
          fees for such account, except that Grantee use of the Services will be limited only to those actions and areas
          of the App/Site which are intended for Confider(s) and/or Grantee(s), as applicable, and shall not be entitled
          to a Free Trial. 6.3. You are responsible for all applicable taxes, and DoveBridge will charge tax when
          required to do so. Any fees charged in connection with the App/Site's and Services are exclusive of all taxes,
          levies or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes,
          levies or duties. Clearing and/or currency conversion fees may be imposed in connection to your subscription
          fee to the Services, by your bank and/or credit card company. 6.4. Suspension - Your account will remain in
          effect until it's cancelled for any reason or terminated by you. Thereafter, all Digital Assets will not be
          available for sending to your Grantees. If your billing information and payment source is invalid or if
          charges billed to you are declined, your account may be suspended or cancelled, at DoveBridge’s discretion. If
          a User account is suspended, DoveBridge may, but is not obligated to, maintain your account and/or related
          Digital Assets, in order to allow a User to pay the past-due charges and restore his/her account. If charges
          are not paid, such account may be cancelled and all Digital Assets may be deleted. 6.5. Fee Changes -
          DoveBridge may change the fees in effect in its sole discretion and without notice. Notwithstanding the
          foregoing, Users which have chosen automatic renewal subscription will receive an advance notice of these
          changes via a message to the email address associated with Grantee account, in accordance with applicable law.
          6.6. Automatic Renewal - In order to ensure that you do not experience an interruption or loss of Services, we
          offer an automatic renewal option. The automatic renewal option automatically renews the applicable service
          for a renewal period equal in time to the original service period. For example, if your original service
          period is for one year, your renewal period will be for one year. Therefore, unless you cancel your
          subscription, DoveBridge will automatically renew the applicable service when it comes up for renewal, and
          will take payment from the payment method you have on file with DoveBridge at DoveBridge’s then current rates,
          which you acknowledge and agree may be higher or lower than the rates for the original service period. You may
          cancel your subscription from such services prior to the automatic renewal at any time. In such event the
          services shall be discontinued upon the expiration of the respective period you have paid for and you shall
          not have any claims towards DoveBridge in relation to the discontinuation of the services. 6.7. Cancellation &
          Refunds – You are free to stop using DoveBridge's Services at any time and terminate your account completely
          by sending us a message to support@DoveBridge.com . DoveBridge reserves the right to suspend or end the
          Services at any time in its sole discretion and without notice, if you are not complying with these Terms, or
          use the Services in a manner that would cause DoveBridge legal liability, disrupt the Services or disrupt
          others' use of the Services, or in case DoveBridge is obligated to do so according to any applicable law. The
          DoveBridge's services are provided on a prepay basis. If you chose to cancel your DoveBridge's account, you
          will receive a pro-rata fee refund that was charged by DoveBridge. In order to cancel your paid account
          services please contact DoveBridge at billing@DoveBridge.com . The date of any cancellation shall be the date
          on which DoveBridge has received the User's cancellation notice via email. If you believe that you have been
          incorrectly charged, please contact DoveBridge at billing@DoveBridge.cm in writing within 30 days of the
          received receipt containing the charge in question. 6.8. Non-operating Account. Following receipt of
          notification regarding a User's passing away and DoveBridge's verification process as set forth above, then:
          (i) DoveBridge will stop charging such User's account, (ii) the User's account will become a non-operating
          account, and (iii) all of User's Digital Assets will be saved in safes designated for each of such User's
          Grantees. *7. Prohibited Uses* 8.1. You agree not use the Services in any manner to harm, threaten, harass,
          abuse, stalk, defame or otherwise infringe or violate the rights of any third party or person and/or
          organization, including DoveBridge, nor to build similar services or webApp/Sites or applications. You may
          not: (i) damage, disable, overburden, or impair the Services; (ii) resell or redistribute the Services or any
          part thereof; (iii) frame or utilize, directly or indirectly, any framing techniques to enclose any trademark,
          logo, or other proprietary information (including images, text, page layout, or form) of DoveBridge and/or its
          affiliates; and (iv) use any meta tags or any other hidden text utilizing DoveBridge’s trademarks or name.
          8.2. In addition, under any circumstance you shall not: (i) use the Services in any manner or for any purpose
          other than as expressly permitted by these Terms; (ii) engage in any unlawful or fraudulent activity or
          perpetrate a hoax or engage in phishing schemes or forgery or other similar falsification or manipulation of
          data; (iii) send unsolicited or unauthorized junk mail, spam, chain letters, pyramid schemes or any other form
          of duplicative or unsolicited messages, whether commercial or otherwise; (iv) store or transmit inappropriate
          content, such as content containing unlawful, defamatory, threatening, pornographic, abusive, libelous or
          otherwise objectionable material of any kind or nature; (v) store or transmit any content that contains or is
          used to initiate a denial of service attack, software viruses or other harmful or deleterious computer code,
          files or programs such as Trojan horses, worms, time bombs, or spyware. (vi) modify, decompile, reverse
          engineer, disassemble, publish, create derivative works, copy, distribute, disseminate, transmit, broadcast,
          display, license, sell, use any of this App/Site’s content or frame this App/Site within any other App/Site,
          nor use meta-tag searches or perform any activity that would damage the operation of the App/Site or otherwise
          exploit for any purposes whatsoever the App/Site’s content, information and source-code, including attempt to
          derive the source code of, modify, or create derivative works of the license, including any updates or any
          part thereof; (vii) collect content or information from the App/Site, or otherwise access the App/Site, by
          using any automated means, including without limitation, “spiders”, “offline readers”, "robots", and
          "scrapers"; (viii) disrupt the servers or networks connected to the App/Site; (ix) disable, circumvent,
          directly or indirectly, or otherwise interfere with security related features and contents of the App/Site or
          features and contents that prevent or restrict use or copying of any content or that enforce limitations on
          use of the App/Site; (x) harvest or collect any personal identifiable information from the App/Site; and (xi)
          use the App/Site, directly or indirectly, for any commercial purposes or commercial solicitation purposes. *9.
          Warranty Disclaimers* 9.1. The System and Services are provided "as is", "as available," and "with all
          faults," and are used only at the User's sole risk, to the fullest extent permissible by law. DoveBridge
          disclaims any and all warranties, express or implied, of any kind, regarding the System and/or Services
          (including without limitation its software, functionality, or of any content contained therewith), as to
          title, non-infringement, accuracy, completeness, accessibility, compatibility, suitability, reliability,
          availability, timeliness, quality, merchantability, fitness for a particular purpose or lack of viruses. 9.2.
          You agree that any information you provide to the App/Site and/or Application may be lost or destroyed, and
          that DoveBridge is not responsible for the loss of such information. 9.3. DoveBridge cannot ensure that the
          information and Services are free of bugs and/or errors and/or problems and/or other limitations. DoveBridge
          further disclaims any and all liability for the acts, omissions and conduct of any third parties in connection
          with or related to your and/or your Grantees' and/or your Confiders' use of the System and/or the Services.
          You expressly agree that any use or access of this App/Site is at your sole risk and responsibility. Neither
          DoveBridge, nor any of its affiliates, officers, executives, directors, employees, licensors, agents,
          representatives, and shareholders warrant and/or guarantee that the content, information, materials, Services,
          or products of the App/Site is accurate, current, complete and/or that access to the App/Site will be
          uninterrupted or error-free or free of bugs, security breaches, virus attacks, and like nature or that the
          App/Site and its servers are free from harmful components. Except as expressly stated in DoveBridge’s Privacy
          Policy, DoveBridge does not make or provide any representations, warranties or conditions of any kind, express
          or implied, as to the security of any information you may provide or activities you engage in during the
          course of your use and/or access of the App/Site and Services. You assume total responsibility for your
          (and/or your Confiders' and/or Grantees') use of the System and the Services and any linked App/Sites. For
          avoidance of doubt, it is hereby clarified that you are fully responsible for all Digital Assets and Personal
          Data you uploaded and the DoveBridge assumes no responsibility for such, which is fully disclaimed. *10.
          Limitation of Liability* To the fullest extent permitted by law, in no event will DoveBridge or any of its
          subsidiaries, affiliates, officers, executives, directors, employees, licensors, agents, representatives, and
          shareholders be liable for any direct, indirect, special, incidental, punitive, exemplary or consequential
          damages arising from your use of the App/Site or System or any other claim related in any way to the Services
          (including any and all actions or inactions taken by a respective Confider services), nor to any emotional or
          physical distress, sorrow, grief, loss of use, data, goodwill, reputation, opportunity, personal injury,
          social harm, business, or profits, regardless of the legal or equitable theory upon which the claim is based,
          even if advised or warned of the possibility thereof in advance. DoveBridge’s entire liability and your first
          and exclusive remedy is to discontinue your use of the App/Site and Services. Notwithstanding the above.
          DoveBridge's aggregated liability for any actual damages and all claims relating to the Services or arising
          from or related to the App/Site, whether in contract or tort or otherwise, shall be limited to the aggregate
          amount actually paid by you to DoveBridge in the past 12 months immediately preceding the bringing of the
          claim against DoveBridge. You further consent and agree that any claim or cause of action which you may have
          with respect to DoveBridge and/or its affiliates, officers, executives, employees, agents, and shareholders
          must be commenced within one (1) year after the claim or cause of action arises. Because some jurisdictions
          may not allow the exclusion or limitation of liability stated above, in such states or jurisdictions,
          DoveBridge’s liability shall be limited to the extent permitted by law. *11. Indemnity* You agree that you
          shall indemnify, defend and hold DoveBridge, its, officers, directors, shareholders, executives, employees,
          attorneys, representatives, agents, subsidiaries and affiliates, harmless from any and all demands, loss,
          liability, damages, claims, actions, causes of action, suits, proceedings, obligations cost or expenses
          (including reasonable attorneys’ fees), arising from or relating to the use and receipt of: (i) the App/Site
          and/or receipt of Services, (ii) your violation of these Terms and/or Privacy Policy, (iii) your violation of
          any third party right, made against due to or arising out of or in connection with your use of the System
          and/or receipt of the Services. This Section shall survive any termination of these Terms. *12. Resolving
          Disputes* We want to address your concerns. Before filing a claim against DoveBridge, you agree to try to
          resolve the dispute by contacting us at dispute-notice@DoveBridge.com . We'll try to resolve the dispute
          informally by contacting you via email. If a dispute is not resolved within 15 days of submission, you or
          DoveBridge may bring a formal proceeding. *13. General* 13.1. Governing Law & Jurisdiction. These Terms shall
          be governed by the laws of the state of Israel, without respect to its conflict of laws principles. Any claim
          or dispute between you and DoveBridge that arises in whole or in part from the App/Site and/or the Services
          shall be decided exclusively by a court of competent jurisdiction located in Tel-Aviv, Israel. 13.2. Entire
          Agreement. These Terms constitute the entire agreement between you and DoveBridge with respect to the
          Services, and supersede and replace any other prior or contemporaneous agreements. 13.3. Waiver, Severability
          & Assignment. DoveBridge's failure to enforce a provision is not a waiver of its right to do so later. If a
          provision of these Terms or the Privacy Policy is found to be unenforceable, the remaining provisions of these
          Terms or the Privacy Policy will remain in full effect and the enforceable term will be substituted reflecting
          our intent as closely as possible. You may not assign any of your rights under these Terms, and any such
          attempt will be void. DoveBridge may assign its rights to any of its affiliates or subsidiaries, or to any
          successor in interest of any business associated with the Services. 13.4. Modifications. The content of this
          App/Site and/or Services, including these Terms, is subject to modification or change at any time by
          DoveBridge, at its sole discretion. Users are advised to periodically check DoveBridge’s Terms and Privacy
          Policy for any updates. Any modification or change shall be effective upon posting by DoveBridge on the
          App/Site and/or DoveBridge’s applications, and you agree to be bound to any such changes or modifications when
          you use and/or access the App/Site and/or DoveBridge’s applications after any such change is posted. 13.5.
          <br />
          <br />
          Contact us. We are here to help, so if you have any questions, claims, requests or any other kind of
          information that you would like to share with us, please contact us at:{" "}
          <a href="mailto:support@DoveBridge.com">support@DoveBridge.com</a>
        </div>
      </Cmodal>
      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
