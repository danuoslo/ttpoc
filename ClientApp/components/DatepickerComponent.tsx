import * as React from 'react';
import { DatePicker, IDatePickerStrings, IDatePickerProps } from 'office-ui-fabric-react/lib/DatePicker';

export class DatepickerComponent extends React.Component<IDatePickerProps, void> {
    private DayPickerStrings: IDatePickerStrings = {
        months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ],
        shortMonths: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        days: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        shortDays: [
            'S',
            'M',
            'T',
            'W',
            'T',
            'F',
            'S'
        ],
        goToToday: 'Go to today',
        prevMonthAriaLabel: 'Go to previous month',
        nextMonthAriaLabel: 'Go to next month',
        prevYearAriaLabel: 'Go to previous year',
        nextYearAriaLabel: 'Go to next year'
    }

    constructor()
    {
        super();
        //this.props.strings = this.DayPickerStrings;
    }

    public render() {
        return <DatePicker {...this.props} strings={this.DayPickerStrings} isMonthPickerVisible={false} />
    }
}