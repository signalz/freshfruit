import { createStackNavigator } from "react-navigation";

import DefaultScreen from "../screens/DefaultScreen";

const AuthNavigator = createStackNavigator(
  { SignIn: DefaultScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#C2185B",
        height: 20
      }
    }
  }
);

export default AuthNavigator;
