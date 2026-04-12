import { useState } from "react";
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import {
  FaGripLines,
  FaPlus,
  FaGlobe
} from "react-icons/fa";

import { MdDeleteOutline } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import { useData } from "../../../contexts/DataContext";


// helper
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};


const SortableItem = ({
  link,
  updateLink,
  deleteLink
}) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: link.id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };


  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
        group bg-white rounded-2xl p-4
        flex items-center gap-4
        border border-gray-100
        hover:border-indigo-200
        hover:shadow-sm
        transition
      "
    >

      {/* drag */}
      <FaGripLines
        {...attributes}
        {...listeners}
        className="text-gray-300 cursor-grab active:cursor-grabbing"
      />


      {/* icon */}
      <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl">
        <FaGlobe size={14} />
      </div>


      {/* inputs */}
      <div className="flex-1">

        <input
          placeholder="Title"
          value={link.title}
          onChange={(e) =>
            updateLink(link.id, { title: e.target.value })
          }
          className="
            w-full font-medium text-gray-800
            bg-transparent focus:outline-none
            focus:text-indigo-600
          "
        />


        <input
          placeholder="https://example.com"
          value={link.url}
          onChange={(e) =>
            updateLink(link.id, { url: e.target.value })
          }
          className={`
            w-full text-sm
            bg-transparent focus:outline-none
            ${
              link.url && !isValidUrl(link.url)
                ? "text-red-400"
                : "text-gray-400 focus:text-indigo-500"
            }
          `}
        />

      </div>


      {/* controls */}
      <div className="flex items-center gap-2">

        <button
          title="show / hide"
          onClick={() =>
            updateLink(link.id, {
              visible: !link.visible
            })
          }
          className="text-gray-400 hover:text-indigo-600"
        >

          {link.visible
            ? <IoEyeOutline />
            : <IoEyeOffOutline />}

        </button>


        <button
          title="delete"
          onClick={() =>
            deleteLink(link.id)
          }
          className="
            opacity-0 group-hover:opacity-100
            text-gray-400 hover:text-red-500
            transition
          "
        >

          <MdDeleteOutline />

        </button>

      </div>

    </div>
  );

};



const MyLinks = () => {

  const {
    links,
    addLink,
    updateLink,
    deleteLink,
    reorderLinks
  } = useData();



  const handleDragEnd = (event) => {

    const { active, over } = event;

    // prevent crash
    if (!over || active.id === over.id)
      return;

    const oldIndex =
      links.findIndex(i => i.id === active.id);

    const newIndex =
      links.findIndex(i => i.id === over.id);

    reorderLinks(
      arrayMove(links, oldIndex, newIndex)
    );

  };


  const handleAddLink = () => {

    addLink({
      id: crypto.randomUUID(),
      title: "",
      url: "",
      visible: true
    });

  };


  return (

    <div className="grid lg:grid-cols-2 gap-12">

      {/* editor */}
      <div>

        <div className="mb-8">

          <h1 className="text-2xl font-semibold text-gray-800">
            My Links
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Build your inToBio page
          </p>

        </div>


        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >

          <SortableContext
            items={links.map(l => l.id)}
            strategy={verticalListSortingStrategy}
          >

            <div className="space-y-3">

              {
                links.length === 0 && (
                  <div className="
                    text-center py-10 text-gray-400
                    border border-dashed rounded-2xl
                  ">
                    No links yet
                  </div>
                )
              }

              {links.map(link => (

                <SortableItem
                  key={link.id}
                  link={link}
                  updateLink={updateLink}
                  deleteLink={deleteLink}
                />

              ))}


              <button
                onClick={handleAddLink}
                className="
                  w-full border-2 border-dashed
                  border-gray-200 rounded-2xl py-3
                  flex items-center justify-center gap-2
                  text-gray-400
                  hover:border-indigo-400
                  hover:text-indigo-600
                  transition
                "
              >

                <FaPlus />
                Add link

              </button>

            </div>

          </SortableContext>

        </DndContext>

      </div>



      {/* preview */}
{/* phone preview */}
<div className="flex justify-center">

  {/* phone frame */}
  <div className="
    relative
    w-[340px]
    h-[680px]
    bg-black
    rounded-[48px]
    p-[10px]
    shadow-2xl
  ">

    {/* screen */}
    <div className="
      relative
      w-full
      h-full
      bg-white
      rounded-[38px]
      overflow-hidden
    ">

      {/* notch */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[160px]
        h-[30px]
        bg-black
        rounded-b-2xl
        z-20
      " />

      {/* speaker */}
      <div className="
        absolute
        top-2
        left-1/2
        -translate-x-1/2
        w-16
        h-1
        bg-gray-700
        rounded-full
        z-30
      " />

      {/* content scroll */}
      <div className="
        h-full
        overflow-y-auto
        pb-10
      ">

        {/* cover */}
        <div className="
          h-36
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
        " />

        {/* avatar */}
        <div className="
          w-24
          h-24
          bg-white
          rounded-full
          border-4 border-white
          shadow
          -mt-12
          mx-auto
        " />

        {/* username */}
        <div className="text-center mt-3 px-6">

          <h3 className="font-semibold text-lg">
            @username
          </h3>

          <p className="text-sm text-gray-500">
            digital creator
          </p>

        </div>

        {/* links */}
        <div className="mt-6 px-6 space-y-3">

          {
            links
              .filter(l => l.visible)
              .map(link => (

                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block
                    bg-gradient-to-r
                    from-indigo-50
                    to-purple-50
                    text-indigo-700
                    text-center
                    py-3
                    rounded-xl
                    font-medium
                    shadow-sm
                    hover:scale-[1.02]
                    transition
                  "
                >

                  {link.title || "Untitled"}

                </a>

              ))
          }

        </div>

        {/* footer */}
        <p className="text-center text-xs text-gray-400 mt-8">

          inToBio

        </p>

      </div>

    </div>

  </div>

</div>

    </div>

  );

};


export default MyLinks;