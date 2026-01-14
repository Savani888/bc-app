import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { colors } from '../theme';

const BADGES = [
    { id: '1', name: 'First Steps', unlocked: true, icon: '🚀' },
    { id: '2', name: 'Quiz Master', unlocked: true, icon: '🎓' },
    { id: '3', name: '7-Day Streak', unlocked: false, icon: '🔥' },
    { id: '4', name: 'Certified', unlocked: false, icon: '🏆' },
];

export default function BadgeGrid() {
    const renderBadge = ({ item }) => (
        <View style={[styles.badgeCard, !item.unlocked && styles.lockedBadge]}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={styles.badgeName}>{item.name}</Text>
            {!item.unlocked && <View style={styles.lockOverlay} />}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Achievements</Text>
            <FlatList
                data={BADGES}
                renderItem={renderBadge}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                scrollEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 15,
    },
    row: {
        justifyContent: 'space-between',
    },
    badgeCard: {
        backgroundColor: colors.white,
        width: '48%',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2,
        position: 'relative',
        overflow: 'hidden',
    },
    lockedBadge: {
        opacity: 0.6,
        backgroundColor: '#E0E0E0',
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        fontSize: 24,
    },
    badgeName: {
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: 14,
    },
    lockOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(200,200,200,0.3)',
    }
});
