import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Toggle from '@radix-ui/react-toggle';

const ShaderEffectCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');
    if (!gl) return console.error('WebGL not supported');

    const vertexShaderSrc = `
      attribute vec4 position;
      void main() {
        gl_Position = position;
      }
    `;

    const fragmentShaderSrc = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;

      void mainImage(out vec4 fragColor, vec2 fragCoord) {
        float mr = min(iResolution.x, iResolution.y);
        vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;

        float d = -iTime * 0.5;
        float a = 0.0;
        for (float i = 0.0; i < 8.0; ++i) {
          a += cos(i - d - a * uv.x);
          d += sin(uv.y * i + a);
        }
        d += iTime * 0.5;

        vec3 col = vec3(0.8) + 0.2 * vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
        col = clamp(col, 0.0, 1.0);

        fragColor = vec4(col, 1);
      }

      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSrc);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSrc);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1, -1, 1, -1, -1, 1, 1, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
    const iTimeLocation = gl.getUniformLocation(program, 'iTime');

    function render(time) {
      time *= 0.001; // Convert time to seconds
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform2f(iResolutionLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(iTimeLocation, time);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        borderRadius: '12px', // Optional: match button radius
      }}
    />
  );
};

export const Button = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative rounded-md overflow-hidden ${className}`} // Ensure overflow hidden to contain the canvas
    >
      {/* Shader effect canvas */}
      <ShaderEffectCanvas />
      
      <Toggle.Root
        className={`relative z-10 text-gray-800 font-medium px-6 py-2 bg-transparent rounded-md ${className}`} // Ensuring no background in button content
        {...props}
      >
        {children}
      </Toggle.Root>
    </motion.div>
  );
};
