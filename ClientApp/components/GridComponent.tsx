import * as React from 'react';

export enum GridControlType {
    Text,
    Dropdown,
    MarkDownText
}

export class GridColumn {
    header: string;
    delegate : Function;
    order: number;
    size: number;
    controlType: GridControlType;

    constructor(init: GridColumn)
    {
        this.header = init.header;
        this.delegate = init.delegate;
        this.order = init.order;
        this.size = init.size;
        this.controlType = init.controlType;
    }

    className? = () => 'col-' + this.size;
}

interface GridProps {
    columns: Array<GridColumn>;
    rows: Array<any>;
}

export class Grid extends React.Component<GridProps, void>
{
    render() { 
        return <section data-grid="container">
            <div data-grid="col-12">
                {this.props.columns.sort((a, b) => a.order - b.order).map((c: GridColumn, o) => {
                    return <div key={o} data-grid={c.className()}> {c.header}</div>
                })}
            </div>
            {this.props.rows.map((row, i) => <div key={i} data-grid="col-12">
                    {this.props.columns.map((c,j) => <div key={j} data-grid={c.className()}>
                         {c.delegate.apply(row)}
                         </div>)
                    }
                </div>
            )}
        </section>
    }
}