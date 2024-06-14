const paths = require('./app1LogPaths');

module.exports = points = [
    {
        id: 'POM02M',
        area: 'POM',
        path: paths.find(path => path.area === 'POM').path,
        IO: [
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Right',
                slot: 2,
                channel: 2,
                key: '0.2',
                on: 'Detected Right',
                off: 'Not Detected Right',
                relay: 'IP-R2',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Left',
                slot: 2,
                channel: 3,
                key: '0.3',
                on: 'Dectected Left',
                off: 'Not Detected Left',
                relay: 'IP-R3',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Point Locked',
                slot: 2,
                channel: 4,
                key: '0.4',
                on: 'Locked',
                off: 'Free',
                relay: 'IP-R4*',
                relayType: 'DPDT'
            }
        ]
    },
    {
        id: 'IRK02M',
        area: 'IRK',
        path: paths.find(path => path.area === 'IRK').path,
        IO: [
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Right',
                slot: 2,
                channel: 2,
                key: '0.2',
                on: 'Detected Right',
                off: 'Not Detected Right',
                relay: 'IP-R2',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Left',
                slot: 2,
                channel: 3,
                key: '0.3',
                on: 'Detected Left',
                off: 'Not Detected Left',
                relay: 'IP-R3',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Point Locked',
                slot: 2,
                channel: 4,
                key: '0.4',
                on: 'Locked',
                off: 'Free',
                relay: 'IP-R4',
                relayType: 'DPDT'
            }
        ]
    },
    {
        id: 'IRK09M',
        area: 'IRK',
        path: paths.find(path => path.area === 'IRK').path,
        IO: [
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Right',
                slot: 2,
                channel: 5,
                key: '0.5',
                on: 'Detected Right',
                off: 'Not Detected Right',
                relay: 'IP-R5',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Left',
                slot: 2,
                channel: 6,
                key: '0.6',
                on: 'Detected Left',
                off: 'Not Detected Left',
                relay: 'IP-R6',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Point Locked',
                slot: 2,
                channel: 7,
                key: '0.7',
                on: 'Locked',
                off: 'Free',
                relay: 'IP-R7',
                relayType: 'DPDT'
            }
        ]
    },
    {
        id: 'NIS03M',
        area: 'NIS',
        path: paths.find(path => path.area === 'NIS').path,
        IO: [
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Right',
                slot: 2,
                channel: 2,
                key: '0.2',
                on: 'Detected Right',
                off: 'Not Detected Right',
                relay: 'IP-R2',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Left',
                slot: 2,
                channel: 3,
                key: '0.3',
                on: 'Detected Left',
                off: 'Not Detected Left',
                relay: 'IP-R3',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Point Locked',
                slot: 2,
                channel: 4,
                key: '0.4',
                on: 'Locked',
                off: 'Free',
                relay: 'IP-R4',
                relayType: 'DPDT'
            }
        ]
    },
    {
        id: 'CNK02M',
        area: 'CNK',
        path: paths.find(path => path.area === 'CNK').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 0,
                    key: '1.0',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R32',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 1,
                    key: '1.1',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R33',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 2,
                    key: '1.2',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R34',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'CNK04M',
        area: 'CNK',
        path: paths.find(path => path.area === 'CNK').path,
        IO: [
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Right',
                slot: 2,
                channel: 2,
                key: '0.2',
                on: 'Detected Right',
                off: 'Not Detected Right',
                relay: 'IP-R2',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Left',
                slot: 2,
                channel: 3,
                key: '0.3',
                on: 'Detected Left',
                off: 'Not Detected Left',
                relay: 'IP-R3',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Point Locked',
                slot: 2,
                channel: 4,
                key: '0.4',
                on: 'Locked',
                off: 'Free',
                relay: 'IP-R4',
                relayType: 'DPDT'
            }
        ]
    },
    {
        id: 'CNK07M',
        area: 'CNK',
        path: paths.find(path => path.area === 'CNK').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 11,
                    key: '1.11',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R43',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 12,
                    key: '1.12',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R44',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 13,
                    key: '1.13',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R45',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'CNK10M',
        area: 'CNK',
        path: paths.find(path => path.area === 'CNK').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 14,
                    key: '1.14',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R46',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 15,
                    key: '1.15',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R47',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 16,
                    key: '1.16',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R48',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'CNK17M',
        area: 'CNK',
        path: paths.find(path => path.area === 'CNK').path,
        IO: [
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Right',
                slot: 2,
                channel: 5,
                key: '0.5',
                on: 'Detected Right',
                off: 'Not Detected Right',
                relay: 'IP-R5',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Points Set Left',
                slot: 2,
                channel: 6,
                key: '0.6',
                on: 'Detected Left',
                off: 'Not Detected Left',
                relay: 'IP-R6',
                relayType: 'DPDT'
            },
            {
                system: 'lc',
                ioType: 'input',
                signal: 'Point Locked',
                slot: 2,
                channel: 7,
                key: '0.7',
                on: 'Locked',
                off: 'Free',
                relay: 'IP-R7',
                relayType: 'DPDT'
            }
        ]
    },
    {
        id: 'CNK21M',
        area: 'CNK',
        path: paths.find(path => path.area === 'CNK').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'TFB03M',
        area: 'TFB',
        path: paths.find(path => path.area === 'TFB').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'TB1-31',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'TFB05M',
        area: 'TFB',
        path: paths.find(path => path.area === 'TFB').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 0,
                    key: '1.0',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R32',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 1,
                    key: '1.1',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R33',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 2,
                    key: '1.2',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'TB1-33',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'TFB06M',
        area: 'TFB',
        path: paths.find(path => path.area === 'TFB').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 3,
                    key: '1.3',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R35',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 4,
                    key: '1.4',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R36',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 5,
                    key: '1.5',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'TB1-35',
                    relayType: 'DPDT'
                }
         ]
    },
    {
        id: 'AIR08M',
        area: 'AIR',
        path: paths.find(path => path.area === 'AIR').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'ASH05M',
        area: 'ASH',
        path: paths.find(path => path.area === 'ASH').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'BDW02M',
        area: 'BDW',
        path: paths.find(path => path.area === 'BDW').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'BDW08M',
        area: 'BDW',
        path: paths.find(path => path.area === 'BDW').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'BRY04M',
        area: 'BRY',
        path: paths.find(path => path.area === 'BRY').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'BRY05M',
        area: 'BRY',
        path: paths.find(path => path.area === 'BRY').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'BRY07M',
        area: 'BRY',
        path: paths.find(path => path.area === 'BRY').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'BRY08M',
        area: 'BRY',
        path: paths.find(path => path.area === 'BRY').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 11,
                    key: '0.11',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R11',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 12,
                    key: '0.12',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R12',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 13,
                    key: '0.13',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R13',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'DCF02M',
        area: 'DCF',
        path: paths.find(path => path.area === 'DCF').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'DCF14M',
        area: 'DCF',
        path: paths.find(path => path.area === 'DCF').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 0,
                    key: '1.0',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R32',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 1,
                    key: '1.1',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R33',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 3,
                    key: '1.2',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R34',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'EDD02M',
        area: 'EDD',
        path: paths.find(path => path.area === 'EDD').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'EDD03M',
        area: 'EDD',
        path: paths.find(path => path.area === 'EDD').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'FIR10M',
        area: 'FIR',
        path: paths.find(path => path.area === 'FIR').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'FIR11M',
        area: 'FIR',
        path: paths.find(path => path.area === 'FIR').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'HBC04M',
        area: 'HBC',
        path: paths.find(path => path.area === 'HBC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'MEC03M',
        area: 'MEC',
        path: paths.find(path => path.area === 'MEC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'MEC08M',
        area: 'MEC',
        path: paths.find(path => path.area === 'MEC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'MKT05M',
        area: 'MKT',
        path: paths.find(path => path.area === 'MEC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'MKT09M',
        area: 'MKT',
        path: paths.find(path => path.area === 'MEC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'MKT16M',
        area: 'MKT',
        path: paths.find(path => path.area === 'MKT').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'MON02M',
        area: 'MON',
        path: paths.find(path => path.area === 'MON').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'MON03M',
        area: 'MON',
        path: paths.find(path => path.area === 'MON').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'MON13M',
        area: 'MON',
        path: paths.find(path => path.area === 'MON').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'NEB06M',
        area: 'NEB',
        path: paths.find(path => path.area === 'NEB').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'NHM03M',
        area: 'NHM',
        path: paths.find(path => path.area === 'NHM').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'NHM09M',
        area: 'NHM',
        path: paths.find(path => path.area === 'NHM').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 0,
                    key: '1.0',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R32',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 1,
                    key: '1.1',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R33',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 2,
                    key: '1.2',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R34',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'OLD02M',
        area: 'OLD',
        path: paths.find(path => path.area === 'OLD').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'OLD03M',
        area: 'OLD',
        path: paths.find(path => path.area === 'OLD').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'OLD11M',
        area: 'OLD',
        path: paths.find(path => path.area === 'OLD').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                },
        ]
    },
    {
        id: 'PIC07M',
        area: 'PIC',
        path: paths.find(path => path.area === 'PIC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'PIC11M',
        area: 'PIC',
        path: paths.find(path => path.area === 'PIC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'QNS02M',
        area: 'QNS',
        path: paths.find(path => path.area === 'QNS').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'QNS17M',
        area: 'QNS',
        path: paths.find(path => path.area === 'QNS').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'QNS18M',
        area: 'QNS',
        path: paths.find(path => path.area === 'QNS').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'QNS19M',
        area: 'QNS',
        path: paths.find(path => path.area === 'QNS').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 11,
                    key: '0.11',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R11',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 12,
                    key: '0.12',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R12',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 13,
                    key: '0.13',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R13',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'ROC03M',
        area: 'ROC',
        path: paths.find(path => path.area === 'ROC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'RTC14M',
        area: 'RTC',
        path: paths.find(path => path.area === 'RTC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'SHC02M',
        area: 'SHC',
        path: paths.find(path => path.area === 'SHC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'SPS33M',
        area: 'SPS',
        path: paths.find(path => path.area === 'SPS').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'SWR06M',
        area: 'SWR',
        path: paths.find(path => path.area === 'SWR').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 11,
                    key: '0.11',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R11',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 12,
                    key: '0.12',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R12',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 13,
                    key: '0.13',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R13',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'SWR08M',
        area: 'SWR',
        path: paths.find(path => path.area === 'SWR').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 14,
                    key: '0.14',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R14',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 15,
                    key: '0.15',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R15',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 16,
                    key: '0.16',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R16',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'TMP03M',
        area: 'TMP',
        path: paths.find(path => path.area === 'TMP').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'TMP05M',
        area: 'TMP',
        path: paths.find(path => path.area === 'TMP').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'TMP08M',
        area: 'TMP',
        path: paths.find(path => path.area === 'TMP').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                }
        ]
    },
    {
        id: 'TRC04M',
        area: 'TRC',
        path: paths.find(path => path.area === 'TRC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VEL03M',
        area: 'VEL',
        path: paths.find(path => path.area === 'VEL').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VIC15M',
        area: 'VIC',
        path: paths.find(path => path.area === 'VIC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VIC11M',
        area: 'VIC',
        path: paths.find(path => path.area === 'VIC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 0,
                    key: '1.0',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R32',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 1,
                    key: '1.1',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R33',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 2,
                    key: '1.2',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R34',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VIC28M',
        area: 'VIC',
        path: paths.find(path => path.area === 'VIC').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 3,
                    key: '1.3',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R35',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 4,
                    key: '1.4',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R36',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 5,
                    key: '1.5',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R37',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VIM02M',
        area: 'VIM',
        path: paths.find(path => path.area === 'VIM').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VIM03M',
        area: 'VIM',
        path: paths.find(path => path.area === 'VIM').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VIM04M',
        area: 'VIM',
        path: paths.find(path => path.area === 'VIM').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 8,
                    key: '0.8',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R8',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 9,
                    key: '0.9',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R9',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 10,
                    key: '0.10',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R10',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VIM13M',
        area: 'VIM',
        path: paths.find(path => path.area === 'VIM').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 11,
                    key: '0.11',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R11',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 12,
                    key: '0.12',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R12',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 13,
                    key: '0.13',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R13',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'VIM05M',
        area: 'VIM',
        path: paths.find(path => path.area === 'VIM').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 3,
                    channel: 0,
                    key: '1.0',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R32',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 3,
                    channel: 1,
                    key: '1.1',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R33',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 3,
                    channel: 2,
                    key: '1.2',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R34',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'WFD04M',
        area: 'WFD',
        path: paths.find(path => path.area === 'WFD').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 2,
                    key: '0.2',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R2',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 3,
                    key: '0.3',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R3',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 4,
                    key: '0.4',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R4',
                    relayType: 'DPDT'
                }
            ]
    },
    {
        id: 'WFD06M',
        area: 'WFD',
        path: paths.find(path => path.area === 'WFD').path,
        IO: [
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Right',
                    slot: 2,
                    channel: 5,
                    key: '0.5',
                    on: 'Detected Right',
                    off: 'Not Detected Right',
                    relay: 'IP-R5',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Points Set Left',
                    slot: 2,
                    channel: 6,
                    key: '0.6',
                    on: 'Detected Left',
                    off: 'Not Detected Left',
                    relay: 'IP-R6',
                    relayType: 'DPDT'
                },
                {
                    system: 'lc',
                    ioType: 'input',
                    signal: 'Point Locked',
                    slot: 2,
                    channel: 7,
                    key: '0.7',
                    on: 'Locked',
                    off: 'Free',
                    relay: 'IP-R7',
                    relayType: 'DPDT'
                }
            ]
    }
]