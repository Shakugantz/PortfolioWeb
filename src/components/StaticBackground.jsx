import React from "react";

/**
 * StaticBackground
 *
 * Fondo estático con estilo inspirado en THORSwap.
 * Usa degradados radiales y patrón tipo grid para un look moderno y limpio.
 */
const StaticBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Capa principal con degradado radial tenue */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1f1f1f] via-[#0a0a0a] to-black" />

      {/* Patrón tipo grid como en Thorswap */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d3d3d10_1px,transparent_1px),linear-gradient(to_bottom,#3d3d3d10_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Círculo difuso como acento visual (no animado) */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-700 opacity-10 rounded-full blur-[160px]" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-500 opacity-10 rounded-full blur-[140px]" />
    </div>
  );
};

export default StaticBackground;
