export const database = {
    profiles: [
        {
            id: "1",
            firstname: "Даниил",
            phoneNumber: "+7 (222) 222-22-22",
            email: "test",
            address: "ул. Большая Морская",
            password: "test",
            cart: {
                9: "2",
                13: "2",
            },
            orders: [
                {
                    date: "12 Декабря 2023 12:34",
                    id: "№ sankt-peterburg-1-420802329-i-151с",
                    dishes: {
                        1: "2",
                        3: "3",
                    },
                },
                {
                    date: "12 Декабря 2023 12:34",
                    id: "№ sankt-peterburg-2-740825329-i-976e",
                    dishes: {
                        4: "1",
                        7: "4",
                    },
                },
            ],
        },
        {
            id: "2",
            firstname: "Sergei",
            phoneNumber: "+7 (222) 222-22-22",
            email: "test2",
            address: "ул. Большая Морская 18, 2",
            password: "test2",
            cart: {
                1: "2",
            },
            orders: [
                {
                    date: "12 Декабря 2023 12:34",
                    id: "№ sankt-peterburg-3-420802019-i-151с",
                    dishes: {
                        7: "2",
                        3: "3",
                        11: "5",
                    },
                },
                {
                    date: "12 Декабря 2023 12:34",
                    id: "№ sankt-peterburg-2-420825329-i-976e",
                    dishes: {
                        4: "1",
                        7: "2",
                        14: "1",
                    },
                },
                {
                    date: "12 Декабря 2023 12:34",
                    id: "№ sankt-peterburg-2-420725329-i-976e",
                    dishes: {
                        2: "1",
                        7: "2",
                        16: "1",
                        5: "1",
                    },
                },
            ],
        },
        {
            id: "3",
            firstname: "Masha",
            phoneNumber: "+7 (222) 222-22-22",
            email: "333@gmail.com",
            address: "ул. Большая Морская 18, 3",
            password: "333333",
            cart: {},
            orders: [
                {
                    date: "12 Декабря 2023 12:34",
                    id: "№ sankt-peterburg-2-420802329-i-151с",
                    dishes: {
                        1: "2",
                        3: "3",
                    },
                },
                {
                    date: "12 Декабря 2023 12:34",
                    id: "№ sankt-peterburg-2-420825329-i-976e",
                    dishes: {
                        4: "1",
                        7: "4",
                    },
                },
            ],
        },
    ],
};
