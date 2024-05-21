import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TenantScreen = ({ navigation }) => {
  const [tenants, setTenants] = useState([
    { id: '1', firstName: 'Fulano', lastName: 'Fulano', email: 'fulano@example.com', address: '123 Street', phone: '1234567890', roomNumber: 'Room 1', dateOfBirth: '2024-01-01'},
    { id: '2', firstName: 'Beltrano', lastName: '', email: 'beltrano@example.com', address: '456 Avenue', phone: '0987654321', roomNumber: 'Room 2', dateOfBirth: '2024-02-02' },
  ]);

  const handleDelete = (id) => {
    setTenants(tenants.filter(tenant => tenant.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.tenantItem}>
      <View>
        <Text style={styles.tenantName}>{item.firstName} {item.lastName}</Text>
        <Text style={styles.tenantRoom}>{item.roomNumber}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate('EditTenant', { tenant: item })} style={styles.actionButton}>
          <Icon name="pencil" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={[styles.actionButton, styles.deleteButton]}>
          <Icon name="trash" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Tenant Management</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTenant')}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tenants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7D6',
    padding: 20,
    paddingTop: 40, // Adjust this value to move the content lower
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20, // Adjust the space between the logo and the header
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#8A2BE2',
    borderRadius: 50,
    padding: 10,
  },
  tenantItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
   
  },
  tenantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tenantRoom: {
    fontSize: 14,
    color: '#888',
    
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#38b000',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default TenantScreen;
