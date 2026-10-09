"use client";

import React, {
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useLayoutEffect,
} from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color } from "three";

import { useTheme } from "@/components/ThemeProvider";


/* =========================================================
   COLOR UTILITIES
========================================================= */

const hexToNormalizedRGB = (hex) => {
    const clean = hex.replace("#", "");

    const r = parseInt(clean.slice(0, 2), 16) / 255;
    const g = parseInt(clean.slice(2, 4), 16) / 255;
    const b = parseInt(clean.slice(4, 6), 16) / 255;

    return [r, g, b];
};


/* =========================================================
   VERTEX SHADER
========================================================= */

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {

    vPosition = position;
    vUv = uv;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(position, 1.0);
}
`;


/* =========================================================
   FRAGMENT SHADER
========================================================= */

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

uniform vec3 uColor;
uniform vec3 uColor2;
uniform vec3 uColor3;

uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

/* =========================================================
   NOISE / DITHER
========================================================= */

float noise(vec2 texCoord) {
    float G = e;
    vec2 r = G * sin(G * texCoord);
    return fract(r.x * r.y * (1.0 + texCoord.x));
}

/* =========================================================
   UV ROTATION
========================================================= */

vec2 rotateUvs(vec2 uv, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    mat2 rot = mat2(c, -s, s, c);
    return rot * uv;
}

/* =========================================================
   MAIN
========================================================= */

void main() {
    float rnd = noise(gl_FragCoord.xy);

    vec2 uv = rotateUvs(vUv * uScale, uRotation);
    vec2 tex = uv * uScale;

    float tOffset = uSpeed * uTime;

    // Harmonic wave flow
    float wave1 = sin(tex.x * 3.2 + tex.y * 2.6 + tOffset * 0.4);
    float wave2 = sin(tex.x * 5.2 - tex.y * 3.6 - tOffset * 0.3 + cos(tex.y * 3.8 + tOffset * 0.2));
    float wave3 = sin(11.0 * (tex.x * 0.75 + tex.y * 0.75) + 0.08 * tOffset);

    float pattern = 0.5 + 0.32 * wave1 + 0.14 * wave2 + 0.04 * wave3;
    pattern = clamp(pattern, 0.0, 1.0);

    // Primary to secondary gradient
    vec3 baseColor = mix(uColor, uColor2, smoothstep(0.1, 0.9, pattern));

    // Specular lighting on wave peaks - soft and elegant
    float specular = pow(smoothstep(0.48, 0.98, pattern), 3.5);

    // Subtle glowing energy filaments
    float filament = pow(sin(pattern * 15.7079 + tOffset * 0.15) * 0.5 + 0.5, 7.0);

    // Luminous accent blend - balanced for deep dark elegance
    baseColor += uColor3 * (specular * 0.18 + filament * 0.08);

    // Gentle dither to prevent color banding without dirty noise
    baseColor += (rnd - 0.5) * 0.01 * uNoiseIntensity;

    gl_FragColor = vec4(baseColor, 1.0);
}
`;


/* =========================================================
   SILK PLANE
========================================================= */

const SilkPlane = forwardRef(
    function SilkPlane(
        {
            uniforms,
        },
        ref
    ) {

        const { viewport } =
            useThree();


        /* ---------------------------------------------------
           Resize Plane
        --------------------------------------------------- */

        useLayoutEffect(() => {

            const mesh =
                ref.current;

            if (!mesh) {
                return;
            }

            mesh.scale.set(
                viewport.width,
                viewport.height,
                1
            );

        }, [
            ref,
            viewport,
        ]);


        /* ---------------------------------------------------
           Animation
        --------------------------------------------------- */

        useFrame(
            (_state, delta) => {

                const mesh =
                    ref.current;

                if (!mesh) {
                    return;
                }

                const material =
                    mesh.material;

                material.uniforms.uTime.value +=
                    0.1 * delta;

            }
        );


        return (
            <mesh ref={ref}>

                <planeGeometry
                    args={[1, 1, 1, 1]}
                />

                <shaderMaterial
                    uniforms={uniforms}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                />

            </mesh>
        );
    }
);


SilkPlane.displayName =
    "SilkPlane";


/* =========================================================
   SILK COMPONENT
========================================================= */

const Silk = ({
    speed = 5,
    scale = 1,
    color,
    noiseIntensity = 1.2,
    rotation = 0,
}) => {

    const meshRef =
        useRef(null);


    const {
        resolvedTheme,
    } = useTheme();


    /* =====================================================
       THEME COLORS

       DARK:
       Deep Obsidian + Cosmic Violet/Graphite + Glowing Amber Gold

       LIGHT:
       Warm Porcelain Ivory + Soft Champagne + Honey Amber
    ====================================================== */

    const themeColors =
        resolvedTheme === "dark"
            ? {
                  primary: "#060508",
                  secondary: "#100d14",
                  accent: "#b45309",
              }
            : {
                  primary: "#FAF8F5",
                  secondary: "#EFE6DB",
                  accent: "#D97706",
              };


    /* =====================================================
       CUSTOM COLOR SUPPORT

       If a color prop is supplied, use it as primary.
    ====================================================== */

    const primaryColor =
        color ?? themeColors.primary;


    /* =====================================================
       SHADER UNIFORMS
    ====================================================== */

    const uniforms =
        useMemo(
            () => ({

                uSpeed: {
                    value: speed,
                },

                uScale: {
                    value: scale,
                },

                uNoiseIntensity: {
                    value: noiseIntensity,
                },

                uColor: {
                    value: new Color(
                        ...hexToNormalizedRGB(
                            primaryColor
                        )
                    ),
                },

                uColor2: {
                    value: new Color(
                        ...hexToNormalizedRGB(
                            themeColors.secondary
                        )
                    ),
                },

                uColor3: {
                    value: new Color(
                        ...hexToNormalizedRGB(
                            themeColors.accent
                        )
                    ),
                },

                uRotation: {
                    value: rotation,
                },

                uTime: {
                    value: 0,
                },

            }),
            [
                speed,
                scale,
                noiseIntensity,
                primaryColor,
                themeColors.secondary,
                themeColors.accent,
                rotation,
            ]
        );


    /* =====================================================
       UPDATE COLORS WHEN THEME CHANGES
    ====================================================== */

    useEffect(() => {

        const mesh =
            meshRef.current;

        if (!mesh) {
            return;
        }

        const material =
            mesh.material;


        const colors =
            resolvedTheme === "dark"
                ? {
                      primary: "#060508",
                      secondary: "#100d14",
                      accent: "#b45309",
                  }
                : {
                      primary: "#FAF8F5",
                      secondary: "#EFE6DB",
                      accent: "#D97706",
                  };


        /* -------------------------------------------------
           Primary
        ------------------------------------------------- */

        material.uniforms.uColor.value.set(
            color ?? colors.primary
        );


        /* -------------------------------------------------
           Secondary Grey
        ------------------------------------------------- */

        material.uniforms.uColor2.value.set(
            colors.secondary
        );


        /* -------------------------------------------------
           Muted Red / Brown
        ------------------------------------------------- */

        material.uniforms.uColor3.value.set(
            colors.accent
        );

    }, [
        resolvedTheme,
        color,
    ]);


    /* =====================================================
       CANVAS
    ====================================================== */

    return (

        <Canvas
            dpr={[1, 2]}
            frameloop="always"
            gl={{
                antialias: true,
                alpha: false,
            }}
        >

            <SilkPlane
                ref={meshRef}
                uniforms={uniforms}
            />

        </Canvas>

    );
};


export default Silk;