import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Header } from "../components";
import { AboutMe, Home } from "../screens";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    header(props) {
                        return <Header {...props} />;
                    },
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AboutMe" component={AboutMe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
