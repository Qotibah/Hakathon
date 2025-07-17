import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'Hakathon-main\src\src\Screens\HomeScreen.js';
import AccountsScreen from '../screens/AccountsScreen';
import PaymentScreen from 'Hakathon-main\src\src\Screens\PaymentScreen.js';
import DonationScreen from 'Hakathon-main\src\src\Screens\DonationScreen.js';
import RecurringPaymentsScreen from 'Hakathon-main\src\src\Screens\RecurringPaymentsScreen.js';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'الرئيسية' }} />
      <Stack.Screen name="Accounts" component={AccountsScreen} options={{ title: 'الحسابات' }} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'الدفع' }} />
      <Stack.Screen name="Donation" component={DonationScreen} options={{ title: 'التبرع' }} />
      <Stack.Screen name="Recurring" component={RecurringPaymentsScreen} options={{ title: 'الدفعات التلقائية' }} />
    </Stack.Navigator>
  );
}
