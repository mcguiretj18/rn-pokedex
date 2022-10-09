import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const HomeContainer = ({ children }) => {
    return (
        <SafeAreaView>
            <StatusBar />
            {children}
        </SafeAreaView>
    );
}

export default HomeContainer;