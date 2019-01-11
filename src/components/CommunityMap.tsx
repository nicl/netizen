import { css } from 'emotion';
import { Map } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import * as React from 'react';

const infoStyle = css`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1000;
    border-radius: 0.75rem;
    background-color: rgba(31, 51, 73, 0.75);
    color: white;
    font-weight: bold;
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    font-family: arial, sans-serif;
`;

const mapStyle = css`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
`;

// TODO add a placeholder on the map
export class CommunityMap extends React.Component<
    {},
    { lat: number; lng: number; zoom: number }
> {
    public map: mapboxgl.Map;
    public mapContainer: Element;

    constructor(props: {}) {
        super(props);
        this.state = {
            lat: 51.44,
            lng: -0.14,
            zoom: 12.5,
        };
    }

    public componentDidMount() {
        const { lat, lng, zoom } = this.state;

        // This is silly but necessary
        (mapboxgl as any).accessToken =
            'pk.eyJ1IjoibmljbCIsImEiOiJjam91YmFza3IwMWhiM2tyejc3em5qdDFpIn0.WcP58x56DcQm4zrx_QJsFQ';

        this.map = new Map({
            center: [lng, lat],
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom,
        });

        this.map.on('move', () => {
            const center = this.map.getCenter();

            this.setState({
                lat: center.lat,
                lng: center.lng,
                zoom: this.map.getZoom(),
            });
        });
    }

    public componentWillUnmount() {
        this.map.remove();
    }

    public render() {
        const { lat, lng, zoom } = this.state;

        return (
            <div>
                <div className={infoStyle}>
                    Lat: {lat.toFixed(4)}, Longitude: {lng.toFixed(4)}, Zoom:{' '}
                    {zoom.toFixed(2)}
                </div>
                <div
                    className={mapStyle}
                    ref={el => (this.mapContainer = el)}
                />
            </div>
        );
    }
}
