import { j as e } from "./_uiVendor";
import { a } from "./_reactVendor";
import gsap from "gsap";

const GsapAnimatedDoodle = ({
  src,
  alt = "",
  type = "generic",
  className = "",
  initialRotate = 0,
  loading = "lazy",
}: {
  src: string;
  alt?: string;
  type?: "bulb" | "headphone" | "flower" | "generic";
  className?: string;
  initialRotate?: number;
  loading?: "lazy" | "eager";
}) => {
  const containerRef = a.useRef<HTMLDivElement>(null);
  const imgRef = a.useRef<HTMLImageElement>(null);
  const glowRef = a.useRef<HTMLDivElement>(null);

  a.useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    const glow = glowRef.current;
    if (!container || !img) return;

    const ctx = gsap.context(() => {
      // Set initial resting position (no auto/recorded idle loop)
      gsap.set(img, {
        rotation: initialRotate,
        scale: 1,
        x: 0,
        y: 0,
        transformOrigin: "center center",
        willChange: "transform, filter",
      });

      // QuickTo interpolators for real-time cursor tracking
      const xTo = gsap.quickTo(img, "x", { duration: 0.25, ease: "power2.out" });
      const yTo = gsap.quickTo(img, "y", { duration: 0.25, ease: "power2.out" });
      const rotTo = gsap.quickTo(img, "rotation", { duration: 0.25, ease: "power2.out" });

      // Mouse Move: Dynamically tilt and follow cursor
      const onMouseMove = (ev: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const relX = (ev.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
        const relY = (ev.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

        const tiltFactor = type === "flower" ? 20 : type === "headphone" ? 18 : 14;
        const moveFactor = 8;

        xTo(relX * moveFactor);
        yTo(relY * moveFactor);
        rotTo(initialRotate + relX * tiltFactor);
      };

      // Mouse Enter: Tactile responsive spring entry
      const onMouseEnter = () => {
        gsap.killTweensOf(img);

        let glowFilter = "drop-shadow(0 0 12px rgba(0,0,0,0.15))";
        if (type === "bulb") {
          glowFilter =
            "drop-shadow(0 0 20px rgba(250, 204, 21, 0.95)) drop-shadow(0 0 6px rgba(234, 179, 8, 1))";
        } else if (type === "headphone") {
          glowFilter =
            "drop-shadow(0 0 16px rgba(99, 102, 241, 0.8)) drop-shadow(0 0 5px rgba(168, 85, 247, 0.9))";
        } else if (type === "flower") {
          glowFilter =
            "drop-shadow(0 0 16px rgba(52, 211, 153, 0.8)) drop-shadow(0 0 5px rgba(236, 72, 153, 0.7))";
        }

        gsap.to(img, {
          scale: 1.18,
          filter: glowFilter,
          duration: 0.35,
          ease: "back.out(2.2)",
        });

        if (glow) {
          gsap.to(glow, {
            opacity: 0.85,
            scale: 1.35,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      // Mouse Leave: Smooth natural spring release back to rest
      const onMouseLeave = () => {
        gsap.killTweensOf(img);

        gsap.to(img, {
          scale: 1,
          x: 0,
          y: 0,
          rotation: initialRotate,
          filter: "drop-shadow(0 0 0px rgba(0,0,0,0))",
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });

        if (glow) {
          gsap.to(glow, {
            opacity: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      };

      // Mouse Down / Up for tactile click bounce
      const onMouseDown = () => {
        gsap.to(img, {
          scale: 0.96,
          duration: 0.1,
          ease: "power1.out",
        });
      };

      const onMouseUp = () => {
        gsap.to(img, {
          scale: 1.18,
          duration: 0.25,
          ease: "back.out(2.5)",
        });
      };

      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseleave", onMouseLeave);
      container.addEventListener("mousedown", onMouseDown);
      container.addEventListener("mouseup", onMouseUp);

      return () => {
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("mouseleave", onMouseLeave);
        container.removeEventListener("mousedown", onMouseDown);
        container.removeEventListener("mouseup", onMouseUp);
      };
    }, container);

    return () => ctx.revert();
  }, [type, initialRotate]);

  return e.jsxs("div", {
    ref: containerRef,
    className: `inline-block relative cursor-pointer select-none ${className}`,
    style: { touchAction: "manipulation" },
    children: [
      type === "bulb" &&
        e.jsx("div", {
          ref: glowRef,
          className:
            "absolute inset-0 -m-3 rounded-full bg-yellow-300/30 blur-xl pointer-events-none opacity-0 transition-opacity",
          "aria-hidden": "true",
        }),
      e.jsx("img", {
        ref: imgRef,
        src: src,
        alt: alt,
        loading: loading,
        className: "w-full h-full object-contain pointer-events-auto select-none",
      }),
    ],
  });
};

export { GsapAnimatedDoodle, GsapAnimatedDoodle as default };
