import * as React from 'react';
import { Link } from 'react-router';

export class NavMenu extends React.Component<any, void> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>poc</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <Link to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </Link>
                        </li>
                        <li>
                            <Link to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </Link>
                        </li>
                        <li>
                            <Link to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Fetch data test
                            </Link>
                        </li>
                        <li>
                            <Link to={ '/actionItems' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Action Items
                            </Link>
                        </li>
                        <li>
                            <Link to={ '/frameworkDetails' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Framework Details
                            </Link>
                        </li>
                        <li>
                            <Link to={ '/test' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Test Component
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
