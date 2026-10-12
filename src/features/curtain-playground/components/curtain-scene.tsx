'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

const finishes = {
  linen: { label: 'Linen', color: '#d9c9ad', roughness: 0.94, metalness: 0 },
  blackout: { label: 'Blackout', color: '#5b6a61', roughness: 0.76, metalness: 0 },
  wood: { label: 'Kayu oak', color: '#a87345', roughness: 0.5, metalness: 0.04 },
} as const;

const types = ['Gorden kain', 'Roller blind', 'Vertical blind', 'Venetian blind'] as const;
const camera = { position: [2.8, 3.2, 4.2] as [number, number, number], fov: 45 };
const orbitTarget = [0, 1.95, -1.8] as [number, number, number];
type CurtainType = (typeof types)[number];
type Finish = keyof typeof finishes;

function FabricMaterial({ finish }: { finish: Finish }) {
  const source = useLoader(THREE.TextureLoader, '/assets/textures/linen-weave.png');
  const texture = useMemo(() => {
    const copy = source.clone();
    copy.colorSpace = THREE.SRGBColorSpace;
    copy.wrapS = copy.wrapT = THREE.RepeatWrapping;
    copy.repeat.set(1, 2);
    copy.needsUpdate = true;
    return copy;
  }, [source]);
  useEffect(() => () => texture.dispose(), [texture]);

  const item = finishes[finish];
  return <meshStandardMaterial color={finish === 'linen' ? '#f3eee6' : item.color} map={finish === 'wood' ? null : texture} bumpMap={finish === 'wood' ? null : texture} bumpScale={finish === 'linen' ? 0.012 : 0.006} roughness={item.roughness} metalness={item.metalness} side={THREE.DoubleSide} />;
}

