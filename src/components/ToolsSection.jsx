import SketchUp from "../assets/images/sketchup-logo.png";
import Photoshop from "../assets/images/photoshop-logo.png";
import Autocad from "../assets/images/autocad-logo.png";
import Qgis from "../assets/images/qgis-logo.png";
import Lumion from "../assets/images/lumion-logo.webp";

export default function ToolsSection() {
  return (
    <section className="text-center pt-30 pb-20 bg-white px-4 md:px-10 w-7xl m-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
        You’ll Learn Tools Like
      </h2>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-32 mt-14">
        <div className="flex flex-col items-center gap-3">
          <img src={SketchUp} alt="SketchUp" className="h-16 md:h-24 object-contain" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Photoshop} alt="Photoshop" className="h-16 md:h-24 object-contain" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-32 mt-14">
        <div className="flex flex-col items-center gap-3">
          <img src={Autocad} alt="AutoCAD" className="h-16 md:h-24 object-contain" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Qgis} alt="QGIS" className="h-16 md:h-24 object-contain" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Lumion} alt="Lumion" className="h-16 md:h-24 object-contain" />
        </div>
      </div>
    </section>
  );
}
