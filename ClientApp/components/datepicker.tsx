import * as React from 'react';


interface DatepickerProps{

}

interface DatepickerState{

}

export class Datepicker extends React.Component<DatepickerProps,DatepickerState>{
  
public render()
{
 return(<div>   
    <div className="c-date-time-picker" data-date-time-picker="date">
        <button data-date-time-picker="month" data-formatter-aria-label="Month: {0}" aria-label="Month: March" data-active-value="March" >March</button>
        <button data-date-time-picker="day" data-formatter-aria-label="Day: {0}" aria-label="Day: 11" data-active-value="11">11</button>
        <button data-date-time-picker="year" data-formatter-aria-label="Year: {0}" aria-label="Year: 2016" data-active-value="2016">2016</button>
        <div data-date-time-picker="date-selector" aria-hidden="true">
            <div data-date-time-picker="month">
                <button aria-label="Scroll Up"></button>
                <ul role="listbox" aria-label="Months" data-months="January,February,March,April,May,June,July,August,September,October,November,December">
                    <li role="option" aria-selected="false">October</li>
                    <li role="option" aria-selected="false">November</li>
                    <li role="option" className="f-js-last" aria-selected="false">December</li>
                    <li role="option" aria-selected="false">January</li>
                    <li role="option" aria-selected="false">February</li>
                    <li role="option" aria-selected="true">March</li>
                    <li role="option" aria-selected="false">April</li>
                    <li role="option" aria-selected="false">May</li>
                    <li role="option" aria-selected="false">June</li>
                    <li role="option" aria-selected="false">July</li>
                    <li role="option" aria-selected="false">August</li>
                </ul>
                <button aria-label="Scroll Down"></button>
            </div>
            <div data-date-time-picker="day">
                <button aria-label="Scroll Up"></button>
                <ul aria-label="Day" role="listbox"></ul>
                <button aria-label="Scroll Down"></button>
            </div>
            <div data-date-time-picker="year">
                <button aria-label="Scroll Up"></button>
                <ul aria-label="Year" role="listbox"></ul>
                <button aria-label="Scroll Down"></button>
            </div>
            <span></span>
            <button data-date-time-picker="apply" className="c-glyph glyph-accept" aria-label="Apply" title="Apply"></button>
            <button data-date-time-picker="cancel" className="c-glyph glyph-cancel" aria-label="Cancel" title="Cancel"></button>
        </div>
    </div>

 </div>);
}
}