function CurtainPanel({ side, openness, finish }: { side: -1 | 1; openness: number; finish: Finish }) {
  const width = 2.1 - openness * 1.55;
  const geometry = useMemo(() => {
    const cloth = new THREE.PlaneGeometry(width, 3.9, 80, 40);
    const vertices = cloth.attributes.position;
    for (let index = 0; index < vertices.count; index++) {
      const x = vertices.getX(index);
      const y = vertices.getY(index);
      const fold = Math.sin(((x / width) + 0.5) * Math.PI * 10);
      const lowerDrape = 1 + (1.95 - y) * 0.045;
      vertices.setZ(index, fold * 0.16 * lowerDrape + Math.sin(y * 1.2 + x * 2) * 0.018);
      vertices.setY(index, y + Math.sin(((x / width) + 0.5) * Math.PI * 10) * Math.max(0, -y) * 0.018);
    }
    vertices.needsUpdate = true;
    cloth.computeVertexNormals();
    return cloth;
  }, [width]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return <group position={[side * (2.13 - width / 2), 2.12, -2.29]}>
    <mesh castShadow receiveShadow geometry={geometry}><FabricMaterial finish={finish} /></mesh>
    {Array.from({ length: 6 }, (_, index) => <mesh key={index} castShadow position={[-width / 2 + (width * index) / 5, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
      <torusGeometry args={[0.055, 0.012, 8, 16]} />
      <meshStandardMaterial color="#655c50" metalness={0.55} roughness={0.38} />
    </mesh>)}
  </group>;
}

function WindowTreatment({ type, finish, openness }: { type: CurtainType; finish: Finish; openness: number }) {
  if (type === 'Gorden kain') return <><CurtainPanel side={-1} openness={openness} finish={finish} /><CurtainPanel side={1} openness={openness} finish={finish} /></>;

  if (type === 'Roller blind') {
    const height = 0.28 + (1 - openness) * 2.62;
    return <><mesh castShadow position={[0, 4.02, -2.38]} rotation={[0, Math.PI / 2, 0]}><cylinderGeometry args={[0.07, 0.07, 4.36, 20]} /><meshStandardMaterial color="#3b3a34" roughness={0.65} /></mesh><mesh castShadow position={[0, 4.02 - height / 2, -2.35]}><boxGeometry args={[4.22, height, 0.045]} /><FabricMaterial finish={finish} /></mesh></>;
  }

  if (type === 'Vertical blind') {
    return <>{Array.from({ length: 11 }, (_, index) => {
      const x = (index - 5) * 0.37;
      const angle = (0.14 + openness * 1.25) * (index % 2 ? 1 : -1);
      return <mesh key={x} castShadow position={[x, 2.5, -2.35]} rotation={[0, angle, 0]}><boxGeometry args={[0.27, 2.88, 0.035]} /><FabricMaterial finish={finish} /></mesh>;
    })}</>;
  }

  return <>{Array.from({ length: 16 }, (_, index) => {
    const y = 1.12 + index * 0.18;
    const angle = -0.12 + openness * 0.72;
    return <mesh key={y} castShadow position={[0, y, -2.34]} rotation={[angle, 0, 0]}><boxGeometry args={[4.25, 0.13, 0.055]} /><FabricMaterial finish={finish} /></mesh>;
  })}</>;
}

function Room({ type, finish, openness }: { type: CurtainType; finish: Finish; openness: number }) {
  return <>
    <color attach="background" args={['#d9d2c6']} />
    <hemisphereLight args={['#f6f4ed', '#a09584', 1.2]} />
    <directionalLight castShadow position={[-3.5, 5.5, 3.5]} intensity={2} shadow-mapSize={[2048, 2048]} shadow-radius={5} shadow-bias={-0.0002} />
    <spotLight position={[3, 4.5, 4]} intensity={12} angle={0.8} penumbra={1} distance={12} color="#fff8ec" />
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[12, 12]} /><meshStandardMaterial color="#b8aa95" roughness={0.92} /></mesh>
    <mesh receiveShadow position={[0, 2.5, -2.65]}><planeGeometry args={[10, 5]} /><meshStandardMaterial color="#ede7dc" roughness={0.96} /></mesh>
    <mesh position={[0, 2.5, -2.6]}><boxGeometry args={[4.72, 3.26, 0.06]} /><meshStandardMaterial color="#a5bfc3" roughness={0.68} /></mesh>
    {type === 'Gorden kain' ? <>
      <mesh castShadow position={[0, 4.12, -2.29]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.026, 0.026, 4.7, 16]} /><meshStandardMaterial color="#655c50" metalness={0.5} roughness={0.38} /></mesh>
      {[-2.2, 2.2].map((x) => <mesh key={x} position={[x, 4.12, -2.45]}><boxGeometry args={[0.09, 0.08, 0.38]} /><meshStandardMaterial color="#655c50" metalness={0.5} roughness={0.38} /></mesh>)}
    </> : <mesh position={[0, 4.15, -2.31]}><boxGeometry args={[4.64, 0.12, 0.12]} /><meshStandardMaterial color="#3d3a33" roughness={0.64} /></mesh>}
    <WindowTreatment type={type} finish={finish} openness={openness} />
    <OrbitControls minDistance={3.5} maxDistance={9} maxPolarAngle={Math.PI / 2.05} target={orbitTarget} />
  </>;
}

export function CurtainScene() {
  const [type, setType] = useState<CurtainType>('Gorden kain');
  const [finish, setFinish] = useState<Finish>('linen');
  const [openness, setOpenness] = useState(0.35);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(19rem,.75fr)] lg:gap-12">
      <section aria-label="Pratinjau ruang" className="min-w-0">
        <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-b border-[var(--line)] py-4">
          <h2 className="text-base font-medium tracking-[-.025em]">Pratinjau ruang</h2>
          <p className="text-xs text-[var(--muted)]">{type} <span aria-hidden="true">/</span> {finishes[finish].label}</p>
        </div>
        <div className="overflow-hidden border border-[var(--line)] bg-[#e8e2d7]">
          <div className="h-[62svh] min-h-[390px] max-h-[640px] sm:min-h-[460px]">
            <Canvas shadows dpr={[1, 1.5]} camera={camera}>
              <Room type={type} finish={finish} openness={openness} />
            </Canvas>
          </div>
          <p className="border-t border-black/10 px-4 py-3 text-xs leading-5 text-[var(--muted)] sm:px-5">
            Seret ruang untuk melihatnya dari sudut lain.
          </p>
        </div>
      </section>

      <aside aria-label="Pengaturan penutup jendela" className="border-t border-[var(--line)] lg:border-l lg:border-t-0 lg:pl-8">
        <div className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] py-4">
          <h2 className="text-base font-medium tracking-[-.025em]">Atur penutup jendela</h2>
          <span className="shrink-0 text-xs text-[var(--muted)]">Perubahan langsung</span>
        </div>

        <fieldset className="border-b border-[var(--line)] py-6">
          <legend className="text-sm font-semibold">Jenis</legend>
          <div className="mt-3">
            {types.map((item) => {
              const selected = type === item;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setType(item);
                    if (item !== 'Venetian blind' && finish === 'wood') setFinish('linen');
                  }}
                  className={`flex min-h-12 w-full items-center justify-between gap-4 border-b border-[var(--line)] px-2 text-left text-sm transition-colors hover:text-[var(--forest)] focus-visible:outline-offset-[-2px] ${selected ? 'bg-[var(--surface)] font-semibold text-[var(--forest)]' : 'text-[var(--muted)]'}`}
                >
                  <span>{item}</span>
                  <span aria-hidden="true" className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${selected ? 'border-[var(--forest)]' : 'border-[var(--line)]'}`}>
                    {selected && <span className="h-2 w-2 rounded-full bg-[var(--forest)]" />}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="border-b border-[var(--line)] py-6">
          <legend className="text-sm font-semibold">Finishing</legend>
          <div className="mt-3 grid grid-cols-2 gap-x-4">
            {(Object.keys(finishes) as Finish[])
              .filter((item) => item !== 'wood' || type === 'Venetian blind')
              .map((item) => {
                const selected = finish === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setFinish(item)}
                    className={`flex min-h-11 items-center gap-2 border-b py-2 text-left text-sm transition-colors hover:text-[var(--forest)] focus-visible:outline-offset-[-2px] ${selected ? 'border-[var(--forest)] font-semibold text-[var(--forest)]' : 'border-[var(--line)] text-[var(--muted)]'}`}
                  >
                    <span aria-hidden="true" className="h-3.5 w-3.5 shrink-0 border border-black/10" style={{ backgroundColor: finishes[item].color }} />
                    {finishes[item].label}
                  </button>
                );
              })}
          </div>
          {type !== 'Venetian blind' && <p className="mt-3 text-xs leading-5 text-[var(--muted)]">Kayu oak tersedia untuk Venetian blind.</p>}
        </fieldset>

        <div className="py-6">
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="curtain-openness" className="text-sm font-semibold">Bukaan</label>
            <output htmlFor="curtain-openness" className="editorial text-2xl text-[var(--forest)]">
              {Math.round(openness * 100)}%
            </output>
          </div>
          <input
            id="curtain-openness"
            aria-valuetext={`${Math.round(openness * 100)}% terbuka`}
            className="mt-5 block min-h-6 w-full cursor-pointer accent-[var(--forest)]"
            min="0"
            max="1"
            step="0.05"
            type="range"
            value={openness}
            onChange={(event) => setOpenness(Number(event.target.value))}
          />
          <div className="mt-1 flex justify-between text-xs text-[var(--muted)]">
            <span>Lebih tertutup</span>
            <span>Lebih terbuka</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
