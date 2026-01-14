import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../theme';

const NOTIFICATIONS = [
    { id: '1', title: 'New Module Available', message: 'Check out the new "Digital Loans" module!', time: '2h ago' },
    { id: '2', title: 'Daily Streak', message: 'You are on a 3-day streak! Keep it up!', time: '5h ago' },
    { id: '3', title: 'Quiz Reminder', message: 'You have a pending quiz for "KYC Norms"', time: '1d ago' },
];

export default function NotificationScreen() {

    const renderItem = ({ item }) => (
        <View style={styles.notificationCard}>
            <View style={styles.iconCircle}>
                <Text>🔔</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={NOTIFICATIONS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    list: {
        padding: 20,
    },
    notificationCard: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        elevation: 1,
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E6F0FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 4,
    },
    message: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    time: {
        fontSize: 12,
        color: '#999',
    }
});
