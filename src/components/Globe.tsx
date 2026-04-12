import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const indiaCityNames = [
  "Lucknow",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Pune",
];

const loadAmCharts = async () => {
  const loadScript = (src: string) => {
    return new Promise((resolve, reject) => {
      let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
      if (script) {
        if (script.getAttribute("data-loaded") === "true") {
          resolve(true);
        } else {
          script.addEventListener("load", () => resolve(true));
          script.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)));
        }
        return;
      }
      script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        script.setAttribute("data-loaded", "true");
        resolve(true);
      };
      script.onerror = (err) => reject(err);
      document.head.appendChild(script);
    });
  };

  await loadScript("https://cdn.amcharts.com/lib/5/index.js");
  await loadScript("https://cdn.amcharts.com/lib/5/map.js");
  await loadScript("https://cdn.amcharts.com/lib/5/geodata/worldLow.js");
  await loadScript("https://cdn.amcharts.com/lib/5/themes/Animated.js");

  // Give a tiny buffer for variables to attach to window
  await new Promise((r) => setTimeout(r, 50));
};

function GlobeChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const initAmCharts = async () => {
      try {
        await loadAmCharts();
        if (isCancelled || !chartRef.current) return;

        const win = window as any;
        if (!win.am5 || !win.am5map || !win.am5geodata_worldLow) {
          console.error("amCharts scripts not fully loaded.", win.am5);
          return;
        }

        const am5 = win.am5;
        const am5map = win.am5map;
        const am5geodata_worldLow = win.am5geodata_worldLow;
        const am5themes_Animated = win.am5themes_Animated;

        if (rootRef.current) {
          rootRef.current.dispose();
        }

        const root = am5.Root.new(chartRef.current);
        if (root._logo) {
          root._logo.dispose();
        }
        rootRef.current = root;
        root.setThemes([am5themes_Animated.new(root)]);

        const chart = root.container.children.push(
          am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "rotateY",
            projection: am5map.geoOrthographic(),
            paddingBottom: 20,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            minZoomLevel: 0.9,
            maxZoomLevel: 0.9,
            zoomLevel: 0.9,
          })
        );

        const backgroundSeries = chart.series.push(
          am5map.MapPolygonSeries.new(root, {})
        );
        backgroundSeries.mapPolygons.template.setAll({
          fill: am5.color(0x060612),
          fillOpacity: 1,
          strokeOpacity: 0,
        });
        backgroundSeries.data.push({
          geometry: am5map.getGeoRectangle(90, 180, -90, -180),
        });

        const graticuleSeries = chart.series.push(
          am5map.GraticuleSeries.new(root, {})
        );
        graticuleSeries.mapLines.template.setAll({
          stroke: am5.color(0xffffff),
          strokeOpacity: 0.1,
          strokeWidth: 0.5,
        });

        const polygonSeries = chart.series.push(
          am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
          })
        );
        polygonSeries.mapPolygons.template.setAll({
          tooltipText: "{name}",
          toggleKey: "active",
          interactive: true,
          fill: am5.color(0x111128),
          fillOpacity: 0.8,
          stroke: am5.color(0xffffff),
          strokeWidth: 0.5,
          strokeOpacity: 0.15,
        });
        polygonSeries.mapPolygons.template.states.create("hover", {
          fill: am5.color(0x3d2060),
          stroke: am5.color(0x8b5cf6),
        });
        polygonSeries.mapPolygons.template.states.create("active", {
          fill: am5.color(0x5b21b6),
          stroke: am5.color(0x8b5cf6),
          strokeWidth: 1.5,
        });

        polygonSeries.events.on("datavalidated", function () {
          polygonSeries.mapPolygons.each(function (polygon: any) {
            const d = polygon.dataItem && polygon.dataItem.dataContext;
            if (d && d.id === "IN") {
              polygon.setAll({
                fill: am5.color(0x3b0764),
                fillOpacity: 0.95,
                stroke: am5.color(0x8b5cf6),
                strokeWidth: 1.5,
                strokeOpacity: 1,
              });
            }
          });
        });

        // Add Cities
        const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
        const cities = [
          { name: "Lucknow", lng: 80.9462, lat: 26.8467, p: true },
          { name: "Delhi", lng: 77.2090, lat: 28.6139, p: true },
          { name: "Mumbai", lng: 72.8777, lat: 19.0760, p: true },
          { name: "Bangalore", lng: 77.5946, lat: 12.9716, p: true },
          { name: "Chennai", lng: 80.2707, lat: 13.0827, p: true },
          { name: "Hyderabad", lng: 78.4867, lat: 17.3850, p: true },
          { name: "Kolkata", lng: 88.3639, lat: 22.5726, p: true },
          { name: "Pune", lng: 73.8567, lat: 18.5204, p: true },
          { name: "Dubai", lng: 55.2708, lat: 25.2048, p: false },
          { name: "Singapore", lng: 103.8198, lat: 1.3521, p: false },
          { name: "London", lng: -0.1278, lat: 51.5074, p: false },
          { name: "New York", lng: -74.0060, lat: 40.7128, p: false },
          { name: "Tokyo", lng: 139.6503, lat: 35.6762, p: false },
          { name: "Sydney", lng: 151.2093, lat: -33.8688, p: false },
        ];

        cities.forEach((city) => {
          pointSeries.data.push({
            geometry: { type: "Point", coordinates: [city.lng, city.lat] },
            name: city.name,
            primary: city.p,
          });
        });

        pointSeries.bullets.push(function (targetRoot: any, series: any, dataItem: any) {
          const circle = am5.Circle.new(targetRoot, {
            radius: 5,
            fill: am5.color(0x8B5CF6),
            fillOpacity: 1,
            stroke: am5.color(0xd8b4fe),
            strokeWidth: 1.5,
            strokeOpacity: 0.8,
            tooltipText: "{name}",
          });

          circle.animate({
            key: "scale",
            from: 1,
            to: 2.2,
            duration: 1500,
            loops: Infinity,
          });
          circle.animate({
            key: "fillOpacity",
            from: 1,
            to: 0.3,
            duration: 1500,
            loops: Infinity,
          });

          return am5.Bullet.new(targetRoot, { sprite: circle });
        });

        let isInteracting = false;
        let resumeTimer: any = null;
        let currentRotation = 0;
        let rotationAnimation: any = null;

        function startRotation() {
          currentRotation = (chart.get("rotationX") as number) || 0;
          rotationAnimation = chart.animate({
            key: "rotationX",
            from: currentRotation,
            to: currentRotation + 360,
            duration: 30000,
            loops: Infinity
          });
        }

        chart.events.on("pointerdown", function() {
          isInteracting = true;
          if (resumeTimer) clearTimeout(resumeTimer);
          if (rotationAnimation) rotationAnimation.stop();
          const _animations = (chart as any).animations;
          if (_animations && Array.isArray(_animations)) {
            _animations.forEach(function(a: any) { a.stop(); });
          }
        });

        chart.events.on("globalpointerup", function() {
          isInteracting = false;
          if (resumeTimer) clearTimeout(resumeTimer);
          resumeTimer = setTimeout(function() {
            if (!isInteracting) startRotation();
          }, 1500);
        });

        chart.events.on("wheel", function() {
          if (resumeTimer) clearTimeout(resumeTimer);
          if (rotationAnimation) rotationAnimation.stop();
          isInteracting = false;
          resumeTimer = setTimeout(function() {
            if (!isInteracting) startRotation();
          }, 1500);
        });

        startRotation();

        const labelSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

        const labelCities = [
          { name: "Lucknow", lng: 80.9462, lat: 26.8467 },
          { name: "Delhi", lng: 77.2090, lat: 28.6139 },
          { name: "Mumbai", lng: 72.8777, lat: 19.0760 },
          { name: "Bangalore", lng: 77.5946, lat: 12.9716 },
          { name: "Chennai", lng: 80.2707, lat: 13.0827 },
          { name: "Hyderabad", lng: 78.4867, lat: 17.3850 },
          { name: "Kolkata", lng: 88.3639, lat: 22.5726 },
          { name: "Dubai", lng: 55.2708, lat: 25.2048 },
          { name: "Singapore", lng: 103.8198, lat: 1.3521 },
          { name: "London", lng: -0.1278, lat: 51.5074 },
          { name: "New York", lng: -74.0060, lat: 40.7128 },
          { name: "Tokyo", lng: 139.6503, lat: 35.6762 }
        ];

        labelCities.forEach(function(city) {
          labelSeries.data.push({
            geometry: { type: "Point", coordinates: [city.lng, city.lat] },
            name: city.name
          });
        });

        labelSeries.bullets.push(function(targetRoot: any, series: any, dataItem: any) {
          const container = am5.Container.new(targetRoot, {});

          const line = container.children.push(am5.Line.new(targetRoot, {
            stroke: am5.color(0xffffff),
            strokeOpacity: 0.25,
            strokeWidth: 0.8,
            x1: 0, y1: 0,
            x2: 0, y2: -28
          }));

          const labelOptions: any = {
            text: dataItem.dataContext.name,
            fill: am5.color(0xffffff),
            fillOpacity: 0.55,
            fontSize: 10,
            fontFamily: "Inter, sans-serif",
            fontWeight: "400",
            centerX: am5.percent(50),
            centerY: am5.percent(100),
            dy: -32,
            paddingTop: 0,
            paddingBottom: 0
          };
          labelOptions.textType = "radial";

          const label = container.children.push(am5.Label.new(targetRoot, labelOptions));

          return am5.Bullet.new(targetRoot, {
            sprite: container,
            locationX: 0.5,
            locationY: 0.5
          });
        });

        chart.events.on("frameended", function() {
          try {
            labelSeries.dataItems.forEach(function(dataItem: any) {
              const sprite = dataItem.bullets && dataItem.bullets[0] && dataItem.bullets[0].get("sprite");
              if (!sprite) return;
              
              const geoPoint = (labelSeries as any).getGeographicPoint ? (labelSeries as any).getGeographicPoint(dataItem) : null;
              if (!geoPoint) return;
              
              const inertiaAngleFn = (chart as any).inertiaAngle;
              if (typeof inertiaAngleFn === 'function') {
                const angle = inertiaAngleFn.call(chart, geoPoint);
                const opacity = angle > 90 ? 0 : (1 - angle / 90) * 0.7;
                sprite.setAll({ opacity: opacity });
              }
            });
          } catch(e) {}
        });

        chart.appear(1000, 100);
        setLoading(false);
      } catch (err) {
        console.error("Globe init error:", err);
      }
    };

    initAmCharts();

    return () => {
      isCancelled = true;
      if (rootRef.current) {
        rootRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[500px]">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
          Loading 3D Globe...
        </div>
      )}
      <div ref={chartRef} className="w-full h-full" />
    </div>
  );
}

export default function Globe() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="eyebrow">GLOBAL REACH</span>
            <h2
              className="text-white font-bold tracking-tight mt-4"
              style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)" }}
            >
              Serving clients worldwide
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              From local schools in India to startups across the globe — our
              digital systems power businesses everywhere.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {indiaCityNames.slice(0, 6).map((city) => (
                <span
                  key={city}
                  className="glass-pill text-xs px-3 py-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {city}
                </span>
              ))}
              <span
                className="glass-pill text-xs px-3 py-1"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                + more
              </span>
            </div>
          </motion.div>

          {/* Right: Globe canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-square max-w-[550px] mx-auto w-full"
          >
            <GlobeChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
