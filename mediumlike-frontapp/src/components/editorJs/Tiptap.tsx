"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Heading from "@tiptap/extension-heading";

const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: { class: "text-xl", levels: [2] },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: "min-h-[150px] ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor?.getHTML() || "");
    },
  });

  return (
    <div className="">
      <EditorContent editor={editor} />
      <Toolbar editor={editor} />
    </div>
  );
};

export default Tiptap;
