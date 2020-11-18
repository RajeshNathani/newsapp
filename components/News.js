import React, { Component } from 'react';
import Link from 'next/link'
export default class News extends Component {
    render() {
        var json = this.props.articles
        var arr = [];
        Object.keys(json).forEach(function(key) {
          arr.push(json[key]);
        });
        const listItems = arr[2].map((link) =>
        <div>
            <a  data-toggle="collapse" href={link.url} rel="noreferrer" target="_blank" role="button" aria-expanded="false" aria-controls="collapseExample"><li key={link.title} className='list-group-item'>{link.title}</li></a>
            <br></br>
        </div>
    );
        return (
            <div>
                <ul className='list-group'>
                    {listItems}
                </ul>
            </div>
        )
    }
}
