const paths = require('./app1LogPaths');

module.exports = points = [
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
    }
]