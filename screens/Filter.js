import { Button, Text, View } from "react-native";

const types = [
    "Normal",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy"
]

const Filter = (props) => {
    return (
        <View>
            <Text>Filter</Text>
            {types.map((type, index) => (
                <Button key={type} title={type} onPress={() =>
                    props.navigation.navigate("Home", {
                        type: `${index + 1}`
                    })
                } />
            ))}
        </View>
    )
}

export default Filter;