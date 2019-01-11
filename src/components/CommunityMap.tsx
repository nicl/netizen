import { css } from 'emotion';
import { Map } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import * as React from 'react';

const mapStyle = css`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
`;

export class CommunityMap extends React.Component {
    public map: mapboxgl.Map;
    public mapContainer: Element;

    public componentDidMount() {
        // This is silly but necessary
        (mapboxgl as any).accessToken =
            'pk.eyJ1IjoibmljbCIsImEiOiJjam91YmFza3IwMWhiM2tyejc3em5qdDFpIn0.WcP58x56DcQm4zrx_QJsFQ';

        this.map = new Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
        });
    }

    public componentWillUnmount() {
        this.map.remove();
    }

    public render() {
        return (
            <div className={mapStyle} ref={el => (this.mapContainer = el)} />
        );
    }
}
