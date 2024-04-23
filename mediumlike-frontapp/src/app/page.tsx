import ArticleCards from "@/components/articleCards";
import Editor from "@/components/editorJs";
import Header from "@/components/header";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-full">
        <div className=" w-full h-[80vh] bg-slate-100">
          <div className="max-w-[1000px] mx-auto py-20">
            <Editor />
          </div>
        </div>
      </div>
    </>
  );
}
