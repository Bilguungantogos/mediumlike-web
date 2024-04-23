"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
} from "lucide-react";
import { Toggle } from "../ui/toggle";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="border border-input bg-transparent rounded-br-md">
      <Toggle
        size="lg"
        pressed={editor.isActive("heading")}
        onPressedChange={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <Heading2 size={20} />
      </Toggle>
      <Toggle
        size="lg"
        pressed={editor.isActive("bold")}
        onPressedChange={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <Bold size={20} />
      </Toggle>
      <Toggle
        size="lg"
        pressed={editor.isActive("italic")}
        onPressedChange={() => {
          editor.chain().focus().toggleItalic().run();
        }}
      >
        <Italic size={20} />
      </Toggle>
      <Toggle
        size="lg"
        pressed={editor.isActive("strike")}
        onPressedChange={() => {
          editor.chain().focus().toggleStrike().run();
        }}
      >
        <Strikethrough size={20} />
      </Toggle>
      <Toggle
        size="lg"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
      >
        <List size={20} />
      </Toggle>
      <Toggle
        size="lg"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <ListOrdered size={20} />
      </Toggle>
    </div>
  );
};

export default Toolbar;
