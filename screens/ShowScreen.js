import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ShowScreen = ({ route }) => {
    return (
        <ScrollView>
            <View>
                <Ionicons name="Person" size={100} color="black" />
                <Text style={styles.teks}>Name : {route.params.fullname}</Text>
                <Text style={styles.teks}>Address : {route.params.address}</Text>
                <Text style={styles.teks}>Major : {route.params.major}</Text>
                <Text style={styles.teks}>Batch : {route.params.batch}</Text>
            </View>
        </ScrollView>
    )
}

export default ShowScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    teks : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    }
})