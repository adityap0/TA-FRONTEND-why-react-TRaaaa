let data = require("../colors.json");
const Colorpellete = () => {
  const colorKeys = Object.keys(data);
  const colorData = Object.values(data);
  //   {/* style={{ backgroundColor: `${color}` }} */}

  return (
    <>
      {colorKeys.map((clr) => {
        return (
          <>
            <div className="flex flex-col justify-between align-middle">
              <div className="flex flex-row justify-between align-middle">
                <div className="w-3/12 bg-green-300 p-4 m-10">
                  <h1 className="text-xl font-bold">{clr}</h1>
                  <p className="text-gray-500">colors.{clr}</p>
                </div>
                <div className="w-9/12 p-4 m-10 flex flex-row flex-wrap justify-between">
                  {colorData.map((clrData) => {
                    return clrData.map((clrCode) => {
                      return (
                        <>
                          <div className="flex flex-col align-middle m-2">
                            <div
                              className="w-40 p-6 rounded bg-indigo-400"
                              style={{ backgroundColor: `${clrCode}` }}
                            ></div>
                            <div className="flex flex-row justify-between align-middle">
                              <p>50</p>
                              <p>#43bdsf</p>
                            </div>
                          </div>
                        </>
                      );
                    });
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Colorpellete;
