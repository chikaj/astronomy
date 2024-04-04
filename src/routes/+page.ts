import type { PageLoad } from './$types';
// import { DateTime } from 'luxon';
import { Observer, MakeTime, Body, Equator, Horizon, Illumination, MoonPhase, GeoVector, Rotation_EQJ_GAL, RotateVector, HelioVector, GeoMoon, SphereFromVector } from '$lib/astronomy';

// const datetime = DateTime.fromISO("2023-07-05T12:30:39Z");
const observer = new Observer(29.92559, -97.99284, 254.508);
// const dt = new Date("2023-07-06T04:15:05.000Z")
const dt = new Date("2023-07-17T09:00:05.000Z")
const date = MakeTime(dt);

// const sunVectorEQJ = HelioVector(Body.Sun, date);
// const sunGalacticGAL = RotateVector(Rotation_EQJ_GAL(), sunVectorEQJ);
// const sunGalacticLatLon = SphereFromVector(sunVectorEQJ);
// const sunGalacticCoords = RotateVector(Rotation_EQJ_GAL(), sunVector);

const moonEQJ = HelioVector(Body.Moon, date);
const moonGalactic = RotateVector(Rotation_EQJ_GAL(), moonEQJ);
const moonSpherical = SphereFromVector(moonGalactic);

const sunEQJ = GeoVector(Body.Moon, date, true);
const sunGalactic = RotateVector(Rotation_EQJ_GAL(), sunEQJ);
const sunSpherical = SphereFromVector(sunGalactic);


const geoMoonCoords = SphereFromVector(RotateVector(Rotation_EQJ_GAL(), GeoMoon(date)));

const moon_ra_dec = Equator(Body.Moon, date, observer, true, true);
const moon_horizon = Horizon(date, observer, moon_ra_dec.ra, moon_ra_dec.dec);
const moon_illumination = Illumination(Body.Moon, date);
const moon_phase = MoonPhase(date);

const sun_ra_dec = Equator(Body.Sun, date, observer, true, true);
const sun_horizon = Horizon(date, observer, sun_ra_dec.ra, sun_ra_dec.dec);
const sun_illumination = Illumination(Body.Sun, date);

export const load: PageLoad = async () => {
    return {
        date: date,
        moonStuff: moonSpherical,
        sunStuff: sunSpherical,
        geoMoonCoords: geoMoonCoords,
        moon_ra_dec: moon_ra_dec,
        moon_horizon: moon_horizon,
        moon_illumination: moon_illumination,
        moon_phase: moon_phase,
        sun_ra_dec: sun_ra_dec,
        sun_horizon: sun_horizon,
        sun_illumination: sun_illumination
    };
};