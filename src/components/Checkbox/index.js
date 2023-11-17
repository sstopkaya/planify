import React from "react";
import { Pressable, View } from "react-native";
import styles from "./styles";

const Checkbox = ({checked, onPress}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, checked ? {borderWidth: 2} : null]}>
            {checked ? (
                <View style={styles.innerSquare}/>
            ) : null}
        </Pressable>        
    );
};

export default React.memo(Checkbox);