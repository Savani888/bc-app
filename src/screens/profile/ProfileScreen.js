import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { colors } from '../../theme';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../context/AuthContext';
import StreakTracker from '../../components/StreakTracker';
import BadgeGrid from '../../components/BadgeGrid';

export default function ProfileScreen() {
    const { user } = useAuth();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) Alert.alert('Error', error.message);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>{user?.email?.[0]?.toUpperCase() || 'U'}</Text>
                </View>
                <Text style={styles.name}>{user?.user_metadata?.full_name || 'Business Correspondent'}</Text>
                <Text style={styles.email}>{user?.email}</Text>
                <View style={styles.roleBadge}>
                    <Text style={styles.roleText}>{user?.user_metadata?.role || 'User'}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <StreakTracker currentStreak={3} />
                <BadgeGrid />

                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Log Out</Text>
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
    header: {
        backgroundColor: colors.primary,
        padding: 30,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    avatarText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.primary,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        color: '#E0E0E0',
        marginBottom: 15,
    },
    roleBadge: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 15,
    },
    roleText: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 12,
        textTransform: 'capitalize',
    },
    content: {
        padding: 20,
    },
    logoutButton: {
        marginTop: 30,
        backgroundColor: '#FFEBEB',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 30,
    },
    logoutText: {
        color: colors.error,
        fontWeight: 'bold',
        fontSize: 16,
    }
});
