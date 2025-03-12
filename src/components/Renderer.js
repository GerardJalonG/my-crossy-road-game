import * as THREE from "three";

export function Renderer() {
    const canvas = document.querySelector("canvas.game");
    if (!canvas) {
        throw new Error("No canvas found");
    };
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        canvas: canvas, 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    
    return renderer;
}