import { photoSizes } from "../constant";

const Jimp = require("jimp");
const outpath = "thumb";

type IOptimize = Record<string, string>;

// generate thumbnails image
export async function optimize(
  id: string,
  path: string,
  ext = "jpg"
): Promise<IOptimize> {
  const image = await Jimp.read(path);
  const result: IOptimize = {};

  await Promise.all(
    Object.keys(photoSizes).map(async (key) => {
      const [width, quality] = photoSizes[key];
      const opath = `${outpath}/${id}-${key}.${ext}`;
      try {
        if (width) await image.resize(width, Jimp.AUTO);
        if (quality) await image.quality(quality);
        await image.writeAsync(opath);
        result[key] = opath;
      } catch (e) {
        console.error(e.message);
        return false;
      }
    })
  );
  return result;
}

// test
if (require.main === module) {
  const testing = async () => {
    const result = await optimize(
      "2b301b3e-00a0-11ea-a1df-d319b5694f62",
      "assets/vehicle_image-2b301b3e-00a0-11ea-a1df-d319b5694f62.jpg"
    );
    console.log(result);
  };
  testing();
}
