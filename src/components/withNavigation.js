import { useNavigate } from "react-router-dom";
const withNavigation = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
  return Wrapper
};
export default withNavigation;
