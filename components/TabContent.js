import { ScrollView, Text } from "react-native";
import { useTailwind } from 'tailwind-rn';

const TabContent = ({ index, data }) => {
    const tailwind = useTailwind();
    switch(index) {
        case 1:
            // Moves
            return (
                <ScrollView StickyHeaderComponent={<Text>Moves</Text>}>
                    {data.moves.map(move => {
                        return (
                            <Text key={move.move.name}>{move.move.name}</Text>
                        )
                    })}
                </ScrollView>
            );
        case 2:
            // Details
            return (
                <>
                    <Text>Height: {`${data?.height}m` ?? "Unknown"}</Text>
                    <Text>Weight: {`${data?.weight}kg` ?? "Unknown"}</Text>
                    <Text style={tailwind('captialize')}>Abilities:
                        {data?.abilities?.map((ability, index) => {
                            if (index + 1 === data?.abilities?.length) {
                                return ability.ability.name;
                            }
                            return ability.ability.name + ' | ';
                        })}
                    </Text>
                </>
            );
        case 3:
            // Types
            return data?.types.map(type => (
                <Text key={type.type.name} style={tailwind('captialize')}>{type.type.name}</Text>
            ));
        case 4:
            // Stats
            return data.stats.map(({ base_stat, stat }) => (
                <Text key={stat.name} style={tailwind('capitalize')}>{stat.name.split("-").join(" ")} {base_stat}</Text>
            ));
        case 5:
            // Weaknesses
            return <Text>Unknown</Text>;
        default:
            return null;
    }
}

export default TabContent;