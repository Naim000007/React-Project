import React, { useState } from 'react'
import orderCover from '../../../src/assets/shop/banner2.jpg'
import Cover from '../Shared/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../Components/FoodCard/FoodCard';
import OrderTab from './OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Cover img={orderCover} title={"Order Food"} />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Slad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Deessert</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel> <OrderTab items={desserts} /> </TabPanel>
                <TabPanel> <OrderTab items={pizza} /></TabPanel>
                <TabPanel> <OrderTab items={soup} /> </TabPanel>
                <TabPanel> <OrderTab items={offered} /> </TabPanel>
            </Tabs>
        </div>

    )
}

export default Order