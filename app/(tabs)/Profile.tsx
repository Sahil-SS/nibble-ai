import Colors from "@/services/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
        padding: 20,
      }}
    >
      {/* Header */}
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: Colors.SURFACE,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Ionicons
            name="person-circle-outline"
            size={80}
            color={Colors.PRIMARY}
          />
        </View>
        <Text
          style={{
            color: Colors.TEXT_MAIN,
            fontFamily: "interBold",
            fontSize: 22,
          }}
        >
          John Doe
        </Text>
        <Text
          style={{
            color: Colors.TEXT_MUTED,
            fontFamily: "interRegular",
            fontSize: 14,
            marginTop: 4,
          }}
        >
          AI-Powered Home Chef
        </Text>
      </View>

      {/* Stats Cards */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        {[
          { label: "Saved", icon: "bookmark-outline", count: 24 },
          { label: "Favorites", icon: "heart-outline", count: 12 },
          { label: "Reviews", icon: "chatbubble-outline", count: 8 },
        ].map((item, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              backgroundColor: Colors.SURFACE,
              borderRadius: 12,
              padding: 16,
              alignItems: "center",
              marginHorizontal: 4,
            }}
          >
            <Ionicons
              name={item.icon as any}
              size={24}
              color={Colors.PRIMARY}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "interBold",
                color: Colors.TEXT_MAIN,
                marginTop: 8,
              }}
            >
              {item.count}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "interRegular",
                color: Colors.TEXT_MUTED,
              }}
            >
              {item.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Settings Section */}
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.SURFACE,
            borderRadius: 10,
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="settings-outline"
              size={22}
              color={Colors.PRIMARY}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                color: Colors.TEXT_MAIN,
                fontFamily: "interRegular",
              }}
            >
              Settings
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={Colors.TEXT_MUTED}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.SURFACE,
            borderRadius: 10,
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="logout" size={22} color={Colors.ERROR} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                color: Colors.ERROR,
                fontFamily: "interRegular",
              }}
            >
              Logout
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={Colors.TEXT_MUTED}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
