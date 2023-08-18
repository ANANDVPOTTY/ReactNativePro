import { Pressable, Text, View } from "react-native";
import { styles } from "./GoalItemcss";

function GoalItem(props) {
  return (
    <>
      <View style={styles.goalItem}>
        <Pressable
          style={styles.itemView}
          onPress={props.onDeleteItem.bind(this, props.id)}
          android_ripple={{ color: "red" }}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    </>
  );
}

export default GoalItem;
