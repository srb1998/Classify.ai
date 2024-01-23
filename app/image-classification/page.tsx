"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageIcon, Loader2, ScanSearchIcon } from "lucide-react"
import axios from "axios";
import { cn } from "@/lib/utils";
import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
type Props = {}

const ImageClassificationPage = (props: Props) => {
  const [url, setUrl] = useState('')
  const [label , setLabel] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-start p-10 gap-2">
        <form onSubmit={uploadFiles} className="flex gap-2 items-center">
          <ImageIcon />
          <Input name="files" type="file"></Input>
          <Button disabled={loading} type="submit">
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <ScanSearchIcon size={20} />
            )}
          </Button>
        </form>
        {url && (
          <>
            <Image src={url} alt="Uploaded Image" width={400} height={400} />
            <Link
              href={url}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-xs text-muted-foreground"
              )}
            ></Link>
          </>
        )}
        {label && (
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 ">Item</th>
                <th className="px-4 py-2">Count</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(JSON.parse(label)).map(([item, count]) => (
                <tr key={item}>
                  <td className="border px-4 py-2">{item}</td>
                  <td className="border px-4 py-2">{count as number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </>
  );
  //Handler Functions
  async function uploadFiles(e: any){
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const response = await axios.post('/api/classify-image', formData);
    setLoading(false);
    setUrl(response.data.URL);
    console.log("after processing image",response.data.url)
    setLabel(response.data.label);
  }
}

export default ImageClassificationPage