import planetHorizonImage from "@assets/image_1762389038383.png";

export default function PlanetHorizon() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${planetHorizonImage})`,
          backgroundPosition: 'center bottom'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent" />
    </div>
  );
}
