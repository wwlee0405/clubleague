import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsLoggedIn } from "../../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";

import TabNavigation from "../navigation/TabNavigation";

export default () => {
  const isLoggedIn = true;
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <TabNavigation /> : <AuthNavigation />}
    </View>
  );
};
