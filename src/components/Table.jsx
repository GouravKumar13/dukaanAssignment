import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Order ID',
        selector: row => row.orderId,
        sortable: true,
    },
    {
        name: 'Order date',
        selector: row => row.orderData,
        sortable: true,
    },
    {
        name: 'Order amount',
        selector: row => row.orderAmount,
        sortable: true,
    },
    {
        name: 'Transaction fee',
        selector: row => row.transctionFees,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },
    {
        id: 1,
        orderId: "#281209",
        orderData: "7 july 2023",
        orderAmount: "1,278.23",
        transctionFees: "22",
    },

]

export function Table () {

    return (
        <>

            <DataTable



                columns={ columns }
                data={ data }

            />

        </>
    );
};