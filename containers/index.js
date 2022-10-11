import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

const HomeContainer = ({ children }) => {
    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#FFF"
    }
})

export default HomeContainer;