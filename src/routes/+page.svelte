<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h2>{ data.date }</h2>
<h2>{ data.date.ut }</h2>

<hr>

<!-- <h3>Sun Galactic Lat/Lon: x={ data.sunGalacticLatLon.lat }, y={ data.sunGalacticLatLon.lon }</h3> -->
<!-- <h3>moonGalacticCoords: x={ data.moonGalacticCoords.x }, y={ data.moonGalacticCoords.y }, z={ data.moonGalacticCoords.z }</h3> -->
<h3>Moon stuff: { data.moonStuff.lat }, { data.moonStuff.lon }</h3>
<h3>Sun stuff: { data.sunStuff.lat }, { data.sunStuff.lon }</h3>
<h3>Geo Moon Coords: x={ data.geoMoonCoords.lat }, y={ data.geoMoonCoords.lon }</h3>

<hr>

<p>Moon RA and dec { data.moon_ra_dec.ra } / { data.moon_ra_dec.dec }</p>
<p>Moon altitude: { data.moon_horizon.altitude }</p>
<p>Moon illumination magnitude: { data.moon_illumination.mag }</p>
<p>Moon illumination fraction: { data.moon_illumination.phase_fraction }</p>
<p>Moon illumination angle: { data.moon_illumination.phase_angle }</p>
<p>Moon phase angle: { data.moon_phase.toFixed(3) }</p>

<hr>

<p>Sun right ascencion { data.sun_ra_dec.ra }</p>
<p>Sun altitude: { data.sun_horizon.altitude }</p>
<p>Sun illumination magnitude: { data.sun_illumination.mag }</p>
<p>Sun illumination fraction: { data.sun_illumination.phase_fraction }</p>
<p>Sun illumination angle: { data.sun_illumination.phase_angle }</p>

<style>
    h2 {
        font-size: x-large;
    }
</style>