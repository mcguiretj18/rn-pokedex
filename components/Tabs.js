import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useTailwind } from 'tailwind-rn';
import sharedStyles from "../shared/styles";
import TabContent from "./TabContent";

const Tabs = ({ tabs, data }) => {
    const [tabIndex, setTabIndex] = useState(1);
    const tailwind = useTailwind();
    return (
        <>
            <View style={tailwind('flex-row justify-between')}>
                {tabs.map(({ text, index }) => (
                    <Pressable key={text} onPress={() => setTabIndex(index)}>
                        <Text style={tailwind(`text-base ${tabIndex === index ? 'font-bold' : ''}`)}>{text}</Text>
                    </Pressable>
                ))}
            </View>
            <TabContent index={tabIndex} data={data} />
        </>
    );
};

export default Tabs;