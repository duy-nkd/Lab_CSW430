import React from 'react';
import { SafeAreaView } from 'react-native';
import EmployeeForm from './EmployeeForm';

export default function App() {
  return (
    <SafeAreaView>
      <EmployeeForm title="Employee Information" />
    </SafeAreaView>
  );
}