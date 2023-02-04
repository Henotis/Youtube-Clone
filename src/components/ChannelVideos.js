import Videos from "./Videos";
import { useOutletContext } from "react-router-dom";

const ChannelAbout = () => {
  const [videos] = useOutletContext();
  return <Videos videos={videos} />;
};

export default ChannelAbout;
