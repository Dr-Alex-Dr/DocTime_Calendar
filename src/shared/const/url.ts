
//export const baseUrl = "https://scheduler.64v.ru/api/v1";
export const baseUrl = "http://localhost:8010/proxy/api/v1";
//export const baseUrl = "https://redrock.mycum.ru/api/v1";

export const cabinets: any = [
    {
        id: '1',
        number: '102',
        description: ''
    },
    {
        id: '1',
        number: '103',
        description: ''
    },
    {
        id: '1',
        number: '104',
        description: ''
    }
]


export const dataIntervals: any = [
    // Day 1
    {
        start: "2024-06-04T09:00:00Z",
        end: "2024-06-04T10:00:00Z",
        doctor: {
            id: "doc1",
            first_name: "Ivan",
            last_name: "Ivanov",
            father_name: "Ivanovich",
            priority_cabinet: "cab1",
            cabinet: {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            }
        ]
    },
    {
        start: "2024-06-04T10:00:00Z",
        end: "2024-06-04T11:00:00Z",
        doctor: {
            id: "doc2",
            first_name: "Sergey",
            last_name: "Petrov",
            father_name: "Sergeevich",
            priority_cabinet: "cab2",
            cabinet: {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        ]
    },
    {
        start: "2024-06-04T11:00:00Z",
        end: "2024-06-04T12:00:00Z",
        doctor: {
            id: "doc3",
            first_name: "Anna",
            last_name: "Sidorova",
            father_name: "Alexandrovna",
            priority_cabinet: "cab3",
            cabinet: {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        },
        cabinets: [
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        ]
    },
    {
        start: "2024-06-04T12:00:00Z",
        end: "2024-06-04T13:00:00Z",
        doctor: {
            id: "doc4",
            first_name: "Olga",
            last_name: "Nikolaeva",
            father_name: "Petrovna",
            priority_cabinet: "cab1",
            cabinet: {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            },
            {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            }
        ]
    },
    // Day 2
    {
        start: "2024-06-05T09:00:00Z",
        end: "2024-06-05T10:00:00Z",
        doctor: {
            id: "doc5",
            first_name: "Dmitry",
            last_name: "Kuznetsov",
            father_name: "Ivanovich",
            priority_cabinet: "cab5",
            cabinet: {
                id: "cab5",
                number: "105",
                description: "Oncology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab5",
                number: "105",
                description: "Oncology Room"
            }
        ]
    },
    {
        start: "2024-06-05T10:00:00Z",
        end: "2024-06-05T11:00:00Z",
        doctor: {
            id: "doc6",
            first_name: "Natalia",
            last_name: "Smirnova",
            father_name: "Sergeevna",
            priority_cabinet: "cab6",
            cabinet: {
                id: "cab6",
                number: "106",
                description: "Pediatrics Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab6",
                number: "106",
                description: "Pediatrics Room"
            }
        ]
    },
    {
        start: "2024-06-05T11:00:00Z",
        end: "2024-06-05T12:00:00Z",
        doctor: {
            id: "doc7",
            first_name: "Mikhail",
            last_name: "Vasiliev",
            father_name: "Petrovich",
            priority_cabinet: "cab7",
            cabinet: {
                id: "cab7",
                number: "107",
                description: "Ophthalmology Room"
            }
        },
        cabinets: [
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            },
            {
                id: "cab7",
                number: "107",
                description: "Ophthalmology Room"
            }
        ]
    },
    {
        start: "2024-06-05T12:00:00Z",
        end: "2024-06-05T13:00:00Z",
        doctor: {
            id: "doc8",
            first_name: "Elena",
            last_name: "Sokolova",
            father_name: "Vladimirovna",
            priority_cabinet: "cab8",
            cabinet: {
                id: "cab8",
                number: "108",
                description: "Endocrinology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            },
            {
                id: "cab8",
                number: "108",
                description: "Endocrinology Room"
            }
        ]
    },
    // Day 3
    {
        start: "2024-06-06T09:00:00Z",
        end: "2024-06-06T10:00:00Z",
        doctor: {
            id: "doc9",
            first_name: "Pavel",
            last_name: "Morozov",
            father_name: "Dmitrievich",
            priority_cabinet: "cab1",
            cabinet: {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            }
        ]
    },
    {
        start: "2024-06-06T10:00:00Z",
        end: "2024-06-06T11:00:00Z",
        doctor: {
            id: "doc10",
            first_name: "Tatiana",
            last_name: "Orlova",
            father_name: "Ivanovna",
            priority_cabinet: "cab2",
            cabinet: {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        ]
    },
    {
        start: "2024-06-06T11:00:00Z",
        end: "2024-06-06T12:00:00Z",
        doctor: {
            id: "doc11",
            first_name: "Nikolay",
            last_name: "Popov",
            father_name: "Alexeevich",
            priority_cabinet: "cab3",
            cabinet: {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        },
        cabinets: [
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        ]
    },
    {
        start: "2024-06-06T12:00:00Z",
        end: "2024-06-06T13:00:00Z",
        doctor: {
            id: "doc12",
            first_name: "Irina",
            last_name: "Voronova",
            father_name: "Igorevna",
            priority_cabinet: "cab4",
            cabinet: {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            },
            {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            }
        ]
    },
    // Day 4
    {
        start: "2024-06-07T09:00:00Z",
        end: "2024-06-07T10:00:00Z",
        doctor: {
            id: "doc13",
            first_name: "Artem",
            last_name: "Lebedev",
            father_name: "Pavlovich",
            priority_cabinet: "cab5",
            cabinet: {
                id: "cab5",
                number: "105",
                description: "Oncology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab5",
                number: "105",
                description: "Oncology Room"
            }
        ]
    },
    {
        start: "2024-06-07T10:00:00Z",
        end: "2024-06-07T11:00:00Z",
        doctor: {
            id: "doc14",
            first_name: "Yulia",
            last_name: "Stepanova",
            father_name: "Ivanovna",
            priority_cabinet: "cab6",
            cabinet: {
                id: "cab6",
                number: "106",
                description: "Pediatrics Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab6",
                number: "106",
                description: "Pediatrics Room"
            }
        ]
    },
    {
        start: "2024-06-07T11:00:00Z",
        end: "2024-06-07T12:00:00Z",
        doctor: {
            id: "doc15",
            first_name: "Alexey",
            last_name: "Gavrilov",
            father_name: "Viktorovich",
            priority_cabinet: "cab7",
            cabinet: {
                id: "cab7",
                number: "107",
                description: "Ophthalmology Room"
            }
        },
        cabinets: [
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            },
            {
                id: "cab7",
                number: "107",
                description: "Ophthalmology Room"
            }
        ]
    },
    {
        start: "2024-06-07T12:00:00Z",
        end: "2024-06-07T13:00:00Z",
        doctor: {
            id: "doc16",
            first_name: "Maria",
            last_name: "Zaitseva",
            father_name: "Nikolaevna",
            priority_cabinet: "cab8",
            cabinet: {
                id: "cab8",
                number: "108",
                description: "Endocrinology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            },
            {
                id: "cab8",
                number: "108",
                description: "Endocrinology Room"
            }
        ]
    },
    // Day 5
    {
        start: "2024-06-08T09:00:00Z",
        end: "2024-06-08T10:00:00Z",
        doctor: {
            id: "doc17",
            first_name: "Vladimir",
            last_name: "Mikhailov",
            father_name: "Sergeevich",
            priority_cabinet: "cab1",
            cabinet: {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            }
        ]
    },
    {
        start: "2024-06-08T10:00:00Z",
        end: "2024-06-08T11:00:00Z",
        doctor: {
            id: "doc18",
            first_name: "Svetlana",
            last_name: "Semenova",
            father_name: "Andreevna",
            priority_cabinet: "cab2",
            cabinet: {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        ]
    },
    {
        start: "2024-06-08T11:00:00Z",
        end: "2024-06-08T12:00:00Z",
        doctor: {
            id: "doc19",
            first_name: "Andrey",
            last_name: "Kovalev",
            father_name: "Igorevich",
            priority_cabinet: "cab3",
            cabinet: {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        },
        cabinets: [
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        ]
    },
    {
        start: "2024-06-08T12:00:00Z",
        end: "2024-06-08T13:00:00Z",
        doctor: {
            id: "doc20",
            first_name: "Valentina",
            last_name: "Chernov",
            father_name: "Romanovna",
            priority_cabinet: "cab4",
            cabinet: {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            },
            {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            }
        ]
    },
    // Day 6
    {
        start: "2024-06-09T09:00:00Z",
        end: "2024-06-09T10:00:00Z",
        doctor: {
            id: "doc21",
            first_name: "Kirill",
            last_name: "Gusev",
            father_name: "Yurievich",
            priority_cabinet: "cab5",
            cabinet: {
                id: "cab5",
                number: "105",
                description: "Oncology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab5",
                number: "105",
                description: "Oncology Room"
            }
        ]
    },
    {
        start: "2024-06-09T10:00:00Z",
        end: "2024-06-09T11:00:00Z",
        doctor: {
            id: "doc22",
            first_name: "Galina",
            last_name: "Ryzhova",
            father_name: "Petrovna",
            priority_cabinet: "cab6",
            cabinet: {
                id: "cab6",
                number: "106",
                description: "Pediatrics Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab6",
                number: "106",
                description: "Pediatrics Room"
            }
        ]
    },
    {
        start: "2024-06-09T11:00:00Z",
        end: "2024-06-09T12:00:00Z",
        doctor: {
            id: "doc23",
            first_name: "Roman",
            last_name: "Belyaev",
            father_name: "Dmitrievich",
            priority_cabinet: "cab7",
            cabinet: {
                id: "cab7",
                number: "107",
                description: "Ophthalmology Room"
            }
        },
        cabinets: [
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            },
            {
                id: "cab7",
                number: "107",
                description: "Ophthalmology Room"
            }
        ]
    },
    {
        start: "2024-06-09T12:00:00Z",
        end: "2024-06-09T13:00:00Z",
        doctor: {
            id: "doc24",
            first_name: "Ekaterina",
            last_name: "Grigorieva",
            father_name: "Mikhailovna",
            priority_cabinet: "cab8",
            cabinet: {
                id: "cab8",
                number: "108",
                description: "Endocrinology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            },
            {
                id: "cab8",
                number: "108",
                description: "Endocrinology Room"
            }
        ]
    },
    // Day 7
    {
        start: "2024-06-10T09:00:00Z",
        end: "2024-06-10T10:00:00Z",
        doctor: {
            id: "doc25",
            first_name: "Oleg",
            last_name: "Fedorov",
            father_name: "Ivanovich",
            priority_cabinet: "cab1",
            cabinet: {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            }
        ]
    },
    {
        start: "2024-06-10T10:00:00Z",
        end: "2024-06-10T11:00:00Z",
        doctor: {
            id: "doc26",
            first_name: "Lyudmila",
            last_name: "Belova",
            father_name: "Mikhailovna",
            priority_cabinet: "cab2",
            cabinet: {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        ]
    },
    {
        start: "2024-06-10T11:00:00Z",
        end: "2024-06-10T12:00:00Z",
        doctor: {
            id: "doc27",
            first_name: "Yaroslav",
            last_name: "Ulyanov",
            father_name: "Igorevich",
            priority_cabinet: "cab3",
            cabinet: {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        },
        cabinets: [
            {
                id: "cab2",
                number: "102",
                description: "Cardiology Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            }
        ]
    },
    {
        start: "2024-06-10T12:00:00Z",
        end: "2024-06-10T13:00:00Z",
        doctor: {
            id: "doc28",
            first_name: "Anastasia",
            last_name: "Efimova",
            father_name: "Petrovna",
            priority_cabinet: "cab4",
            cabinet: {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            }
        },
        cabinets: [
            {
                id: "cab1",
                number: "101",
                description: "Therapy Room"
            },
            {
                id: "cab3",
                number: "103",
                description: "Dermatology Room"
            },
            {
                id: "cab4",
                number: "104",
                description: "Neurology Room"
            }
        ]
    }
];

