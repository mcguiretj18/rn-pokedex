import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import sharedStyles from "../shared/styles";

const TabContent = ({ index, data }) => {
    if (index === 1) {
        // Moves (Evolutions)
        return <ScrollView StickyHeaderComponent={<Text>Moves</Text>}>
            {data.moves.map(move => {
                return (
                    <Text key={move.move.name}>{move.move.name}</Text>
                )
            })}
        </ScrollView>;
    }

    if (index === 2) {
        // Details
        return (
            <>
                <Text>Height: {`${data?.height}m` ?? "Unknown"}</Text>
                <Text>Weight: {`${data?.weight}kg` ?? "Unknown"}</Text>
                <Text style={sharedStyles.capitalize}>Abilities:
                    {data?.abilities?.map((ability, index) => {
                        if (index + 1 === data?.abilities?.length) {
                            return ability.ability.name;
                        }
                        return ability.ability.name + ' | ';
                    })}
                </Text>
            </>
        );
    }

    if (index === 3) {
        // Types
        return (
            <>
                {data?.types.map(type => (
                    <Text key={type.type.name} style={sharedStyles.capitalize}>{type.type.name}</Text>
                ))}
            </>
        );
    }

    if (index === 4) {
        // Stats
        return data.stats.map(({ base_stat, stat }) => (
            <Text key={stat.name} style={sharedStyles.capitalize}>{stat.name.split("-").join(" ")} {base_stat}</Text>
        ));
    }

    if (index === 5) {
        // Weaknesses
        return <Text>Unknown</Text>;
    }
}

const Tabs = ({ tabs, data }) => {
    const [tabIndex, setTabIndex] = useState(1);

    // console.log({ data: JSON.stringify(data, null, 2) });

    return (
        <>
            <View style={[
                sharedStyles.horizontal,
                sharedStyles.rowSpaceBetween
            ]}>
                {tabs.map(({ text, index }) => (
                    <Pressable key={text} onPress={() => setTabIndex(index)}>
                        <Text style={[
                            tabIndex === index ? sharedStyles.fontBold : {},
                            sharedStyles.name
                        ]}>{text}</Text>
                    </Pressable>
                ))}
            </View>
            <TabContent index={tabIndex} data={data} />
        </>
    );
};

export default Tabs;