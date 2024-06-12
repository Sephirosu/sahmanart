import { SocialIcon } from "react-social-icons";

function Socials() {
  return (
    <div className="fixed bottom-20 left-0 right-0 space-x-7 text-white text-center">
      <SocialIcon
        rel="noopener noreferrer"
        target="_blank"
        url="https://facebook.com/sahmanart"
      />
      <SocialIcon
        rel="noopener noreferrer"
        target="_blank"
        url="mailto:irfansahman88@gmail.com"
      />
      <SocialIcon
        rel="noopener noreferrer"
        target="_blank"
        url="https://ba.linkedin.com/in/muso-sahman-8a980913b"
      />
    </div>
  );
}

export default Socials;
