import React from 'react';

// Libs
import { Divider, Item, Label } from 'semantic-ui-react';
import cx from 'classnames';

// Utils
import classes from './NotificationList.module.less';

// Components
import Avatar from '../../../../shared/components/atom.Avatar/Avatar';


const NotificationList = ({ notifications }) => (
    <Item.Group as={'article'}>
        {
            notifications.length > 0 &&
            notifications
                .map((
                    {
                        avatar,
                        label,
                        description,
                        metadata,
                        creationDate,
                        unread
                    },
                    index
                ) => (
                    <Item.Group
                        key={index}
                        className={cx({ [classes.unread]: unread })}
                        style={{
                            margin: '0 -1rem'
                        }}
                        relaxed>
                        <Item
                            as={'section'}
                            style={{
                                padding: '1rem',
                                margin: 0
                            }}>
                            <Item.Image size='tiny'>
                                <Avatar image={avatar}/>

                            </Item.Image>

                            <Item.Content>
                                <p>
                                    <Label as='a' color={label.color}>
                                        {label.name}
                                    </Label>
                                </p>
                                <Item.Meta>{metadata}</Item.Meta>
                                <Item.Description>
                                    {description}
                                </Item.Description>
                            </Item.Content>
                            <Item.Content>
                                <Item.Extra className={classes.creationDate}>
                                    <span>{creationDate}</span>
                                    {
                                        unread &&
                                        <Label circular color={'blue'} empty/>
                                    }
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                        {
                            index < notifications.length - 1 &&
                            <Divider fitted/>
                        }
                    </Item.Group>
                ))
        }
    </Item.Group>

);

export default NotificationList;
