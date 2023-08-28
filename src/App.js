import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {

  return (
    <>
      <div>Personal Digital Assistants</div>
      <img src={AlexaImage} alt="AlexaLogo" />
      <img src={SiriImage} alt="SiriLogo"/>
      <img src={CortanaImage} alt="CortanaLogo"/>
      <ProfileCard title="Alexa" handle="@alexa99"/>
      <ProfileCard title="Cortana" handle="@cortana32"/>
      <ProfileCard title="Siri" handle="@siri01"/>
    </>
  );
}

export default App;
