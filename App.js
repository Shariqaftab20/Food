import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./screens/SearchSreen";
import ResultShow from "./screens/ResultShow";

const navigator=createStackNavigator(
  {
    Search: SearchScreen,
    Show:ResultShow,
  },
  {
    initialRouteName:"Search",
    defaultNavigationOptions:{
      title:"Business Search",
    },
  }
);

export default createAppContainer(navigator);