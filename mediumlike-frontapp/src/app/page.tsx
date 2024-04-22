import ArticleCards from "@/components/articleCards";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Button>Hi</Button>
        <ArticleCards />
      </main>
    </>
  );
}
