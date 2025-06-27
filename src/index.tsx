import { createRoot } from "react-dom/client";
import { Iphone } from "./screens/Iphone";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

createRoot(document.getElementById("app") as HTMLElement).render(
  <>
    <ShaderGradientCanvas
      style={{ width: '100vw', height: '100vh', position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      fov={100}
      pixelDensity={1}
    >
      <ShaderGradient
        animate="on"
        type="sphere"
        wireframe={false}
        shader="defaults"
        uTime={8}
        uSpeed={0.25}
        uStrength={1.5}
        uDensity={1.5}
        uFrequency={0}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={50}
        rotationY={0}
        rotationZ={-60}
        color1="#000dff"
        color2="#6744f3"
        color3="#ffffff"
        reflection={0.1}

        // View (camera) props
        cAzimuthAngle={180}
        cPolarAngle={80}
        cDistance={2.8}
        cameraZoom={15.1}

        // Effect props
        lightType="3d"
        brightness={1}
        envPreset="city"
        grain="off"

        // Tool props
        toggleAxis={false}
        zoomOut={false}
        hoverState=""

        // Optional - if using transition features
        enableTransition={false}
      />
    </ShaderGradientCanvas>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Iphone />
    </div>
  </>
);
