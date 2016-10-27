import React, { Component } from 'react';
import { GoogleMap, GoogleMapLoader } from 'react-google-maps';

class ReactMapTest extends Component {
    
getInfoWindow(items, i) {
    if (i === this.state.clickedMarker) {
        const content = <div class="info-window-partner">${this.getInfoWindowContent(items)}</div>;
        return (
          disableAutoPan = {true}
        content = {content}
        onCloseclick = {this.handleMarkerClose.bind(this)}
        key = {`${i}_info_window`}>
    );
    }
}

getInfoWindowContent(items) {
    let htmlText = '';
    map(items, (item) => {
        htmlText = htmlText + <li><span onclick=${this.onClickItem(itemId)}> some text </span></li>
    });
    htmlText = htmlText + '';
    return htmlText;
}

onClickItem(itemId) {
    return function () {
        FlowRouter.go('/items/${itemId}')
    }
}
    
}