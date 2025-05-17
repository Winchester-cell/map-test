import dynamic from 'next/dynamic';

const  MapView  = dynamic(() => import('@/comps/MapView'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      < MapView />
    </>
  );
}
