import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'IWR',
        path: '/iwr',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Screening',
                path: '/iwr/screening',
                icon: <FaIcons.FaNotesMedical />,
            },
            {
                title: 'Screen Failure',
                path: '/iwr/screen-failure',
                icon: <MdIcons.MdSmsFailed />,
            },
            {
                title: 'Rescreening',
                path: '/iwr/rescreening',
                icon: <FaIcons.FaNotesMedical />,
            },
            {
                title: 'Enrollment',
                path: '/iwr/enrollment',
                icon: <BiIcons.BiPlusMedical />,
            },
            {
                title: 'Patient Visit',
                path: '/iwr/patient-visit',
                icon: <FaIcons.FaFileMedicalAlt />,
            },            
            {
                title: 'Discontinuation',
                path: '/iwr/discontinuation',
                icon: <TbIcons.TbMedicalCrossOff />,
            },
            {
                title: 'Completion',
                path: '/iwr/completion',
                icon: <MdIcons.MdIncompleteCircle />,
            },
            {
                title: 'Receive Shipments',
                path: '/iwr/receive-shipments',
                icon: <MdIcons.MdCallReceived />,
            },
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    }
];