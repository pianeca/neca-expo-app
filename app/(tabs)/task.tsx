import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function Task() {
  const DATA = [
    { id: 1, title: "Hello World", description: "Hello World Again!" },
    { id: 2, title: "Supabase", description: "supabase online backend" },
  ];

  type ItemProps = {
    title: string;
    description: string;
  };

  const Item = ({ title, description }: ItemProps) => (
    <View className="flex-1 justify-center items-center bg-cyan-300 p-3 m-4 rounded-lg">
      <View className="bg-lime-600 justify-center items-center p-3 rounded-md">
        <Text className="font-semibold text-white text-lg">{title}</Text>
        <Text className="text-white">{description}</Text>
      </View>

      <View className="flex-row gap-4 mt-4">
        <TouchableOpacity className="bg-blue-400 px-4 py-2 rounded-md">
          <Text className="text-white">Update</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-red-500 px-4 py-2 rounded-md">
          <Text className="text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="font-bold text-2xl mb-4">Task</Text>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
