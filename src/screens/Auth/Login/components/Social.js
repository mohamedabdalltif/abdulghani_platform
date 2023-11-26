import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "../style";

const SocialIcon = (props) => {
    return (
        <>
            <TouchableOpacity
                disabled={props.loading}
                activeOpacity={.8}
                style={styles.Social}
                onPress={props.onPress} >
                {
                    props.loading ?
                        <ActivityIndicator size={'small'} color={'black'} />
                        :
                        <props.Icon fill={props.Icon == 'Facebook' ? "#1877F2" : ""} />
                }
            </TouchableOpacity>
        </>
    )
}

export default SocialIcon