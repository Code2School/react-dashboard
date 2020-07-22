import React from 'react';

// Libs

// Utils
import ciscoAvatar from '../../../../assets/ciscoRamon-avatar.jpg';
import caitlinAvatar from '../../../../assets/caitlinSnow-avatar.jpg';
import ryanAvatar from '../../../../assets/ryanGosling-avatar.jpg';

// Components
import NotificationList from '../../../Notifications/components/NotificationList/NotificationList';
import Widget from '../../../../shared/components/molecules.Widget/Widget';

const NotificationsCard = () => {
    const notifications = [
        {
            avatar: ciscoAvatar,
            label: {
                color: 'teal',
                name: 'New User'
            },
            metadata: 'Cisco Ramon as Approver',
            description: 'New Registration: Approved by Cisco Ramon',
            creationDate: '24 Nov 2019 at 9:30 AM',
            unread: true
        },
        {
            avatar: caitlinAvatar,
            label: {
                color: 'orange',
                name: 'Message'
            },
            metadata: 'Caitlin Snow sent new message',
            description: 'Hi Barry, please inform me when it done',
            creationDate: '15 Nov 2019 at 8:44 AM',
            unread: false
        },
        {
            avatar: ryanAvatar,
            label: {
                color: 'blue',
                name: 'Connect'
            },
            metadata: 'Ryan Gosling connect with you',
            description: 'Nice to meet you, hope we can be a good team.',
            creationDate: '15 Nov 2019 at 7:01 AM',
            unread: false
        },
        {
            avatar: caitlinAvatar,
            label: {
                color: 'blue',
                name: 'Connect'
            },
            metadata: 'Caitlin Snow connect with you',
            description: 'Hi Barry, nice to connect with you.',
            creationDate: '11 Nov 2019 at 6:30 PM',
            unread: true
        },
        {
            avatar: ciscoAvatar,
            label: {
                color: 'violet',
                name: 'Comment'
            },
            metadata: 'Cisco Ramon commented on a post',
            description: 'This post should have more details',
            creationDate: '3 Aug 2019 at 4:23 PM',
            unread: true
        },
    ]
    return (
        <Widget>
            <Widget.Header>Notifications</Widget.Header>
            <Widget.Content>
                <NotificationList notifications={notifications} limit={3} />
            </Widget.Content>
        </Widget>
    );
}

export default NotificationsCard;
