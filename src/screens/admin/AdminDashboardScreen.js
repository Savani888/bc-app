import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../../theme';
import { supabase } from '../../services/supabase';

export default function AdminDashboardScreen({ navigation }) {

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) Alert.alert('Error', error.message);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Admin Dashboard</Text>
                <Text style={styles.subtitle}>Manage Content & Users</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.statCard}>
                    <Text style={styles.statNumber}>125</Text>
                    <Text style={styles.statLabel}>Active Users</Text>
                </View>

                <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Coming Soon', 'Module Management')}>
                    <Text style={styles.actionText}>Manage Modules</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.secondary }]} onPress={() => Alert.alert('Coming Soon', 'Analytics')}>
                    <Text style={[styles.actionText, { color: colors.primary }]}>View Analytics</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.error, marginTop: 40 }]} onPress={handleLogout}>
                    <Text style={styles.actionText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        padding: 30,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.white,
    },
    subtitle: {
        fontSize: 16,
        color: colors.accent,
        marginTop: 5,
    },
    content: {
        padding: 20,
    },
    statCard: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 30,
        elevation: 2,
    },
    statNumber: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.primary,
    },
    statLabel: {
        fontSize: 14,
        color: colors.text,
    },
    actionButton: {
        backgroundColor: colors.primary,
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2,
    },
    actionText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    }
});
