import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { SafeAreaView, StatusBar, View } from 'react-native';

const Container = ({ children }) => {
    const tailwind = useTailwind();
    return (
        <SafeAreaView>
            <StatusBar />
            <View style={tailwind('p-2.5 bg-white')}>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default Container;