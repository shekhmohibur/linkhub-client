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

      <FaGripLines
        {...attributes}
        {...listeners}
        className="text-gray-300 cursor-grab"
      />


      {/* icon */}
      <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl">

        <FaGlobe size={14} />

      </div>


      {/* text */}
      <div className="flex-1">

        <input
          value={link.title}
          onChange={(e) =>
            updateLink(
              link.id,
              "title",
              e.target.value
            )
          }
          className="
            w-full font-medium text-gray-800
            bg-transparent focus:outline-none
            focus:text-indigo-600
          "
        />


        <input
          value={link.url}
          onChange={(e) =>
            updateLink(
              link.id,
              "url",
              e.target.value
            )
          }
          className="
            w-full text-sm text-gray-400
            bg-transparent focus:outline-none
            focus:text-indigo-500
          "
        />

      </div>


      {/* controls */}
      <div className="flex items-center gap-2">

        <button
          onClick={() =>
            updateLink(
              link.id,
              "visible",
              !link.visible
            )
          }
          className="text-gray-400 hover:text-indigo-600"
        >

          {link.visible
            ? <IoEyeOutline />
            : <IoEyeOffOutline />}

        </button>


        <button
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

  const { links, addLink, updateLink, deleteLink, reorderLinks } = useData();

  const handleDragEnd =
    event => {

      const {
        active,
        over
      } = event;

      if (
        active.id !== over.id
      ) {

        const oldIndex =
          links.findIndex(
            i =>
              i.id ===
              active.id
          );

        const newIndex =
          links.findIndex(
            i =>
              i.id ===
              over.id
          );

        const newOrder = arrayMove(
          links,
          oldIndex,
          newIndex
        );

        reorderLinks(newOrder);

      }

    };

  const handleAddLink = () => {
    addLink({
      title: "New Link",
      url: "https://",
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
          collisionDetection={
            closestCenter
          }
          onDragEnd={
            handleDragEnd
          }
        >

          <SortableContext
            items={links}
            strategy={
              verticalListSortingStrategy
            }
          >

            <div className="space-y-3">

              {links.map(
                link => (

                  <SortableItem
                    key={link.id}
                    link={link}
                    updateLink={
                      (id, field, value) => updateLink(id, { [field]: value })
                    }
                    deleteLink={
                      deleteLink
                    }
                  />

                )
              )}


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


      {/* phone preview */}
      <div className="flex justify-center">

        <div className="
          w-[320px]
          bg-white
          rounded-[42px]
          border border-gray-200
          shadow-xl
          p-6
        ">

          <div className="
            h-32
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
            rounded-3xl
          " />


          <div className="
            w-20 h-20
            bg-white
            rounded-full
            border-4 border-white
            shadow
            -mt-10 mx-auto
          " />


          <div className="text-center mt-3">

            <h3 className="font-semibold">

              @username

            </h3>

            <p className="text-sm text-gray-500">

              digital creator

            </p>

          </div>


          <div className="mt-6 space-y-3">

            {links

              .filter(
                l =>
                  l.visible
              )

              .map(
                link => (

                  <div
                    key={
                      link.id
                    }
                    className="
                      bg-gradient-to-r
                      from-indigo-50
                      to-purple-50
                      text-indigo-700
                      text-center
                      py-2.5
                      rounded-xl
                      font-medium
                      hover:scale-[1.02]
                      transition
                    "
                  >

                    {
                      link.title
                    }

                  </div>

                )
              )}

          </div>


          <p className="text-center text-xs text-gray-400 mt-6">

            inToBio

          </p>

        </div>

      </div>

    </div>

  );

};


export default MyLinks;