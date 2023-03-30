import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save Money</h1>
      <span className="mailDesc">
        Sign up and we will send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" className="mailInput" />
        <button className="mailButton">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
