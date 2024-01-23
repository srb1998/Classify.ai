import { utapi } from "@/app/utils/uploadingthing";
import { pipeline } from '@xenova/transformers';

export async function POST(req: Request, res: Response){
    // get uploaded url from uploadthing
    const formData = await req.formData();
    const files = formData.getAll("files");
    const response = await utapi.uploadFiles(files);
    const responseData = response[0].data;
    const url = responseData?.url;
    // console.log(url);

    if (url) {
        const detector = await pipeline("object-detection", "Xenova/detr-resnet-50");
        const output = await detector(url);
        console.log(output);

        // Label (detected objeects)
        const countObj: { [key: string]: number } = {};
        output.forEach(({score,label}: any) => {
            if(score > 0.85){
                if(countObj[label]){
                    countObj[label] += 1;
                }
                else {
                    countObj[label] = 1;
                }
            }
        });
        return new Response(JSON.stringify({
            URL: url,
            label: JSON.stringify(countObj)
        }), {status: 200})
    } else {
        console.error("URL is undefined");
        return new Response(JSON.stringify({
            error: "URL is undefined"
        }), {status: 400})
    }
    
}