import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../../theme';
import { supabase } from '../../services/supabase';

const MOCK_MODULES = [
    { id: '1', title: 'Intro to Banking', description: 'Basics of banking for BCs', duration: '5 mins' },
    { id: '2', title: 'KYC Norms', description: 'Understanding Know Your Customer', duration: '8 mins' },
    { id: '3', title: 'Digital Transactions', description: 'Handling AEPS and Cards', duration: '10 mins' },
    { id: '4', title: 'Customer Service', description: 'Best practices', duration: '6 mins' },
];

export default function HomeScreen({ navigation }) {

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) Alert.alert('Error', error.message);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleLogout} style={{ marginRight: 10 }}>
                    <Text style={{ color: colors.white, fontWeight: 'bold' }}>Logout</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    const renderModule = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ModuleDetail', { module: item })}
        >
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.duration}>{item.duration}</Text>
            </View>
            <Text style={styles.cardDescription}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Learning Modules</Text>
                <Text style={styles.headerSubtitle}>Start your bite-sized learning</Text>
            </View>

            <FlatList
                data={MOCK_MODULES}
                renderItem={renderModule}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        padding: 20,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
    },
    headerSubtitle: {
        fontSize: 14,
        color: colors.text,
        marginTop: 5,
    },
    listContainer: {
        padding: 20,
    },
    card: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderLeftColor: colors.secondary,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
        flex: 1,
    },
    duration: {
        fontSize: 12,
        color: colors.text,
        backgroundColor: colors.accent,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        overflow: 'hidden',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    }
});
