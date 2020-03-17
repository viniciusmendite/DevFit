import React from 'react';
import {
    TabBarArea,
    TabBarItem,
    TabRegular,
    TabRegularImage,
    TabRegularText,
    TabBall,
    TabBallImage
} from './style';

export default (props) => {

    return (
        <TabBarArea>
            {props.items.map(item => (
                <TabBarItem key={item.routes}>
                    {item.type == 'regular' &&
                        <TabRegular underlayColor='transparent' onPress={()=>props.navigation.navigate(item.routes)}>
                            <>
                                <TabRegularImage source={item.icon} />
                                <TabRegularText>{item.text}</TabRegularText>
                            </>
                        </TabRegular>
                    }

                    {item.type == 'big' &&
                        <TabBall underlayColor='#4AC34E' onPress={()=>props.navigation.navigate(item.routes)}>
                            <TabBallImage source={item.icon} />
                        </TabBall>
                    }
                </TabBarItem>
            ))}
        </TabBarArea>
    );
}