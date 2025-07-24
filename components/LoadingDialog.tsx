import Colors from "@/services/Colors";
import React from "react";
import { ActivityIndicator, Modal, Text, View } from "react-native";

interface LoadingDialogProps {
  visible: boolean;
  text?: string;
}

export default function LoadingDialog({
  visible = false,
  text = "Loading...",
}: LoadingDialogProps) {
  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00000070",
        }}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: Colors.SURFACE,
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <ActivityIndicator size={"large"} color={Colors.PRIMARY} />
          <Text
            style={{
              color: Colors.TEXT_MAIN,
              fontFamily: "interBold",
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </Modal>
  );
}
