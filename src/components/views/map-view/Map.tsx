'use client'
import  { Map as MapContainer , MapRef, ScaleControl } from 'react-map-gl/maplibre';
import type { Map as MapLibreMap } from 'maplibre-gl';
import { useCallback } from 'react';

export default function Map(){
      const onMapLoad = useCallback(
    (event: { target: MapLibreMap }) => {
      const map = event.target;

      // COUNTRY BORDERS
      map.setPaintProperty(
        'admin-0-boundary',
        'line-color',
        '#3a2a1f'
      );

      // PROVINCE / REGION BORDERS
      map.setPaintProperty(
        'admin-1-boundary',
        'line-color',
        '#7a6b5f'
      );

      // LANDSCAPE
      map.setPaintProperty(
        'background',
        'background-color',
        '#f7f4ef'
      );

      // WATER
      map.setPaintProperty(
        'water',
        'fill-color',
        '#7f97a8'
      );

      // HIDE POI
      const poiLayers = map
        .getStyle()
        .layers?.filter(layer =>
          layer.id.toLowerCase().includes('poi')
        );

      poiLayers?.forEach(layer => {
        map.setLayoutProperty(
          layer.id,
          'visibility',
          'none'
        );
      });

      // HIDE TRANSIT
      const transitLayers = map
        .getStyle()
        .layers?.filter(layer =>
          layer.id.toLowerCase().includes('transit')
        );

      transitLayers?.forEach(layer => {
        map.setLayoutProperty(
          layer.id,
          'visibility',
          'none'
        );
      });

      // HIDE NEIGHBORHOODS
      const neighborhoodLayers = map
        .getStyle()
        .layers?.filter(layer =>
          layer.id.toLowerCase().includes('neighbourhood') ||
          layer.id.toLowerCase().includes('neighborhood')
        );

      neighborhoodLayers?.forEach(layer => {
        map.setLayoutProperty(
          layer.id,
          'visibility',
          'none'
        );
      });

      // SUBTLE ROADS INSTEAD OF HIDE
      const roadLayers = map
        .getStyle()
        .layers?.filter(layer =>
          layer.id.toLowerCase().includes('road')
        );

      roadLayers?.forEach(layer => {
        try {
          map.setPaintProperty(
            layer.id,
            'line-color',
            '#ddd4c8'
          );
        } catch {}
      });
    },
    []
  );
    return (
                <div
                    className="w-9/10 h-[780px] max-h-screen rounded-2xl overflow-hidden!"
                    >
                    <MapContainer
                          initialViewState={{
          longitude: 19.1451,
          latitude: 51.9194,
          zoom: 5.7,
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        style={{
          width: '100%',
          borderRadius:'120px',
          height: '100%',
        }}
        onLoad={onMapLoad}
                        />
                </div>
        )
}

