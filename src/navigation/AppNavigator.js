import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ModuleDetailScreen from '../screens/course/ModuleDetailScreen';
import { colors } from '../theme';

const Stack = createNativeStackNavigator();

import { useAuth } from '../context/AuthContext';
import AdminDashboardScreen from '../screens/admin/AdminDashboardScreen';
import MainTabNavigator from './MainTabNavigator';

export default function AppNavigator() {
    const { user, isAdmin, loading } = useAuth();

    if (loading) return null; // Or a splash screen

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: colors.primary },
                    headerTintColor: colors.white,
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                {!user ? (
                    // Auth Stack
                    <>
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{ title: 'Create Account' }}
                        />
                    </>
                ) : (
                    // App Stack (Admin vs User)
                    isAdmin ? (
                        <Stack.Screen
                            name="AdminDashboard"
                            component={AdminDashboardScreen}
                            options={{ title: 'Admin Panel', headerShown: false }}
                        />
                    ) : (
                        <>
                            <Stack.Screen
                                name="MainTabs"
                                component={MainTabNavigator}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="ModuleDetail"
                                component={ModuleDetailScreen}
                                options={{ title: 'Module Content' }}
                            />
                        </>
                    )
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
