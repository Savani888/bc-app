import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../../theme';

export default function ModuleDetailScreen({ route, navigation }) {
    const { module } = route.params;

    const handleComplete = () => {
        Alert.alert('Congratulations!', 'You have completed this module.');
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.hero}>
                <Text style={styles.title}>{module.title}</Text>
                <Text style={styles.subtitle}>{module.description}</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{module.duration}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.sectionHeader}>Chapter 1: Introduction</Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>

                <View style={styles.placeholderVideo}>
                    <Text style={{ color: '#fff' }}>Video Content Placeholder</Text>
                </View>

                <Text style={styles.sectionHeader}>Key Takeaways</Text>
                <Text style={styles.text}>
                    • Understand the role of BCs{'\n'}
                    • Learn about customer interaction{'\n'}
                    • Security best practices
                </Text>

                <TouchableOpacity style={styles.button} onPress={handleComplete}>
                    <Text style={styles.buttonText}>Mark as Complete</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    hero: {
        backgroundColor: colors.primary,
        padding: 30,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#E0E0E0',
        marginBottom: 20,
    },
    badge: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    badgeText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 12,
    },
    content: {
        padding: 20,
        backgroundColor: colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, // Overlap effect if moved up
        marginTop: -20,
        backgroundColor: colors.white, // Ensure white background for content
        flex: 1,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: colors.text,
        lineHeight: 24,
    },
    placeholderVideo: {
        height: 180,
        backgroundColor: '#333',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: colors.success,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    }
});
