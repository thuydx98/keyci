import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillCaretRight } from "react-icons/ai";

export default function VideoModal(props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold mt-10 py-2 px-4 border border-yellow-500 rounded-lg flex"
        onClick={() => setModalOpen(true)}
      >
        <AiFillCaretRight className="text-2xl" />
        Watch now
      </button>

      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          {/* 2. The backdrop layer */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />

          {/* 3. The modal video */}
          <Transition.Child
            className="fixed inset-0 z-[99999] flex p-0"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="max-w-5xl mx-auto h-full w-11/12 sm:w-12/12 flex items-center">
              <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                <iframe
                  title="video"
                  width="100%"
                  height="100%"
                  src={props.source}
                ></iframe>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
