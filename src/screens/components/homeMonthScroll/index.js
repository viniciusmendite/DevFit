import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';

import {
    MonthScroll,
    MonthButton,
    MonthItem,
    MonthText
} from './style';

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const screenWidth = Math.round(Dimensions.get('window').width);
let thirdW = screenWidth / 3;

export default (props) => {

    const MonthRef = useRef();

    const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

    const handleScrollEnd = (event) => {
        let posX = event.nativeEvent.contentOffset.x;
        let targetMonth = Math.round(posX / thirdW);
        setSelectedMonth(targetMonth);
    }

    const scrollToMonth = (m) => {
        let posX = m * thirdW;
        MonthRef.current.scrollTo({ x: posX, y: 0, animated: true });
    }

    useEffect(() => {
        setTimeout(() => {
            scrollToMonth(selectedMonth);
        }, 10);
    }, [props.selectedMonth]);

    useEffect(() => {
        props.setSelectedMonth(selectedMonth);
    }, [selectedMonth]);

    return (
        <MonthScroll
            ref={MonthRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate='fast'
            snapToInterval={thirdW}
            contentContainerStyle={{ paddingLeft: thirdW, paddingRight: thirdW }}
            onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((m, k) => (
                <MonthButton key={k} width={thirdW} underlayColor='transparent' onPress={() => setSelectedMonth(k)}>
                    <MonthItem style={k == selectedMonth ? {
                        backgroundColor: '#CCC',
                        width: '100%',
                        height: 40
                    } : {}}>
                        <MonthText>{m}</MonthText>
                    </MonthItem>
                </MonthButton>
            ))}
        </MonthScroll>
    );
}