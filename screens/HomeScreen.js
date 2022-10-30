import React from 'react'
import Card from '../components/Card';
import { ScrollView, Text } from 'react-native';

let items = [<Card />, <Card />, <Card />, <Card />, <Card />];
let itemList = [];
items.forEach((item, index) => {
    itemList.push(<Text key={index}>{item}</Text>)
})

export default function HomeScreen() {
    return (
        <>
            <ScrollView>
                {itemList}
            </ScrollView>

        </>
    )
}