import { createStackNavigator } from "react-navigation";

import DefaultScreen from "../screens/DefaultScreen";

const AuthNavigator = createStackNavigator({ SignIn: DefaultScreen });

export default AuthNavigator;
