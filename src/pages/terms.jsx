import HeroContent from "../components/shared/HeroContent";
import Layout from "../Layout";
import SectionContainer from "../Layout/SectionContainer";

const Terms = () => {
  return (
    <Layout>
      <HeroContent
        clsName="bg-primary-3"
        title="Terms &amp; Conditions"
        animation="fade-up"
        delay1="400"
      />
      <SectionContainer>
        <div className="large-text">
          Your enrollment or use of Insurance Assist’s, a wholly owned
          subsidiary of the Guardian Life Insurance Company of America, Text
          Service constitutes your agreement to these terms and conditions
          (“Terms”). We may amend these terms and modify or cancel the Text
          Service or any of its features without notice. Enrollment in the Text
          Service is not a guarantee that you will receive text messages from
          us, and we reserve the right to cancel some or all text alert
          elections applicable to your account, at any time.
          <br />
           <br />
          You agree to provide us with a valid mobile number. You agree and
          consent that we may send you text messages to assist you in scheduling
          an appointment, confirming an appointment and to provide reminders for
          an upcoming appointment, including via an automatic telephone dialing
          system or autodialer, to that number through your wireless provider.
          <br />
           <br />
          Once enrolled, you will receive a single text message from (347)
          474-1075 giving you the opportunity to confirm or decline the Text
          Service via a reply.  By replying YES to this message, you are
          confirming a subscription to the Text Service. If you reply NO to this
          message, you will not receive the Text Service.
          <br />
           <br />
          <strong>Message and data rates may apply.</strong> We do not charge
          you for any text messages we send, but you are responsible for all
          charges and fees associated with text messaging that may be imposed by
          your wireless service provider. Check with your service provider for
          details on specific fees and charges that may apply.
          <br />
           <br />
          Notify us immediately of any changes to your registered mobile phone
          or device
          <br />
          including changes to your wireless service provider. In case of
          unauthorized access to your mobile phone or device, or our Text
          Service, you agree to cancel enrollment associated with the phone or
          device immediately.
          <br />
           <br />
          In addition to replying STOP to the text messages you receive from us,
          you may also opt out of receiving text messages to your mobile device
          by calling us at (610) 807-7755
          <br />
           <br />
          When we receive a request to unsubscribe from you, you will receive a
          single message from us confirming that you have been unsubscribed.
          Following that confirmation message, no additional text messages will
          be sent to you unless you reactivate them.
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Terms;
