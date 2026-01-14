import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function StreakTracker({ currentStreak }) {
    // Mock data: active for T, W, T
    const activity = [false, true, true, true, false, false, false];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Weekly Streak</Text>
                <View style={styles.badge}>
                    <Text style={styles.streakCount}>{currentStreak} Days 🔥</Text>
                </View>
            </View>

            <View style={styles.daysContainer}>
                {DAYS.map((day, index) => (
                    <View key={index} style={styles.dayWrapper}>
                        <View style={[
                            styles.dayCircle,
                            activity[index] && styles.activeDay
                        ]}>
                            <Text style={[
                                styles.dayText,
                                activity[index] && styles.activeDayText
                            ]}>{day}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
    },
    badge: {
        backgroundColor: '#FFF0E6', // Light Orange
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 20,
    },
    streakCount: {
        color: '#FF4500', // OrangeRed
        fontWeight: 'bold',
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dayWrapper: {
        alignItems: 'center',
    },
    dayCircle: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDay: {
        backgroundColor: colors.primary,
    },
    dayText: {
        color: '#999',
        fontWeight: '600',
    },
    activeDayText: {
        color: colors.white,
    }
});
